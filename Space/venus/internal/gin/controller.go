package gin

import (
	"venus/internal/config"
	"venus/internal/gin/api"
	db_services "venus/internal/gorm/services"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/sirupsen/logrus"
)

type GinController interface {
	Run()
}

type ginController struct {
	Engine       *gin.Engine
	DbController db_services.DbController
	GinConfig    struct {
		port string
	}
}

func CreateGinController(config config.Config, dbc db_services.DbController) GinController {
	gc := new(ginController)

	if !config.Debug {
		gin.SetMode(gin.ReleaseMode)
	}
	gc.Engine = gin.Default()
	gc.GinConfig.port = config.Servonfig.Port
	gc.DbController = dbc

	return gc
}

// Run - function for starting server
func (gc *ginController) Run() {
	// Set CORS
	gc.setCors()
	api.CreateApiGroups(gc.Engine, gc.DbController)
	// Start server
	if err := gc.Engine.Run(gc.GinConfig.port); err != nil {
		logrus.WithError(err).WithField("port", gc.GinConfig.port).Fatal("Cannot run server.")
	}

	logrus.WithField("port", gc.GinConfig.port).Trace("Server started successful.")
}

func (gc *ginController) setCors() {
	corsConfig := cors.DefaultConfig()
	corsConfig.AllowAllOrigins = true
	gc.Engine.Use(cors.New(corsConfig))
}
