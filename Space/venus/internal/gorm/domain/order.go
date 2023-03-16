package db_domain

import (
	"gorm.io/gorm"
)

type status string

const (
	status_accepted status = "accepted"
	status_canceled status = "canceled"
	status_pending  status = "pending"
)

type Order struct {
	gorm.Model
	Status status `gorm:"type:status"`
	User   User
	Talon  Talon
}
