package db_domain

import (
	"gorm.io/gorm"
)

type Services struct {
	gorm.Model
	Price   uint
	Name    string
	ImageID uint
	Hidden  bool
}
