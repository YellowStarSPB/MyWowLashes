package service

import (
	"venus/internal/gin/api/domain"
	db_domain "venus/internal/gorm/domain"
	db_services "venus/internal/gorm/services"
)

func GetAllUsers(dbc db_services.DbController) (*domain.GetAllUsersResponse, error) {
	resp, err := dbc.GetAllUsers()
	if err != nil {
		return nil, err
	}

	return convertUsers(resp), nil
}
func convertUsers(dbUsers []db_domain.User) *domain.GetAllUsersResponse {
	users := new(domain.GetAllUsersResponse)
	for _, dbUser := range dbUsers {
		users.Users = append(users.Users, domain.GetAllUsersUser{
			UsersId:  dbUser.ID,
			UserName: dbUser.UserName,
			Calls:    dbUser.Calls,
			Email:    dbUser.Email,
		})
	}
	return users
}
