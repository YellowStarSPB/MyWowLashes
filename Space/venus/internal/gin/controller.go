package gin

import (
	"venus/internal/config"
	"venus/internal/gin/api"

	"github.com/gin-gonic/gin"
	"github.com/sirupsen/logrus"
)

type GinController interface {
	Run()
}

type ginController struct {
	Engine    *gin.Engine
	GinConfig struct {
		port string
	}
}

func CreateGinController(config config.Config) GinController {
	gc := new(ginController)

	if !config.Debug {
		gin.SetMode(gin.ReleaseMode)
	}
	gc.Engine = gin.Default()
	gc.GinConfig.port = config.Servonfig.Port

	return gc
}

// Run - function for starting server
func (gc *ginController) Run() {
	api.CreateApiGroups(gc.Engine)
	// Start server
	if err := gc.Engine.Run(gc.GinConfig.port); err != nil {
		logrus.WithError(err).WithField("port", gc.GinConfig.port).Fatal("Cannot run server.")
	}

	logrus.WithField("port", gc.GinConfig.port).Trace("Server started successful.")
}
