package domain

type GetPhotoByIdRequest struct {
	PhotoId uint `form:"photoId" required:"true" example:"1"`
}

type GetPhotoByIdResponse struct {
	ImageName  string `json:"imagename" example:"1"`
	ImageUrl   string `json:"url" example:"1"`
	Hidden     bool   `json:"hidden" example:"1"`
	ServicesId uint   `json:"servicesId" example:"1"`
}
