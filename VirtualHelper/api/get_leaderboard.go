package api

import (
	"backend/api/models"
	"backend/database"
	"net/http"

	"github.com/gin-gonic/gin"
)

// Define a struct to hold the leaderboard entry data you're interested in
type LeaderboardEntry struct {
	Username    string `json:"username"`
	Points      int    `json:"points"`
	Nationality string `json:"nationality"`
}

// GetGlobalLeaderboard handles GET requests to fetch the global leaderboard
func GetGlobalLeaderboard(c *gin.Context) {
	var entries []LeaderboardEntry

	// Modify the query to select only the fields you're interested in
	// and limit the results to the first 4
	result := database.DB.Model(&models.User{}).
		Select("username, points, nationality").
		Order("points DESC").
		Limit(4).
		Find(&entries)

	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to retrieve leaderboard"})
		return
	}

	c.JSON(http.StatusOK, entries)
}
