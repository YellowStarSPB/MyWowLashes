package gin

import (
	"venus/internal/config"
	"venus/internal/gin/api"

	"github.com/gin-gonic/gin"
	"github.com/sirupsen/logrus"
)

type GinController interface {
	Run(port string)
}

type ginController struct {
	Engine    *gin.Engine
	GinConfig struct {
		port  string
		debug bool
	}
}

func CreateGinController(config config.Config) GinController {
	gc := new(ginController)

	if !config.Debug {
		gin.SetMode(gin.ReleaseMode)
	}
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
