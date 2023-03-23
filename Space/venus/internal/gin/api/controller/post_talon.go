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

// @Summary Post talon
// @Description Insert new talon
// @Accept  json
// @Produce  json
// @Param rquestBody body domain.PostTalonRequest true "place here talon ID"
// @Success 200 {object} domain.PostTalonResponse
// @Router /admin/talon [post]
func PostTalon(c *gin.Context, dbc db_services.DbController) {
	var req domain.PostTalonRequest
	if err := c.ShouldBind(&req); err != nil {
		logrus.WithError(err).Error("couldn't bind request data")
		c.JSON(500, fmt.Sprintf("Error on binding request. err: %v", err))
		return
	}
	logrus.WithFields(logrus.Fields{
		"userId":  req.UserId,
		"orderId": req.OrderId,
		"time":    req.Time,
	}).Info("Start 'PostTalon' API method")
	if err := checkPostTalonRequestBody(req); err != nil {
		logrus.WithError(err).Error("couldn't bind request data")
		c.JSON(400, fmt.Sprintf("Error on binding request. err: %v", err))
		return
	}

	resp, err := service.PostTalon(req, dbc)
	if err != nil {
		logrus.WithError(err).Error("couldn't insert data to DB")
		c.JSON(500, fmt.Sprintf("Error on inserting data to DB. err: %v", err))
		return
	}
	logrus.WithField("response", resp).Debug("Data from DB")

	c.JSON(200, resp)
}

func checkPostTalonRequestBody(req domain.PostTalonRequest) error {
	if req.UserId <= 0 {
		return errors.New("userId must be above 0")
	}
	if req.OrderId <= 0 {
		return errors.New("orderId must be above 0")
	}

	return nil
}
