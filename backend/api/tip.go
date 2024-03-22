package api

import (
	"backend/api/models"
	"backend/database"
	"net/http"

	"github.com/gin-gonic/gin"
)

// GetRandomTip retrieves a random health and wellness tip from the database
func GetRandomTip(c *gin.Context) {
	var tip models.Tip
	// Order by RANDOM() function to get a random row and limit the result to 1
	result := database.DB.Order("RANDOM()").Limit(1).Find(&tip)

	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to retrieve a tip"})
		return
	}

	c.JSON(http.StatusOK, tip.Content)
}
