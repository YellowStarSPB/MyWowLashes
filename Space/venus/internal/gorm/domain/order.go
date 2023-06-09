package db_domain

import (
	"time"
	"venus/internal/gin/api/domain"

	"gorm.io/gorm"
)

type Order struct {
	gorm.Model
	Status      string
	Time        time.Time
	Description string
	UserId      uint
}

// ConvertToAPI - function for converting DB struct into API struct
func (o Order) ConvertToAPI() *domain.GetOrderByIdResponse {
	return &domain.GetOrderByIdResponse{
		Status:      o.Status,
		Time:        o.Time,
		Description: o.Description,
		UserId:      o.UserId,
	}
}
