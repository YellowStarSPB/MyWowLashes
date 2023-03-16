package main

import (
	"os"
	"os/signal"
	"syscall"

	"github.com/mcuadros/go-defaults"
	"github.com/sirupsen/logrus"
	log "github.com/sirupsen/logrus"

	docs "venus/docs"
	"venus/internal/config"
	"venus/internal/gin"
	db_services "venus/internal/gorm/services"
	"venus/internal/logger"
)

type kateController struct {
	gin  gin.GinController
	gorm db_services.DbController
}

func CreateKateController(config config.Config) (kc *kateController, err error) {
	kc = new(kateController)
	kc.gin = gin.CreateGinController()
	kc.gorm, err = db_services.CreateDbController(config)

	return kc, err
}

// @title Kate Shop testing API
// @version 0.1
// @description This is a Kate server.

// @license.name Apache 2.0
// @license.url http://www.apache.org/licenses/LICENSE-2.0.html
// @BasePath /api
func main() {
	// Init system signals
	shutdown := make(chan bool)
	//create a notification channel to shutdown
	sigChan := make(chan os.Signal, 1)
	//register for interupt (Ctrl+C) and SIGTERM (docker)
	signal.Notify(sigChan, syscall.SIGINT, syscall.SIGTERM)
	// Start goroutine for receiving signals
	go func() {
		// Wait any of signal in Signal Channel
		sig := <-sigChan
		log.Info("Signal received: ", sig.String())
		// Set shutdown = true
		shutdown <- true
	}()

	// Create config file
	config := new(config.Config)
	defaults.SetDefaults(config)

	// Init logger
	logger.InitLogger()

	log.SetLevel(logger.ParseLogLevel(config.LoggerConf.LogLevel))

	// Create kate controller
	kc, err := CreateKateController(*config)
	if err != nil {
		logrus.WithError(err).Fatal("Couldn't create KateController")
	}

	docs.SwaggerInfo.BasePath = "/api"

	// Start server
	go kc.gin.Run(":1001")

	<-shutdown
	log.Debug("Server is down!")
}
