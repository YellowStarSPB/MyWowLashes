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
// @Description Insert new record
// @Accept  json
// @Produce  json
// @Param rquestBody body domain.PostRecordRequest true "place here  ID"
// @Success 200 {object} domain.PostRecordResponse
// @Router /admin/record [post]
func PostRecord(c *gin.Context, dbc db_services.DbController) {
	var r domain.PostRecordRequest
	talon, err := service.PostTalon(r.Talon, dbc)
	if err != nil {
		logrus.WithError(err).Error("couldn't insert data to DB")
		c.JSON(500, fmt.Sprintf("Error on inserting data to DB. err: %v", err))
		return
	}
	logrus.WithField("response", talon).Debug("Data from DB")

	c.JSON(200, talon)

	user, err := service.PostUser(r.User, dbc)
	if err != nil {
		logrus.WithError(err).Error("couldn't insert data to DB")
		c.JSON(500, fmt.Sprintf("Error on inserting data to DB. err: %v", err))
		return
	}
	logrus.WithField("response", user).Debug("Data from DB")

	c.JSON(200, user)

	order, err := service.PostOrder(r.Order, dbc)
	if err != nil {
		logrus.WithError(err).Error("couldn't insert data to DB")
		c.JSON(500, fmt.Sprintf("Error on inserting data to DB. err: %v", err))
		return
	}
	logrus.WithField("response", order).Debug("Data from DB")

	c.JSON(200, order)
}
