package domain

import "time"

type GetTalonByIdRequest struct {
	TalonId uint `form:"talonId" required:"true" example:"1"`
}

type GetTalonByIdResponse struct {
	Time    time.Time `json:"time" example:"10.03.2023,10:30PM"`
	UserId  uint      `json:"userId" example:"1"`
	OrderId uint      `json:"orderId" example:"1"`
}
