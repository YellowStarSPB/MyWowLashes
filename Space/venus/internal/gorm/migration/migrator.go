package db_migration

import (
	m "venus/internal/gorm/migration/migrations"

	"github.com/go-gormigrate/gormigrate/v2"
	"gorm.io/gorm"
)

// AutoMigrate - function for run automigration
func AutoMigrate(dbc *gorm.DB) error {
	// Create list of migrations
	migs := []*gormigrate.Migration{}
	// NOTE: Add new migrations here
	migs = append(migs, &m.Mig16032023, &m.Mig17032023)

	// Create migration config
	mm := gormigrate.New(dbc, gormigrate.DefaultOptions, migs)
	// Start migrations
	if err := mm.Migrate(); err != nil {
		return err
	}

	return nil
}
