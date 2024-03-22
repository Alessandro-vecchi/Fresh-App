package api

import (
	"backend/api/models"
	"backend/database"
	"net/http"

	"github.com/gin-gonic/gin"
)
type UserEntry struct {
	ID    uint `json:"id"`
    Username    string `json:"username"`
    Points      int    `json:"points"`
    Nationality string `json:"nationality"`
	Groups []models.Group `json:"groups"`

}
func GetUsers(c *gin.Context) {

	var users []UserEntry
	result := database.DB.Find(&[]models.User{}).Scan(&users)

	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to retrieve users"})
		return
	}

	c.JSON(http.StatusOK, users)
}

func CreateUser(c *gin.Context) {
	// Implementation for creating a user
}

func GetUser(c *gin.Context) {
    userId := c.Param("id")
    var user models.User

    if result := database.DB.Preload("Vegetables").First(&user, userId); result.Error != nil {
        c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
        return
    }

    c.JSON(http.StatusOK, user)
}
