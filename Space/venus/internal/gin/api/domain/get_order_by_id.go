package domain

import "time"

type GetOrderByIdRequest struct {
	OrderId uint `form:"orderId" required:"true" example:"1"`
}

type GetOrderByIdResponse struct {
	Status      string    `json:"status"  example:"waiting"`
	Time        time.Time `json:"time"  example:"10.03.2023,10:30PM"`
	Description string    `json:"Description"  example:"описание"`
	UserId      uint      `json:"userId" example:"1"`
}
