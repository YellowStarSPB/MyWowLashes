package service

import (
	"venus/internal/gin/api/domain"
	db_services "venus/internal/gorm/services"
)

func GetUserById(userId uint, dbc db_services.DbController) (*domain.GetUserByIdResponse, error) {
	resp, err := dbc.UserGetById(userId)
	if err != nil {
		return nil, err
	}

	return resp.ConvertToAPI(), nil
}
