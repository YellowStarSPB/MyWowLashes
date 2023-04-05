package domain

type PostUserRequest struct {
	UserName string `json:"username" required:"true" example:"OLEG"`
	Call     string `json:"call" example:"vk:nah"`
	Email    string `json:"email" required:"true" example:"banan@mail.ru"`
	OrderId  uint   `json:"orderId"`
}
type PostUserResponse struct {
	UserId uint `json:"userId"  example:"1"`
}
