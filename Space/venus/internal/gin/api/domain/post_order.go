package domain

import "time"

type PostOrderRequest struct {
	Status string    `json:"status" required:"true" example:"accepted"`
	Time   time.Time `json:"time" required:"true" example:"2023-01-02T10:30:00Z"`
	UserId uint      `json:"userId" required:"true" example:"1"`
}

type PostOrderResponse struct {
	OrderId uint `form:"orderId" example:"1"`
}
