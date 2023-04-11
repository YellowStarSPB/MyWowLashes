package domain

type PostOrderUpdateRequest struct {
	Status  string `json:"status" required:"true" example:"accepted"`
	OrderId uint   `json:"orderId" required:"true" example:"1"`
}

type PostOrderUpdateResponse struct {
	Error    string `json:"error"`
	StatusOk bool   `json:"statusOk"  example:"true"`
}
