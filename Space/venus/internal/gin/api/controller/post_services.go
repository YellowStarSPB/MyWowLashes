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

// @Summary Post services
// @Tags Services
// @Description Insert new services
// @Accept  json
// @Produce  json
// @Param rquestBody body domain.PostServicesRequest true "place here services ID"
// @Success 200 {object} domain.PostServicesResponse
// @Router /admin/services [post]
func PostServices(c *gin.Context, dbc db_services.DbController) {
	var req domain.PostServicesRequest
	if err := c.ShouldBind(&req); err != nil {
		logrus.WithError(err).Error("couldn't bind request data")
		c.JSON(500, fmt.Sprintf("Error on binding request. err: %v", err))
		return
	}
	logrus.WithFields(logrus.Fields{
		"price":  req.Price,
		"type":   req.Type,
		"hidden": req.Hidden,
	}).Info("Start 'PostServices' API method")
	if err := checkPostServicesRequestBody(req); err != nil {
		logrus.WithError(err).Error("couldn't bind request data")
		c.JSON(400, fmt.Sprintf("Error on binding request. err: %v", err))
		return
	}

	resp, err := service.PostServices(req, dbc)
	if err != nil {
		logrus.WithError(err).Error("couldn't insert data to DB")
		c.JSON(500, fmt.Sprintf("Error on inserting data to DB. err: %v", err))
		return
	}
	logrus.WithField("response", resp).Debug("Data from DB")

	c.JSON(200, resp)
}

func checkPostServicesRequestBody(req domain.PostServicesRequest) error {
	if req.Price < 0 {
		return errors.New("price must be above -1")
	}
	if req.Type == "" {
		return errors.New("orderId must have a value")
	}

	return nil
}
