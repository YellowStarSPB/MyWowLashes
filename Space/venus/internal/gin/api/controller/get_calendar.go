package controller

import (
	"fmt"
	"venus/internal/gin/api/domain"
	"venus/internal/gin/api/service"
	db_services "venus/internal/gorm/services"

	"github.com/gin-gonic/gin"
	"github.com/sirupsen/logrus"
)

// @Summary Get calendar
// @Tags Calendar
// @Description Get calendar from database
// @Accept  json
// @Produce  json
// @Param date query string true "start date"
// @Success 200 {object} domain.GetCalendarResponse
// @Router /admin/calendar [get]
func GetCalendar(c *gin.Context, dbc db_services.DbController) {
	var req domain.GetCalendarRequest
	if err := c.ShouldBind(&req); err != nil {
		logrus.WithError(err).Error("couldn't bind request data")
		c.JSON(500, domain.GetCalendarResponse{
			Error: fmt.Sprintf("Error on binding request. err: %v", err),
		})
		return
	}

	logrus.WithField("date", req.Date).Info("Start 'GetCalendar' API method")
	resp, err := service.GetCalendar(req, dbc)
	if err != nil {
		logrus.WithError(err).Error("couldn't get calendar from DB")
		c.JSON(500, domain.GetCalendarResponse{
			Error: fmt.Sprintf("couldn't get calendar from DB. Error: %s", err),
		})
		return
	}
	logrus.WithField("response", resp).Debug("Data from DB")

	c.JSON(200, resp)
}
