package db_domain

import (
	"gorm.io/gorm"
)

type services string

const (
	services_nails     services = "nails"
	services_eyelashes services = "eyelashes"
	services_brows     services = "brows"
)

type Photo struct {
	gorm.Model
	Services services `gorm:"type:services"`
	User     User
	Talon    Talon
}
