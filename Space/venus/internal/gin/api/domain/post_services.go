package domain

type PostServicesRequest struct {
	Price   uint   `json:"price" required:"true" example:"1000"`
	Type    string `json:"type" required:"true" example:"long"`
	Hidden  bool   `json:"hidden" required:"true" example:"false"`
	PhotoId uint   `json:"photoId" required:"true" example:"1"`
}

type PostServicesResponse struct {
	ServicesId uint `json:"servicesId"  example:"1"`
}
