package domain

type PostPhotoRequest struct {
	ImageName  string `json:"imagename" required:"true" example:"1"`
	ImageUrl   string `json:"url" required:"true" example:"1"`
	Hidden     bool   `json:"hidden" required:"true" example:"true"`
	ServicesId uint   `json:"servicesId" required:"true" example:"1"`
}

type PostPhotoResponse struct {
	PhotoId uint `json:"photoId"  example:"1"`
}
