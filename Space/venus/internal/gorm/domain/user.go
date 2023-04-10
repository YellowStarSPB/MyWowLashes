package db_domain

import (
	"venus/internal/gin/api/domain"

	"github.com/lib/pq"
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	UserName string
	Calls    pq.StringArray `gorm:"type:text[]"`
	Email    string
	Orders   []Order
}

// ConvertToAPI - function for converting DB struct into API struct
func (u User) ConvertToAPI() *domain.GetUserByIdResponse {
	return &domain.GetUserByIdResponse{
		UserName: u.UserName,
		Calls:    u.Calls,
		Email:    u.Email,
	}
}
