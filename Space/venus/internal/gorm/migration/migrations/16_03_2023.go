package db_migrations

import (
	"time"

	"github.com/go-gormigrate/gormigrate/v2"
	"gorm.io/gorm"
)

var Mig16032023 gormigrate.Migration = gormigrate.Migration{
	ID: "16032023",
	Migrate: func(d *gorm.DB) error {
		type Talon struct {
			gorm.Model
			Time time.Time
		}
		return d.AutoMigrate(&Talon{})
	},
	Rollback: func(d *gorm.DB) error {
		return d.Migrator().DropTable("talons")
	},
}
