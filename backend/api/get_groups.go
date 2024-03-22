package api

import (
	"backend/api/models"
	"backend/database"
	"net/http"

	"github.com/gin-gonic/gin"
)
// Define a struct to hold the leaderboard entry data you're interested in
type GroupEntry struct {
	Type    string `json:"type"`
	City 	string    `json:"city"`
}

func GetGroups(c *gin.Context) {
	var groups []GroupEntry
	result := database.DB.Find(&[]models.Group{}).Scan(&groups)

	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to retrieve groups"})
		return
	}

	c.JSON(http.StatusOK, groups)
}
