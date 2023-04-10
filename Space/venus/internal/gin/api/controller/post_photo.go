package controller

import (
	"fmt"
	"venus/internal/gin/api/domain"
	"venus/internal/gin/api/service"
	db_services "venus/internal/gorm/services"

	"github.com/gin-gonic/gin"
	"github.com/sirupsen/logrus"
)

// @Summary Post photo
// @Tags Photo
// @Description Insert new photo
// @Accept  json
// @Produce  json
// @Param rquestBody body domain.PostPhotoRequest true "place here photo ID"
// @Success 200 {object} domain.PostPhotoResponse
// @Router /admin/photo [post]
func PostPhoto(c *gin.Context, dbc db_services.DbController) {
	var req domain.PostPhotoRequest
	if err := c.ShouldBind(&req); err != nil {
		logrus.WithError(err).Error("couldn't bind request data")
		c.JSON(500, fmt.Sprintf("Error on binding request. err: %v", err))
		return
	}
	logrus.WithFields(logrus.Fields{
		"imageName":  req.ImageName,
		"imageUrl":   req.ImageUrl,
		"hidden":     req.Hidden,
		"servicesId": req.ServicesId,
	}).Info("Start 'PostPhoto' API method")

	resp, err := service.PostPhoto(req, dbc)
	if err != nil {
		logrus.WithError(err).Error("couldn't insert data to DB")
		c.JSON(500, fmt.Sprintf("Error on inserting data to DB. err: %v", err))
		return
	}
	logrus.WithField("response", resp).Debug("Data from DB")

	c.JSON(200, resp)
}
