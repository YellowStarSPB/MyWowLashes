package controller

import (
	"errors"
	"fmt"
	"venus/internal/gin/api/domain"
	"venus/internal/gin/api/service"
	db_services "venus/internal/gorm/services"

	"github.com/gin-gonic/gin"
	"github.com/sirupsen/logrus"
)

// @Summary Get photo ID
// @Description get photo ID by ID
// @Accept  json
// @Produce  json
// @Param photoId query uint true "place here photo ID"
// @Success 200 {object} domain.GetPhotoByIdResponse
// @Router /admin/photo [get]
func GetPhotoById(c *gin.Context, dbc db_services.DbController) {
	var req domain.GetPhotoByIdRequest
	if err := c.ShouldBindQuery(&req); err != nil {
		logrus.WithError(err).Error("couldn't bind request data")
		c.JSON(500, fmt.Sprintf("Error on binding request. err: %v", err))
		return
	}
	logrus.WithField("photoId", req.PhotoId).Info("Start 'GetPhotoById' API method")
	if err := checkGetPhotoByIdRequestBody(req); err != nil {
		logrus.WithError(err).Error("couldn't bind request data")
		c.JSON(400, fmt.Sprintf("Error on binding request. err: %v", err))
		return
	}

	resp, err := service.GetPhotoById(req.PhotoId, dbc)
	if err != nil {
		logrus.WithError(err).Error("couldn't get photo from DB")
		c.JSON(500, fmt.Sprintf("Error on getting data from DB. err: %v", err))
		return
	}
	logrus.WithField("response", resp).Debug("Data from DB")
	c.JSON(200, resp)
}

func checkGetPhotoByIdRequestBody(req domain.GetPhotoByIdRequest) error {
	if req.PhotoId <= 0 {
		return errors.New("photoId must be above 0")
	}

	return nil
}
