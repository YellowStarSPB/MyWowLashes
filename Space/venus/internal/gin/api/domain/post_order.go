package domain

import "time"

type Status string

const (
	status_accepted Status = "accepted"
	status_canceled Status = "canceled"
	status_pending  Status = "pending"
)

type PostOrderRequest struct {
	Status Status    `gorm:"type:Status"`
	Time   time.Time `json:"time" required:"true" example:"10.03.2023,10:30PM"`
	User   uint      `json:"userId" required:"true" example:"1"`
}

type PostOrderResponse struct {
	OrderId uint `form:"orderId" example:"1"`
}
