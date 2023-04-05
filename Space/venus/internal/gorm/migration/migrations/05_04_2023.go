package db_migrations

import (
	"time"

	"github.com/go-gormigrate/gormigrate/v2"
	"gorm.io/gorm"
)

var Mig05042023 gormigrate.Migration = gormigrate.Migration{
	// ID - is date of migration creation
	ID: "05042023",
	// In this case you do migration
	Migrate: func(d *gorm.DB) error {
		// Create table
		// NOTE: in this case you can create many of tables and etc.
		type Order struct {
			gorm.Model
			Status string
			Time   time.Time
			UserId uint
		}
		type User struct {
			gorm.Model
			UserName string
			Call     string
			Email    string
			Order    []Order
		}
		type Photo struct {
			gorm.Model
			ImageName  string
			ImageUrl   string
			Hidden     bool
			ServicesId uint
		}
		type Services struct {
			gorm.Model
			Price  uint
			Type   string
			Hidden bool
			Photo  Photo
		}

		return d.AutoMigrate(&User{}, &Order{}, &Services{}, &Photo{})
	},
	// Rollback is return migration if its needed. Can be nil.
	Rollback: func(d *gorm.DB) error {
		return d.Migrator().DropTable("User")
	},
}
