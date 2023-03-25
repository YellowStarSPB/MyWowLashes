package domain

type GetUserByIdRequest struct {
	UserId uint `json:"userId" required:"true" example:"1"`
}

type GetUserByIdResponse struct {
	UserName        string `json:"username"  example:"OLEG"`
	PhoneNumber     string `json:"phonenumber"  example:"9833211233212"`
	Instagram       string `json:"instagram"  example:"lololo"`
	CallPreferences string `json:"callpreferences"  example:"1"`
	OrderID         uint   `json:"orderId"  example:"1"`
}
