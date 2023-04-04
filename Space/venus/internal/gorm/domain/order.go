package db_domain

import (
	"time"
	"venus/internal/gin/api/domain"

	"gorm.io/gorm"
)

type Status string

const (
	status_accepted Status = "accepted"
	status_canceled Status = "canceled"
	status_pending  Status = "pending"
)

type Order struct {
	gorm.Model
	Status Status `gorm:"type:Status"`
	Time   time.Time
	User   User
}

// ConvertToAPI - function for converting DB struct into API struct
func (o Order) ConvertToAPI() *domain.GetOrderByIdResponse {
	return &domain.GetOrderByIdResponse{
		Status: domain.Status(o.Status),
		Time:   o.Time,
	}
}
