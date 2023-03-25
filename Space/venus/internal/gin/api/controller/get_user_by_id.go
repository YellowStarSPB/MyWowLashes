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

// @Summary Get user ID
// @Description get user ID by ID
// @Accept  json
// @Produce  json
// @Param userId query uint true "place here user ID"
// @Success 200 {object} domain.GetUserByIdResponse
// @Router /admin/user [get]
func GetUserById(c *gin.Context, dbc db_services.DbController) {
	var req domain.GetUserByIdRequest
	if err := c.ShouldBindQuery(&req); err != nil {
		logrus.WithError(err).Error("couldn't bind request data")
		c.JSON(500, fmt.Sprintf("Error on binding request. err: %v", err))
		return
	}
	logrus.WithField("userId", req.UserId).Info("Start 'GetUserById' API method")
	if err := checkGetUserByIdRequestBody(req); err != nil {
		logrus.WithError(err).Error("failed to check UserId")
		c.JSON(400, fmt.Sprintf("Error to check UserId. err: %v", err))
		return
	}

	resp, err := service.GetUserById(req.UserId, dbc)
	if err != nil {
		logrus.WithError(err).Error("couldn't get user from DB")
		c.JSON(500, fmt.Sprintf("Error on getting data from DB. err: %v", err))
		return
	}
	logrus.WithField("response", resp).Debug("Data from DB")

	c.JSON(200, resp)
}

func checkGetUserByIdRequestBody(req domain.GetUserByIdRequest) error {
	if req.UserId <= 0 {
		return errors.New("UserId must be above 0")
	}

	return nil
}
