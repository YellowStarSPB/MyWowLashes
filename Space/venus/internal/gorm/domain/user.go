package db_domain

import (
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	UserName        string
	PhoneNumber     string
	Instagram       string
	CallPreferences string
	Talon           Talon
	OrderID         uint
}
