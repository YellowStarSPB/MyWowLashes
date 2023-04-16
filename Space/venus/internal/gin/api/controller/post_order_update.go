package controller

import (
	"fmt"
	"venus/internal/gin/api/domain"
	"venus/internal/gin/api/service"
	db_services "venus/internal/gorm/services"

	"github.com/gin-gonic/gin"
	"github.com/sirupsen/logrus"
)

// @Summary Post orderupdate
// @Tags Order
// @Description Insert update order
// @Accept  json
// @Produce  json
// @Param requestBody body domain.PostOrderUpdateRequest true "update order"
// @Success 200 {object} domain.PostOrderUpdateResponse
// @Router /admin/orderupdate [post]
func PostOrderUpdate(c *gin.Context, dbc db_services.DbController) {
	var req domain.PostOrderUpdateRequest
	if err := c.ShouldBind(&req); err != nil {
		logrus.WithError(err).Error("couldn't bind request data")
		c.JSON(500, domain.PostOrderUpdateResponse{Error: err.Error(), StatusOk: false})
		return
	}
	logrus.WithFields(logrus.Fields{
		"status":  req.Status,
		"orderId": req.OrderId,
	}).Info("Start 'PostOrderUpdate' API method")

	resp, err := service.PostOrderUpdate(req, dbc)
	if err != nil {
		logrus.WithError(err).Error("couldn't insert data to DB")
		c.JSON(500, domain.PostOrderUpdateResponse{Error: err.Error(), StatusOk: resp})
		return
	}
	logrus.WithField("response", domain.PostRecordResponse{Error: fmt.Sprintf("%v", err), StatusOk: resp}).Debug("Data from DB")

	c.JSON(200, domain.PostOrderUpdateResponse{Error: fmt.Sprintf("%v", err), StatusOk: resp})
}
