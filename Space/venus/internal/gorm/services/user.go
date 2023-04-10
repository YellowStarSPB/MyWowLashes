package db_services

import (
	db_domain "venus/internal/gorm/domain"

	"github.com/lib/pq"
	"gorm.io/gorm"
)

func (dc *dbController) UserNew(username string, call string, email string) (*db_domain.User, error) {
	calls := []string{call}
	user := &db_domain.User{
		UserName: username,
		Calls:    pq.StringArray(calls),
		Email:    email,
	}
	if err := dc.dbConn.Create(&user).Error; err != nil {
		return nil, err
	}
	return user, nil
}

func (dc *dbController) UserGetById(userId uint) (*db_domain.User, error) {
	res := new(db_domain.User)
	if err := dc.dbConn.Where(&db_domain.User{Model: gorm.Model{ID: userId}}).First(&res).Error; err != nil {
		return nil, err
	}

	return res, nil
}
func (dc *dbController) UserGetByEmail(email string) (*db_domain.User, error) {
	res := new(db_domain.User)
	if err := dc.dbConn.Where(&db_domain.User{Email: email}).First(&res).Error; err != nil {
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
func (dc *dbController) UserUpdate(user db_domain.User) (*db_domain.User, error) {
	if err := dc.dbConn.Updates(&user).Error; err != nil {
		return nil, err
	}
	return dc.UserGetById(user.ID)
}
