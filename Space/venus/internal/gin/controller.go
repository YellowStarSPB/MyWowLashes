package gin

import (
	"venus/internal/gin/api"

	"github.com/gin-gonic/gin"
	"github.com/sirupsen/logrus"
)

type GinController interface {
	Run(port string)
}

type ginController struct {
	Engine *gin.Engine
}

func CreateGinController() GinController {
	gc := new(ginController)

	gc.Engine = gin.Default()

	return gc
}

func (gc *ginController) Run(port string) {
	api.CreateApiGroups(gc.Engine)
	if err := gc.Engine.Run(port); err != nil {
		logrus.WithError(err).WithField("port", port).Fatal("Cannot run server.")
	}

	logrus.WithField("port", port).Trace("Server started successful.")
}
