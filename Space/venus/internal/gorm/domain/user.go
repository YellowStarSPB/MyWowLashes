package db_domain

import (
	"venus/internal/gin/api/domain"

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

// ConvertToAPI - function for converting DB struct into API struct
func (u User) ConvertToAPI() *domain.GetUserByIdResponse {
	return &domain.GetUserByIdResponse{
		UserName:        u.UserName,
		PhoneNumber:     u.PhoneNumber,
		Instagram:       u.Instagram,
		CallPreferences: u.CallPreferences,
		OrderID:         u.OrderID,
	}
}
