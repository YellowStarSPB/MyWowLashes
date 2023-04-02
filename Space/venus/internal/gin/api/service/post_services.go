package service

import (
	"venus/internal/gin/api/domain"
	db_services "venus/internal/gorm/services"
)

func PostServices(req domain.PostServicesRequest, dbc db_services.DbController) (*domain.PostServicesResponse, error) {
	resp, err := dbc.ServicesNew(req.Price, req.Type, req.Hidden)
	if err != nil {
		return nil, err
	}

	return &domain.PostServicesResponse{ServicesId: *resp}, nil
}
