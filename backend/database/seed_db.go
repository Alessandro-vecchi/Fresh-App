package database

import (
	"backend/api/models"
)

// SeedDatabase seeds the database with initial data
func SeedTip() {
	tips := []models.Tip{
		{Content: "Drink at least 8 glasses of water a day."},
		{Content: "Take short breaks every hour to stretch or walk around."},
		{Content: "Include fruits and vegetables in every meal."},
		{Content: "Get at least 7 hours of sleep each night."},
		{Content: "Practice mindfulness or meditation to manage stress."},
		{Content: "Engage in regular physical activity or exercise."},
		{Content: "Limit processed foods and sugary drinks."},
		{Content: "Spend time outdoors to increase your vitamin D levels."},
		{Content: "Set realistic health and wellness goals."},
		{Content: "Keep a journal to reflect on your daily experiences and feelings."},
	}

	for _, tip := range tips {
		DB.FirstOrCreate(&tip, models.Tip{Content: tip.Content})
	}
}


func SeedUsers() {
	users := []models.User{
		{Username: "Alice", Points: 100, Nationality: "USA", ConsentGiven: true},
		{Username: "Bob", Points: 150, Nationality: "Canada", ConsentGiven: false},
		{Username: "Charlie", Points: 120, Nationality: "UK", ConsentGiven: true},
		{Username: "Diana", Points: 130, Nationality: "Australia", ConsentGiven: true},
		{Username: "Ethan", Points: 110, Nationality: "Germany", ConsentGiven: false},
		{Username: "Matteo", Points: 70, Nationality: "Italy", ConsentGiven: true},
	}

	for _, user := range users {
		DB.Create(&user)
	}
}

func SeedGroups() {
	groups := []models.Group{
		{Type: "Running Club", City: "New York"},
		{Type: "Cooking Club", City: "Paris"},
		{Type: "Football Club", City: "London"},
	}

	for _, group := range groups {
		DB.Create(&group)
	}
}

func SeedVegetables() {
	vegetables := []models.Vegetable{
		{Name: "Carrot", GrowthStage: "Seedling"},
		{Name: "Tomato", GrowthStage: "Flowering"},
		{Name: "Lettuce", GrowthStage: "Harvesting"},
		{Name: "Cucumber", GrowthStage: "Germinating"},
		{Name: "Pepper", GrowthStage: "Fruiting"},
	}

	for _, vegetable := range vegetables {
		DB.Create(&vegetable)
	}
}
