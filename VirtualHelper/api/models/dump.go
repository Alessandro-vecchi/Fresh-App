package models

import (
	"gorm.io/gorm"
)

// User represents the user model with simulated Google Health data
type User struct {
	gorm.Model         // Includes fields ID, CreatedAt, UpdatedAt, DeletedAt
    Username    string `json:"username"`
    Points      int    `json:"points"`
    Nationality string `json:"nationality"`
    ConsentGiven bool  `json:"consentGiven"` // Whether the user has given consent to use their data
	HealthData  HealthData `gorm:"foreignKey:UserID"` // Use UserID as foreign key
	Groups     []Group `gorm:"many2many:user_groups;"`
}

type Vegetable struct {
	gorm.Model         // Includes fields ID, CreatedAt, UpdatedAt, DeletedAt
	Name        string `json:"name"`
	GrowthStage string `json:"growthStage"`
	UserID      uint   `json:"-"` // The user this vegetable belongs to
}

type HealthData struct {
	gorm.Model                // Includes fields ID, CreatedAt, UpdatedAt, DeletedAt
	Steps             int     `json:"steps"`
	SleepHours        int     `json:"sleepHours"`
	WaterIntakeLiters float64 `json:"waterIntakeLiters"`
	UserID            uint    `json:"-"` // The user this health data belongs to
}

// Tip represents a health and wellness tip
type Tip struct {
	Content    string `json:"content"`
}

type Group struct {
	gorm.Model
	Type string `json:"type"`
	City string `json:"city"`
}