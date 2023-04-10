package domain

type GetAllUsersResponse struct {
	Users []GetAllUsersUser `json:"users" type:"array"`
}

type GetAllUsersUser struct {
	UsersId  uint     `json:"orderId" example:"1"`
	UserName string   `json:"username" required:"true" example:"OLEG"`
	Calls    []string `json:"calls" example:"vk:nah"`
	Email    string   `json:"email" required:"true" example:"banan@mail.ru"`
}
