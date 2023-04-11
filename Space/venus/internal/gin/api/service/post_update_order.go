package service

import (
	"errors"
	"venus/internal/gin/api/domain"
	db_services "venus/internal/gorm/services"
)

func PostOrderUpdate(req domain.PostOrderUpdateRequest, dbc db_services.DbController) (bool, error) {
	var err error
	orders, err := dbc.GetAllOrders()
	if err != nil {
		return false, err
	}

	orderUpdate, err := dbc.OrderGetById(req.OrderId)
	if err != nil {
		return false, err
	}

	for _, order := range orders {
		if order == *orderUpdate {
			switch req.Status {
			case "pending":
				orderUpdate.Status = "pending"
			case "accepted":
				orderUpdate.Status = "accepted"
			case "declined":
				orderUpdate.Status = "declined"
			default:
				return false, errors.New("undefined status type!")
			}
		}

		dbc.OrderUpdate(*orderUpdate)
	}

	return true, nil
}
