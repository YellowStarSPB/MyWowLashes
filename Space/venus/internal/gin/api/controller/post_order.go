package controller

import (
	"fmt"
	"venus/internal/gin/api/domain"
	"venus/internal/gin/api/service"
	db_services "venus/internal/gorm/services"

	"github.com/gin-gonic/gin"
	"github.com/sirupsen/logrus"
)

// @Summary Post order
// @Tags Order
// @Description Insert new order
// @Accept  json
// @Produce  json
// @Param rquestBody body domain.PostOrderRequest true "place here order ID"
// @Success 200 {object} domain.PostOrderResponse
// @Router /admin/order [post]
func PostOrder(c *gin.Context, dbc db_services.DbController) {
	var req domain.PostOrderRequest
	if err := c.ShouldBind(&req); err != nil {
		logrus.WithError(err).Error("couldn't bind request data")
		c.JSON(500, fmt.Sprintf("Error on binding request. err: %v", err))
		return
	}
	logrus.WithFields(logrus.Fields{
		"status": req.Status,
		"time":   req.Time,
		"userId": req.UserId,
	}).Info("Start 'PostOrder' API method")
	resp, err := service.PostOrder(req, dbc)
	if err != nil {
		logrus.WithError(err).Error("couldn't insert data to DB")
		c.JSON(500, fmt.Sprintf("Error on inserting data to DB. err: %v", err))
		return
	}
	logrus.WithField("response", resp).Debug("Data from DB")

	c.JSON(200, resp)
}
