package domain

import "time"

type PostTalonRequest struct {
	Time    time.Time `json:"time" required:"true" example:"2023-01-02T10:30:00Z"`
	UserId  uint      `json:"userId" required:"true" example:"1"`
	OrderId uint      `json:"orderId" required:"true" example:"1"`
}

type PostTalonResponse struct {
	TalonId uint `json:"talonId"  example:"1"`
}
