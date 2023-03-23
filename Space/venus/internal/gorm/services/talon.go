package db_services

import (
	"time"
	db_domain "venus/internal/gorm/domain"

	"gorm.io/gorm"
)

func (dc *dbController) TalonNew(time time.Time, userId, orderId uint) (*uint, error) {
	talon := db_domain.Talon{
		Time:    time,
		UserID:  userId,
		OrderID: orderId,
	}
	if err := dc.dbConn.Create(&talon).Error; err != nil {
		return nil, err
	}

	return &talon.ID, nil
}

func (dc *dbController) TalonGetById(talonId uint) (*db_domain.Talon, error) {
	res := new(db_domain.Talon)
	if err := dc.dbConn.Where(&db_domain.Talon{Model: gorm.Model{ID: talonId}}).First(&res).Error; err != nil {
		return nil, err
	}

	return res, nil
}
