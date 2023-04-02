package db_services

import (
	"time"
	db_domain "venus/internal/gorm/domain"

	"gorm.io/gorm"
)

func (dc *dbController) OrderNew(status db_domain.Status, time time.Time) (*uint, error) {
	order := db_domain.Order{
		Status: status,
		Time:   time,
	}
	if err := dc.dbConn.Create(&order).Error; err != nil {
		return nil, err
	}
	return &order.ID, nil
}

func (dc *dbController) OrderGetById(orderId uint) (*db_domain.Order, error) {
	res := new(db_domain.Order)
	if err := dc.dbConn.Where(&db_domain.Order{Model: gorm.Model{ID: orderId}}).First(&res).Error; err != nil {
		return nil, err
	}

	return res, nil
}
