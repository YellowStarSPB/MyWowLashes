package controller

import (
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
		"username": req.UserName,
		"call":     req.Call,
		"email":    req.Email,
	}).Info("Start 'PostUser' API method")

	resp, err := service.PostUser(req, dbc)
	if err != nil {
		logrus.WithError(err).Error("couldn't insert data to DB")
		c.JSON(500, fmt.Sprintf("Error on inserting data to DB. err: %v", err))
		return
	}
	logrus.WithField("response", resp).Debug("Data from DB")

	c.JSON(200, resp)
}
