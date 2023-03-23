package db_domain

import (
	"time"
	"venus/internal/gin/api/domain"

	"gorm.io/gorm"
)

type Talon struct {
	gorm.Model
	Time    time.Time
	UserID  uint
	OrderID uint
}

// ConvertToAPI - function for converting DB struct into API struct
func (t Talon) ConvertToAPI() *domain.GetTalonByIdResponse {
	return &domain.GetTalonByIdResponse{
		Time:    t.Time,
		UserId:  t.UserID,
		OrderId: t.OrderID,
	}
}
