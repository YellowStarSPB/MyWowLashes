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

// @Summary Get services ID
// @Tags Services
// @Description get services ID by ID
// @Accept  json
// @Produce  json
// @Param servicesId query uint true "place here services ID"
// @Success 200 {object} domain.GetServicesByIdResponse
// @Router /admin/services [get]
func GetServicesById(c *gin.Context, dbc db_services.DbController) {
	var req domain.GetServicesByIdRequest
	if err := c.ShouldBindQuery(&req); err != nil {
		logrus.WithError(err).Error("couldn't bind request data")
		c.JSON(500, fmt.Sprintf("Error on binding request. err: %v", err))
		return
	}
	logrus.WithField("servicesId", req.ServicesId).Info("Start 'GetServicesById' API method")
	if err := checkGetServicesByIdRequestBody(req); err != nil {
		logrus.WithError(err).Error("failed to check ServicesId")
		c.JSON(400, fmt.Sprintf("Error to check ServicesId. err: %v", err))
		return
	}

	resp, err := service.GetServicesById(req.ServicesId, dbc)
	if err != nil {
		logrus.WithError(err).Error("couldn't get services from DB")
		c.JSON(500, fmt.Sprintf("Error on getting data from DB. err: %v", err))
		return
	}
	logrus.WithField("response", resp).Debug("Data from DB")
	c.JSON(200, resp)
}

func checkGetServicesByIdRequestBody(req domain.GetServicesByIdRequest) error {
	if req.ServicesId <= 0 {
		return errors.New("servicesId must be above 0")
	}

	return nil
}
