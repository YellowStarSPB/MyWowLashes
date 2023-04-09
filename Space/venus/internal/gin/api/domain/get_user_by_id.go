package domain

type GetUserByIdRequest struct {
	UserId uint `form:"userId" required:"true" example:"1"`
}

type GetUserByIdResponse struct {
	UserName string   `json:"username"  example:"OLEG"`
	Calls    []string `json:"call"  example:"9833211233212"`
	Email    string   `json:"email"  example:"banan@mail.ru"`
	OrderId  uint     `json:"orderId"  example:"1"`
}
