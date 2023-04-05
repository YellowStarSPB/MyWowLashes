package service

import (
	"venus/internal/gin/api/domain"
	db_services "venus/internal/gorm/services"
)

func PostOrder(req domain.PostOrderRequest, dbc db_services.DbController) (*domain.PostOrderResponse, error) {
	resp, err := dbc.OrderNew(req.Status, req.Time, req.UserId)
	if err != nil {
		return nil, err
	}

	return &domain.PostOrderResponse{OrderId: *resp}, nil
}
