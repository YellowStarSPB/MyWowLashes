package db_services

import (
	"time"
	"venus/internal/config"
	db_domain "venus/internal/gorm/domain"
	db_migration "venus/internal/gorm/migration"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type DbController interface {
	// Talon
	TalonNew(time time.Time, userId, orderId uint) (*uint, error)
	TalonGetById(talonId uint) (*db_domain.Talon, error)
}

type dbController struct {
	dbConn *gorm.DB
}

func CreateDbController(config config.Config) (DbController, error) {
	dbc := new(dbController)
	var err error
	// Open connection with DB
	dbc.dbConn, err = gorm.Open(postgres.Open(config.DbConf.DSN()), &gorm.Config{})
	if err != nil {
		return nil, err
	}
	// Set debug mode
	if config.Debug {
		dbc.dbConn.Debug()
	}

	// Run automigrate
	if err := db_migration.AutoMigrate(dbc.dbConn); err != nil {
		return nil, err
	}

	return dbc, nil
}
