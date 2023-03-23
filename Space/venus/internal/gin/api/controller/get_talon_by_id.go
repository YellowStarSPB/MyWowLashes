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

// @Summary Get talon ID
// @Description get talon ID by ID
// @Accept  json
// @Produce  json
// @Param talonId query uint true "place here talon ID"
// @Success 200 {object} domain.GetTalonByIdResponse
// @Router /admin/talon [get]
func GetTalonById(c *gin.Context, dbc db_services.DbController) {
	var req domain.GetTalonByIdRequest
	if err := c.ShouldBindQuery(&req); err != nil {
		logrus.WithError(err).Error("couldn't bind request data")
		c.JSON(500, fmt.Sprintf("Error on binding request. err: %v", err))
		return
	}
	logrus.WithField("talonId", req.TalonId).Info("Start 'GetTalonById' API method")
	if err := checkGetTalonByIdRequestBody(req); err != nil {
		logrus.WithError(err).Error("couldn't bind request data")
		c.JSON(400, fmt.Sprintf("Error on binding request. err: %v", err))
		return
	}

	resp, err := service.GetTalonById(req.TalonId, dbc)
	if err != nil {
		logrus.WithError(err).Error("couldn't get talon from DB")
		c.JSON(500, fmt.Sprintf("Error on getting data from DB. err: %v", err))
		return
	}
	logrus.WithField("response", resp).Debug("Data from DB")

	c.JSON(200, resp)
}

func checkGetTalonByIdRequestBody(req domain.GetTalonByIdRequest) error {
	if req.TalonId <= 0 {
		return errors.New("talonId must be above 0")
	}

	return nil
}
