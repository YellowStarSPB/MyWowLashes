package db_services

import (
	db_domain "venus/internal/gorm/domain"

	"gorm.io/gorm"
)

func (dc *dbController) ServicesNew(price uint, types string, hidden bool) (*uint, error) {
	services := db_domain.Services{
		Price:  price,
		Type:   types,
		Hidden: hidden,
	}
	if err := dc.dbConn.Create(&services).Error; err != nil {
		return nil, err
	}
	return &services.ID, nil
}

func (dc *dbController) ServicesGetById(servicesId uint) (*db_domain.Services, error) {
	res := new(db_domain.Services)
	if err := dc.dbConn.Where(&db_domain.Services{Model: gorm.Model{ID: servicesId}}).First(&res).Error; err != nil {
		return nil, err
	}

	return res, nil
}
