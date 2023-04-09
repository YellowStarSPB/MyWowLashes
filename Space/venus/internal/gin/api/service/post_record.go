package service

import (
	"venus/internal/gin/api/domain"
	db_services "venus/internal/gorm/services"
)

func PostRecord(req domain.PostRecordRequest, dbc db_services.DbController) (bool, error) {
	var err error
	user, _ := dbc.UserGetByEmail(req.Email)
	if user == nil {
		user, err = dbc.UserNew(req.UserName, req.Call, req.Email)
		if err != nil {
			return false, err
		}
	} else {
		flag := false
		for _, call := range user.Calls {
			if call == req.Call {
				flag = true
			}
		}
		if !flag {
			user.Calls = append(user.Calls, req.Call)
			_, err := dbc.UserUpdate(*user)
			if err != nil {
				return false, err
			}
		}

	}
	_, err = dbc.OrderNew(req.Status, req.Time, req.Description, user.ID)
	if err != nil {
		return false, err
	}
	return true, nil
}
