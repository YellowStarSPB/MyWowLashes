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
	// User
	UserNew(username string, call string, email string) (*db_domain.User, error)
	UserGetById(userId uint) (*db_domain.User, error)
	UserGetByEmail(email string) (*db_domain.User, error)
	GetAllUsers() ([]db_domain.User, error)
	UserUpdate(user db_domain.User) (*db_domain.User, error)
	//Photo
	PhotoNew(imagename, imageurl string, hidden bool, servicesId uint) (*uint, error)
	PhotoGetById(photoId uint) (*db_domain.Photo, error)
	//Order
	OrderNew(status string, time time.Time, description string, userId uint) (*uint, error)
	OrderGetById(orderId uint) (*db_domain.Order, error)
	//Services
	ServicesNew(price uint, types string, hidden bool) (*uint, error)
	ServicesGetById(servicesId uint) (*db_domain.Services, error)
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
