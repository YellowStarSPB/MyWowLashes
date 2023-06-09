package controller

import (
	"fmt"
	"venus/internal/gin/api/domain"
	"venus/internal/gin/api/service"
	db_services "venus/internal/gorm/services"

	"github.com/gin-gonic/gin"
	"github.com/sirupsen/logrus"
)

// @Summary Post record
// @Tags Record
// @Description Insert new record
// @Accept  json
// @Produce  json
// @Param rquestBody body domain.PostRecordRequest true "place here  ID"
// @Success 200 {object} domain.PostRecordResponse
// @Router /admin/record [post]
func PostRecord(c *gin.Context, dbc db_services.DbController) {
	var req domain.PostRecordRequest
	if err := c.BindJSON(&req); err != nil {
		logrus.WithError(err).Error("couldn't bind request data")
		c.JSON(500, domain.PostRecordResponse{Error: err.Error(), StatusOk: false})
		return
	}
	logrus.WithFields(logrus.Fields{
		"username":    req.UserName,
		"call":        req.Call,
		"email":       req.Email,
		"time":        req.Time,
		"description": req.Description,
	}).Info("Start 'PostRecord' API method")

	resp, err := service.PostRecord(req, dbc)
	if err != nil {
		logrus.WithError(err).Error("couldn't insert data to DB")
		c.JSON(500, domain.PostRecordResponse{Error: err.Error(), StatusOk: resp})
		return
	}
	logrus.WithField("response", domain.PostRecordResponse{Error: fmt.Sprintf("%v", err), StatusOk: resp}).Debug("Data from DB")

	c.JSON(200, domain.PostRecordResponse{Error: fmt.Sprintf("%v", err), StatusOk: resp})
}
