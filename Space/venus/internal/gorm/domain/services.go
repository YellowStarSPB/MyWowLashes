package db_domain

import (
	"venus/internal/gin/api/domain"

	"gorm.io/gorm"
)

type Services struct {
	gorm.Model
	Price  uint
	Type   string
	Hidden bool
	Photo  Photo
}

// ConvertToAPI - function for converting DB struct into API struct
func (s Services) ConvertToAPI() *domain.GetServicesByIdResponse {
	return &domain.GetServicesByIdResponse{
		Price:  s.Price,
		Type:   s.Type,
		Hidden: s.Hidden,
	}
}
