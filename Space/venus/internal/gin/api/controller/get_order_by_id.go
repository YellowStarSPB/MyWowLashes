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

// @Summary Get order ID
// @Tags Order
// @Description get order ID by ID
// @Accept  json
// @Produce  json
// @Param orderId query uint true "place here order ID"
// @Success 200 {object} domain.GetOrderByIdResponse
// @Router /admin/order [get]
func GetOrderById(c *gin.Context, dbc db_services.DbController) {
	var req domain.GetOrderByIdRequest
	if err := c.ShouldBindQuery(&req); err != nil {
		logrus.WithError(err).Error("couldn't bind request data")
		c.JSON(500, fmt.Sprintf("Error on binding request. err: %v", err))
		return
	}
	logrus.WithField("orderId", req.OrderId).Info("Start 'GetOrderById' API method")
	if err := checkGetOrderByIdRequestBody(req); err != nil {
		logrus.WithError(err).Error("couldn't bind request data")
		c.JSON(400, fmt.Sprintf("Error on binding request. err: %v", err))
		return
	}

	resp, err := service.GetOrderById(req.OrderId, dbc)
	if err != nil {
		logrus.WithError(err).Error("couldn't get order from DB")
		c.JSON(500, fmt.Sprintf("Error on getting data from DB. err: %v", err))
		return
	}
	logrus.WithField("response", resp).Debug("Data from DB")

	c.JSON(200, resp)
}

func checkGetOrderByIdRequestBody(req domain.GetOrderByIdRequest) error {
	if req.OrderId <= 0 {
		return errors.New("orderId must be above 0")
	}

	return nil
}
