package db_domain

import (
	"venus/internal/gin/api/domain"

	"gorm.io/gorm"
)

type Photo struct {
	gorm.Model
	ImageName  string
	ImageUrl   string
	Hidden     bool
	ServicesId uint
}

// ConvertToAPI - function for converting DB struct into API struct
func (p Photo) ConvertToAPI() *domain.GetPhotoByIdResponse {
	return &domain.GetPhotoByIdResponse{
		ImageName:  p.ImageName,
		ImageUrl:   p.ImageUrl,
		Hidden:     p.Hidden,
		ServicesId: p.ServicesId,
	}
}
