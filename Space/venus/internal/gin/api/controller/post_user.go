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

// @Summary Post user
// @Tags Users
// @Description Insert new user
// @Accept  json
// @Produce  json
// @Param rquestBody body domain.PostUserRequest true "place here user ID"
// @Success 200 {object} domain.PostUserResponse
// @Router /admin/user [post]
func PostUser(c *gin.Context, dbc db_services.DbController) {
	var req domain.PostUserRequest
	if err := c.ShouldBind(&req); err != nil {
		logrus.WithError(err).Error("couldn't bind request data")
		c.JSON(500, fmt.Sprintf("Error on binding request. err: %v", err))
		return
	}
	logrus.WithFields(logrus.Fields{
		"username":        req.UserName,
		"phoneNumber":     req.PhoneNumber,
		"instagram":       req.Instagram,
		"callpreferences": req.CallPreferences,
		"orderId":         req.OrderID,
	}).Info("Start 'PostUser' API method")
	if err := checkPostUserRequestBody(req); err != nil {
		logrus.WithError(err).Error("failed to check UserId")
		c.JSON(400, fmt.Sprintf("Error to check UserId. err: %v", err))
		return
	}

	resp, err := service.PostUser(req, dbc)
	if err != nil {
		logrus.WithError(err).Error("couldn't insert data to DB")
		c.JSON(500, fmt.Sprintf("Error on inserting data to DB. err: %v", err))
		return
	}
	logrus.WithField("response", resp).Debug("Data from DB")

	c.JSON(200, resp)
}

func checkPostUserRequestBody(req domain.PostUserRequest) error {
	if req.UserName == "" {
		return errors.New("username must have a value")
	}
	if len([]rune(req.PhoneNumber)) != 10 {
		return errors.New("phonenumber must have a value")
	}
	if req.CallPreferences == "" {
		return errors.New("callpreferences must have a value")
	}
	if req.OrderID <= 0 {
		return errors.New("orderId must be above 0")
	}
	return nil
}
