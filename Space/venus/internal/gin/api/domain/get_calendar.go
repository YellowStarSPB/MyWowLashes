package domain

type GetCalendarRequest struct {
	Date string `form:"date" required:"true" example:"2023-01-02"`
}

type GetCalendarResponse struct {
	Current []GetCalendarTicket `json:"current"`
	Next    []GetCalendarTicket `json:"next"`
	Error   string              `json:"error" example:"Pasha sasat"`
}

type GetCalendarTicket struct {
	Day   uint     `json:"day" example:"1"`
	Times []string `json:"times" example:"['10:30', '16:30']"`
}
