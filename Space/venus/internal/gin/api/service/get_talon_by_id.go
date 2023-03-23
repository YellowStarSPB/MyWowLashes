package service

import (
	"venus/internal/gin/api/domain"
	db_services "venus/internal/gorm/services"
)

func GetTalonById(talonId uint, dbc db_services.DbController) (*domain.GetTalonByIdResponse, error) {
	resp, err := dbc.TalonGetById(talonId)
	if err != nil {
		return nil, err
	}

	return resp.ConvertToAPI(), nil
}
