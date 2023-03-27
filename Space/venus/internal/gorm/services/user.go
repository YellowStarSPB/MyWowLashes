package db_services

import (
	db_domain "venus/internal/gorm/domain"

	"gorm.io/gorm"
)

func (dc *dbController) UserNew(username, phonenumber, instagram, callpreferences string, orderid uint) (*uint, error) {
	user := db_domain.User{
		UserName:        username,
		PhoneNumber:     phonenumber,
		Instagram:       instagram,
		CallPreferences: callpreferences,
		OrderID:         orderid,
	}
	if err := dc.dbConn.Create(&user).Error; err != nil {
		return nil, err
	}

	return &user.ID, nil
}

func (dc *dbController) UserGetById(userId uint) (*db_domain.User, error) {
	res := new(db_domain.User)
	if err := dc.dbConn.Where(&db_domain.User{Model: gorm.Model{ID: userId}}).First(&res).Error; err != nil {
		return nil, err
	}

	return res, nil
}
func (dc *dbController) GetAllUsers() ([]db_domain.User, error) {
	var res []db_domain.User
	if err := dc.dbConn.Find(&res).Error; err != nil {
		return nil, err
	}

	return res, nil
}
