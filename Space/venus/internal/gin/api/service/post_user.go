package service

import (
	"venus/internal/gin/api/domain"
	db_services "venus/internal/gorm/services"
)

func PostUser(req domain.PostUserRequest, dbc db_services.DbController) (*domain.PostUserResponse, error) {
	resp, err := dbc.UserNew(req.UserName, req.Call, req.Email)
	if err != nil {
		return nil, err
	}

	return &domain.PostUserResponse{UserId: *resp}, nil
}
