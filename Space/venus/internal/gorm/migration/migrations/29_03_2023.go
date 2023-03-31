package db_migrations

import (
	"time"

	"github.com/go-gormigrate/gormigrate/v2"
	"gorm.io/gorm"
)

var Mig29032023 gormigrate.Migration = gormigrate.Migration{
	// ID - is date of migration creation
	ID: "29032023",
	// In this case you do migration
	Migrate: func(d *gorm.DB) error {
		d.Exec("CREATE TYPE status_enum AS ENUM ('accepted', 'canceled', 'pending')")
		type status_enum string

		const (
			status_accepted status_enum = "accepted"
			status_canceled status_enum = "canceled"
			status_pending  status_enum = "pending"
		)

		type Talon struct {
			gorm.Model
			Time    time.Time
			UserID  uint
			OrderID uint
		}
		type User struct {
			gorm.Model
			UserName        string
			PhoneNumber     string
			Instagram       string
			CallPreferences string
			Talon           Talon
			OrderID         uint
		}
		type Order struct {
			gorm.Model
			Status status_enum `gorm:"type:status"`
			Time   time.Time
			User   User
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

		return d.AutoMigrate(&Order{}, &User{}, &Talon{}, &Services{}, &Photo{})
	},
	// Rollback is return migration if its needed. Can be nil.
	Rollback: func(d *gorm.DB) error {
		return d.Migrator().DropTable("User")
	},
}
