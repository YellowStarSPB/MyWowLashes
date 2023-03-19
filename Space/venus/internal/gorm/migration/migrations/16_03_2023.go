package db_migrations

import (
	"time"

	"github.com/go-gormigrate/gormigrate/v2"
	"gorm.io/gorm"
)

var Mig16032023 gormigrate.Migration = gormigrate.Migration{
	// ID - is date of migration creation
	ID: "16032023",
	// In this case you do migration
	Migrate: func(d *gorm.DB) error {
		// Create table
		// NOTE: in this case you can create many of tables and etc.
		type Talon struct {
			gorm.Model
			Time time.Time
		}

		return d.AutoMigrate(&Talon{})
	},
	// Rollback is return migration if its needed. Can be nil.
	Rollback: func(d *gorm.DB) error {
		return d.Migrator().DropTable("talons")
	},
}