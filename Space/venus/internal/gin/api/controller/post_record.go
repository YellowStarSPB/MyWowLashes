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
	if err := c.ShouldBind(&req); err != nil {
		logrus.WithError(err).Error("couldn't bind request data")
		c.JSON(500, fmt.Sprintf("Error on binding request. err: %v", err))
		return
	}
	logrus.WithFields(logrus.Fields{
		"username":    req.UserName,
		"calls":       req.Call,
		"description": req.Description,
		"email":       req.Email,
		"order":       req.Time,
	}).Info("Start 'PostRecord' API method")
	resp, err := service.PostRecord(req, dbc)
	if err != nil {
		logrus.WithError(err).Error("couldn't insert data to DB")
		c.JSON(500, domain.PostRecordResponse{Error: err, StatusOk: resp})
		return
	}
	logrus.WithField("response", resp).Debug("Data from DB")

	c.JSON(200, domain.PostRecordResponse{Error: err, StatusOk: resp})
}

// func checkPostRecordRequestBody(req domain.PostRecordRequest) error {
// 	if req.User == nil {
// 		return errors.New("user must have a value")
// 	}
// 	if req.Order == nil {
// 		return errors.New("Order must have a value")
// 	}

// 	return nil
// }
