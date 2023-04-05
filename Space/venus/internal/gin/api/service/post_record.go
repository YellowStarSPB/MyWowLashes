package service

import (
	"venus/internal/gin/api/domain"
	db_services "venus/internal/gorm/services"
)

func PostRecord(req domain.PostRecordRequest, dbc db_services.DbController) (*domain.PostRecordResponse, error) {
	user, err := dbc.UserNew(req.User.UserName, req.User.Call, req.User.Email)
	if err != nil {
		return nil, err
	}
	order, err := dbc.OrderNew(req.Order.Status, req.Order.Time, req.Order.UserId)
	if err != nil {
		return nil, err
	}
	return &domain.PostRecordResponse{
		OrderId: *order,
		UserId:  *user,
	}, nil
}
