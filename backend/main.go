package main

import (
	"context"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"backend/api"
	"backend/api/models"
	"backend/database"

	"github.com/gin-gonic/gin"
	"github.com/sirupsen/logrus"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func init() {
	// Connect to the database
	var err error
	database.DB, err = gorm.Open(sqlite.Open("server.db"), &gorm.Config{}) // Adjusted to use sqlite.Open for GORM v2
	if err != nil {
		logrus.Fatalf("failed to connect database: %s", err)
	}
	// Automatically migrate your schema
	database.DB.AutoMigrate(&models.User{}, &models.Vegetable{})
}

func main() {
	// Initialize logging
	logger := logrus.New()
	logger.SetOutput(os.Stdout)
	logger.SetLevel(logrus.InfoLevel)

	// Set Gin to release mode
	gin.SetMode(gin.ReleaseMode)

	logger.Infof("Connecting to database...")
	// Connect to the database
	database.ConnectDatabase()

	logger.Infof("Seeding database...")

	// Seed the database with initial data
	seedIfNecessary(logger)

	logger.Infof("Initializing API...")

	// Initialize API handlers and register routes
	r := api.SetupRouter()

	// Apply the CORS middleware
	r.Use(CORS())

	// Start the service listening for requests
	srv := &http.Server{
		Addr:    "0.0.0.0:8080",
		Handler: r,
	}

	logger.Infof("API listening on %s", srv.Addr)

	go func() {
		if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			logger.Fatalf("listen: %s\n", err)
		}
	}()

	// Wait for interrupt signal to gracefully shutdown the server with a timeout
	quit := make(chan os.Signal, 1)                      // buffer size of 1
	signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM) // Ctrl+C or kill
	<-quit
	logger.Println("Shutting down server gracefully...")

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	if err := srv.Shutdown(ctx); err != nil {
		logger.Fatal("Server forced to shutdown:", err)
	}

	logger.Println("Server exiting")
}

func seedIfNecessary(logger *logrus.Logger) {

	// Check and seed Users
	var userCount int64
	database.DB.Model(&models.User{}).Count(&userCount)
	if userCount == 0 {
		logger.Infof("Seeding users...")
		database.SeedUsers()
	}

	// Check and seed Vegetables
	var vegetableCount int64
	database.DB.Model(&models.Vegetable{}).Count(&vegetableCount)
	if vegetableCount == 0 {
		logger.Infof("Seeding vegetables...")
		database.SeedVegetables()
	}

	// Check and seed Groups
	var groupCount int64
	database.DB.Model(&models.Group{}).Count(&groupCount)
	if groupCount == 0 {
		logger.Infof("Seeding groups...")
		database.SeedGroups()
	}

	// Check and seed Groups
	var tipCount int64
	database.DB.Model(&models.Tip{}).Count(&tipCount)
	if groupCount == 0 {
		logger.Infof("Seeding tips...")
		database.SeedTip()
	}
}

// CORS middleware to set necessary headers
func CORS() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
