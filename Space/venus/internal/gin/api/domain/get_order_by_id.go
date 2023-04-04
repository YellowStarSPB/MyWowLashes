package domain

import "time"

type GetOrderByIdRequest struct {
	OrderId uint `form:"talonId" required:"true" example:"1"`
}

type GetOrderByIdResponse struct {
	Status Status    `gorm:"type:status"`
	Time   time.Time `json:"time"  example:"10.03.2023,10:30PM"`
	User   uint      `json:"userId" example:"1"`
}
