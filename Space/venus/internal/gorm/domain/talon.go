package db_domain

import (
	"time"

	"gorm.io/gorm"
)

type Talon struct {
	gorm.Model
	Time    time.Time
	UserID  uint
	OrderID uint
}

// ConvertToAPI - function for converting DB struct into API struct
func (t Talon) ConvertToAPI() {}
