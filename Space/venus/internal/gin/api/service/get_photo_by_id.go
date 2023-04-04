package service

import (
	"venus/internal/gin/api/domain"
	db_services "venus/internal/gorm/services"
)

func GetPhotoById(photoId uint, dbc db_services.DbController) (*domain.GetPhotoByIdResponse, error) {
	resp, err := dbc.PhotoGetById(photoId)
	if err != nil {
		return nil, err
	}

	return resp.ConvertToAPI(), nil
}
