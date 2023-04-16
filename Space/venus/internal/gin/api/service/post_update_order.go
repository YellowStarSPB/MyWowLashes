package service

import (
	"errors"
	"venus/internal/gin/api/domain"
	db_services "venus/internal/gorm/services"
)

func PostOrderUpdate(req domain.PostOrderUpdateRequest, dbc db_services.DbController) (bool, error) {

	order, err := dbc.OrderGetById(req.OrderId)
	if err != nil {
		return false, err
	}
	switch req.Status {
	case "pending":
		order.Status = "pending"
	case "accepted":
		order.Status = "accepted"
	case "declined":
		order.Status = "declined"
	default:
		return false, errors.New("undefined status type!")
	}

	_, err = dbc.OrderUpdate(*order)
	if err != nil {
		return false, err
	}

	return true, nil
}
