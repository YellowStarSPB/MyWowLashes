package db_domain

import (
	"time"

	"gorm.io/gorm"
)

// Table struct
// NOTE this struct and struct in migration can be different. In this case actual struct.
type Talon struct {
	gorm.Model
	Time time.Time
}

// ConvertToAPI - function for converting DB struct into API struct
func (t Talon) ConvertToAPI() {}
