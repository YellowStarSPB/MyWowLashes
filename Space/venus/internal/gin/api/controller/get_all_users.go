package controller

import (
	"fmt"
	"venus/internal/gin/api/service"
	db_services "venus/internal/gorm/services"

	"github.com/gin-gonic/gin"
	"github.com/sirupsen/logrus"
)

// @Summary Get Users
// @Tags Users
// @Description get users
// @Accept  json
// @Produce  json
// @Success 200 {object} domain.GetAllUsersResponse
// @Router /admin/users [get]
func GetAllUsers(c *gin.Context, dbc db_services.DbController) {
	resp, err := service.GetAllUsers(dbc)
	if err != nil {
		logrus.WithError(err).Error("couldn't get Alluser from DB")
		c.JSON(500, fmt.Sprintf("Error on getting data from DB. err: %v", err))
		return
	}
	logrus.WithField("response", resp).Debug("Data from DB")

	c.JSON(200, resp)
}
