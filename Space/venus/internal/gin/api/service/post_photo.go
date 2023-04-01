package service

import (
	"venus/internal/gin/api/domain"
	db_services "venus/internal/gorm/services"
)

func PostPhoto(req domain.PostPhotoRequest, dbc db_services.DbController) (*domain.PostPhotoResponse, error) {
	resp, err := dbc.PhotoNew(req.ImageName, req.ImageUrl, req.Hidden, req.ServicesId)
	if err != nil {
		return nil, err
	}

	return &domain.PostPhotoResponse{PhotoId: *resp}, nil
}
