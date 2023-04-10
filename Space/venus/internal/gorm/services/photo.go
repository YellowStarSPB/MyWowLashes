package db_services

import (
	db_domain "venus/internal/gorm/domain"

	"gorm.io/gorm"
)

func (dc *dbController) PhotoNew(imagename, imageurl string, hidden bool, servicesId uint) (*uint, error) {
	photo := db_domain.Photo{
		ImageName:  imagename,
		ImageUrl:   imageurl,
		Hidden:     hidden,
		ServicesId: servicesId,
	}
	if err := dc.dbConn.Create(&photo).Error; err != nil {
		return nil, err
	}
	services, err := dc.ServicesGetById(servicesId)
	if err != nil {
		return nil, err
	}
	services.Photo.ID = photo.ID
	if err := dc.dbConn.Updates(&services).Error; err != nil {
		return nil, err
	}
	return &photo.ID, nil
}

func (dc *dbController) PhotoGetById(photoId uint) (*db_domain.Photo, error) {
	res := new(db_domain.Photo)
	if err := dc.dbConn.Where(&db_domain.Photo{Model: gorm.Model{ID: photoId}}).First(&res).Error; err != nil {
		return nil, err
	}

	return res, nil
}
