package db_domain

import (
	"time"

	"gorm.io/gorm"
)

type Talon struct {
	gorm.Model
	Time time.Time
}

func (t Talon) ConvertToAPI() {}
