package api

import (
	"backend/database"
	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	router := gin.Default()

	database.ConnectDatabase()

	router.GET("/ping", PingHandler)
	
	// Retrieve detailed user profiles, including progress, health stats, and personalized wellness plans
    router.GET("/users", GetUsers)
    router.GET("/users/:id", GetUser)

	// Retrieve health and wellness tips
	router.GET("/tips/random", GetRandomTip)

	// Register the leaderboard endpoint
	router.GET("/leaderboard/global", GetGlobalLeaderboard)
	
	// Register the groups endpoints
	router.GET("/groups", GetGroups)
	router.GET("/groups/user/:userID", GetGroupsForUser)

	return router
}
