package api

import (
	"backend/api/models"
	"backend/database"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetGroupsForUser(c *gin.Context) {
	userID := c.Param("userID") // Assuming the user ID is passed as a URL parameter

	var user models.User
	if err := database.DB.Preload("Groups").First(&user, userID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}

	c.JSON(http.StatusOK, user.Groups)
}
