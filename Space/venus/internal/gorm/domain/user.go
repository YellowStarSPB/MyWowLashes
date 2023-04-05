package db_domain

import (
	"venus/internal/gin/api/domain"

	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	UserName string
	Call     string
	Email    string
	Order    []Order
}

// ConvertToAPI - function for converting DB struct into API struct
func (u User) ConvertToAPI() *domain.GetUserByIdResponse {
	return &domain.GetUserByIdResponse{
		UserName: u.UserName,
		Call:     u.Call,
		Email:    u.Email,
	}
}
