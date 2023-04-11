package domain

import "time"

type PostOrderRequest struct {
	Time        time.Time `json:"time" required:"true" example:"2023-01-02T10:30:00Z"`
	Description string    `json:"description" example:"описание"`
	UserId      uint      `json:"userId" example:"1"`
}

type PostOrderResponse struct {
	OrderId uint `form:"orderId" example:"1"`
}
