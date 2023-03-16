package db_migration

import (
	m "venus/internal/gorm/migration/migrations"

	"github.com/go-gormigrate/gormigrate/v2"
	"gorm.io/gorm"
)

func AutoMigrate(dbc *gorm.DB) error {
	migs := []*gormigrate.Migration{}
	migs = append(migs, &m.Mig16032023)

	mm := gormigrate.New(dbc, gormigrate.DefaultOptions, migs)
	if err := mm.Migrate(); err != nil {
		return err
	}

	return nil
}
