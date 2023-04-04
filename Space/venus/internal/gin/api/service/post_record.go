package service

import (
	"venus/internal/gin/api/domain"
	db_services "venus/internal/gorm/services"
)

func PostRecord(req domain.PostTalonRequest, dbc db_services.DbController) (*domain.PostTalonResponse, error) {
	resp, err := dbc.TalonNew(req.Time, req.UserId, req.OrderId)
	if err != nil {
		return nil, err
	}

	return &domain.PostTalonResponse{TalonId: *resp}, nil
}
