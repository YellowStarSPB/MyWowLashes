package service

import (
	"venus/internal/gin/api/domain"
	db_services "venus/internal/gorm/services"
)

func GetServicesById(servicesId uint, dbc db_services.DbController) (*domain.GetServicesByIdResponse, error) {
	resp, err := dbc.ServicesGetById(servicesId)
	if err != nil {
		return nil, err
	}

	return resp.ConvertToAPI(), nil
}
