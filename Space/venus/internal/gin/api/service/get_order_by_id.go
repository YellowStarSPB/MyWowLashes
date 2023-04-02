package service

import (
	"venus/internal/gin/api/domain"
	db_services "venus/internal/gorm/services"
)

func GetOrderById(orderId uint, dbc db_services.DbController) (*domain.GetOrderByIdResponse, error) {
	resp, err := dbc.OrderGetById(orderId)
	if err != nil {
		return nil, err
	}

	return resp.ConvertToAPI(), nil
}
