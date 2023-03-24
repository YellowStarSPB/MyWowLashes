package domain

type PostUserRequest struct {
	UserName        string `json:"username" required:"true" example:"OLEG"`
	PhoneNumber     string `json:"phonenumber" required:"true" example:"9833211233212"`
	Instagram       string `json:"instagram" required:"true" example:"lololo"`
	CallPreferences string `json:"callpreferences" required:"true" example:"1"`
	OrderID         uint   `json:"orderId" required:"true" example:"1"`
}
type PostUserResponse struct {
	UserId uint `json:"userId"  example:"1"`
}
