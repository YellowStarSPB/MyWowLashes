package domain

import "time"

type PostRecordRequest struct {
	UserName    string    `json:"username" required:"true" example:"OLEG"`
	Call        string    `json:"call" example:"vk:nah"`
	Email       string    `json:"email" required:"true" example:"banan@mail.ru"`
	Status      string    `json:"status" required:"true" example:"waiting"`
	Time        time.Time `json:"time" required:"true" example:"2023-01-02T10:30:00Z"`
	Description string    `json:"description" example:"описание"`
}

type PostRecordResponse struct {
	Error    error `json:"error"`
	StatusOk bool  `json:"statusOk"  example:"true"`
}
