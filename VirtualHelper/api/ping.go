package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// PingHandler responds to ping requests.
func PingHandler(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "pong",
	})
}
