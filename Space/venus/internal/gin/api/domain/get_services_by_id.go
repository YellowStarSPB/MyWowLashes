package domain

type GetServicesByIdRequest struct {
	ServicesId uint `form:"servicesId" required:"true" example:"1"`
}

type GetServicesByIdResponse struct {
	Price  uint   `json:"price"  example:"1000"`
	Type   string `json:"type"  example:"long"`
	Hidden bool   `json:"hidden"  example:"false"`
	Photo  uint   `json:"photoId"  example:"1"`
}
