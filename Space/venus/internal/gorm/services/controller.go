package db_services

import (
	"venus/internal/config"
	db_migration "venus/internal/gorm/migration"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type DbController interface{}

type dbController struct {
	dbConn *gorm.DB
}

func CreateDbController(dbConfig config.Config) (DbController, error) {
	dbc := new(dbController)
	var err error
	dbc.dbConn, err = gorm.Open(postgres.Open(dbConfig.DbConf.DSN()), &gorm.Config{})
	if err != nil {
		return nil, err
	}

	if err := db_migration.AutoMigrate(dbc.dbConn); err != nil {
		return nil, err
	}

	return dbc, nil
}
