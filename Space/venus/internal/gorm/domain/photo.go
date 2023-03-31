package db_domain

import (
	"gorm.io/gorm"
)

type Photo struct {
	gorm.Model
	ImageName  string
	ImageUrl   string
	Hidden     bool
	ServicesId uint
}
