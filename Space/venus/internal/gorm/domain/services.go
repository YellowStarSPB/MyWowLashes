package db_domain

import (
	"gorm.io/gorm"
)

type Services struct {
	gorm.Model
	Price  uint
	Type   string
	Hidden bool
	Photo  Photo
}
