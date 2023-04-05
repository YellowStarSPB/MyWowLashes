package service

import (
	"venus/internal/gin/api/domain"
	db_domain "venus/internal/gorm/domain"
	db_services "venus/internal/gorm/services"
)

func GetAllUsers(dbc db_services.DbController) ([]domain.PostUserRequest, error) {
	resp, err := dbc.GetAllUsers()
	if err != nil {
		return nil, err
	}

	return convertUsers(resp), nil
}
func convertUsers(dbUsers []db_domain.User) (users []domain.PostUserRequest) {
	for _, dbUser := range dbUsers {
		users = append(users, domain.PostUserRequest{
			UserName: dbUser.UserName,
			Call:     dbUser.Call,
			Email:    dbUser.Email,
		})
	}
	return
}
