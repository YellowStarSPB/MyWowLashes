package domain

type PostRecordRequest struct {
	Talon PostTalonRequest
	User  PostUserRequest
	Order PostOrderRequest
}

type PostRecordResponse struct {
	TalonId PostTalonResponse
	UserId  PostUserResponse
	OrderId PostOrderResponse
}
