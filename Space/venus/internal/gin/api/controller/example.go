package controller

import (
	"venus/internal/gin/api/service"

	"github.com/gin-gonic/gin"
	"github.com/sirupsen/logrus"
)

// @Summary Example api test
// @Description get example message
// @Accept  json
// @Produce  json
// @Success 200 {string} string	"ok"
// @Router /api/amdin/example [get]
func GetExample(c *gin.Context) {
	service.ExampleApiWork()
	logrus.Debug("Example API")
	c.JSON(200, "Example")
}
