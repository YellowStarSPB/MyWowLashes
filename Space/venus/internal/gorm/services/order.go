package db_services

import (
	"time"
	db_domain "venus/internal/gorm/domain"

	"gorm.io/gorm"
)

func (dc *dbController) OrderNew(status string, time time.Time, description string, userId uint) (*db_domain.Order, error) {
	order := &db_domain.Order{
		Status:      status,
		Time:        time,
		Description: description,
		UserId:      userId,
	}
	if err := dc.dbConn.Create(&order).Error; err != nil {
		return nil, err
	}
	user, err := dc.UserGetById(userId)
	if err != nil {
		return nil, err
	}
	user.Orders = append(user.Orders, *order)
	if err := dc.dbConn.Updates(&user).Error; err != nil {
		return nil, err
	}
	return order, nil
}

func (dc *dbController) OrderGetById(orderId uint) (*db_domain.Order, error) {
	res := new(db_domain.Order)
	if err := dc.dbConn.Where(&db_domain.Order{Model: gorm.Model{ID: orderId}}).First(&res).Error; err != nil {
		return nil, err
	}

	return res, nil
}
func (dc *dbController) OrderGetByTime(time time.Time) (*db_domain.Order, error) {
	res := new(db_domain.Order)
	if err := dc.dbConn.Where(&db_domain.Order{Time: time}).First(&res).Error; err != nil {
		return nil, err
	}

	return res, nil
}
func (dc *dbController) GetAllOrders() ([]db_domain.Order, error) {
	var res []db_domain.Order
	if err := dc.dbConn.Find(&res).Error; err != nil {
		return nil, err
	}

	return res, nil
}
