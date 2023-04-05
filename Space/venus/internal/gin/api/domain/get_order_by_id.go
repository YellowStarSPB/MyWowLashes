package domain

import "time"

type GetOrderByIdRequest struct {
	OrderId uint `form:"orderId" required:"true" example:"1"`
}

type GetOrderByIdResponse struct {
	Status string    `json:"status"  example:"accepted"`
	Time   time.Time `json:"time"  example:"10.03.2023,10:30PM"`
	UserId uint      `json:"userId" example:"1"`
}
