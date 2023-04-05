package domain

type PostRecordRequest struct {
	User  *PostUserRequest  `json:"user" required:"true"`
	Order *PostOrderRequest `json:"order" required:"true"`
}

type PostRecordResponse struct {
	UserId  uint `json:"userId"  example:"1"`
	OrderId uint `json:"orderId"  example:"1"`
}
