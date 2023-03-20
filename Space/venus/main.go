package main

import (
	"flag"
	"github.com/mcuadros/go-defaults"
	"github.com/sirupsen/logrus"
	"os"
	"os/signal"
	"syscall"
	docs "venus/docs"
	"venus/internal/config"
	"venus/internal/gin"
	db_services "venus/internal/gorm/services"
	"venus/internal/logger"
	"venus/internal/parser"
)

type kateController struct {
	gin    gin.GinController
	gorm   db_services.DbController
	parser parser.ParserController
}

func createKateController(config config.Config) (kc *kateController, err error) {
	kc = new(kateController)
	kc.gin = gin.CreateGinController(config)
	kc.gorm, err = db_services.CreateDbController(config)
	kc.parser = parser.CreateParserController(config)
	return kc, err
}

func prepare(conf *config.Config) {
	docs.SwaggerInfo.BasePath = "/api"

	defaults.SetDefaults(conf)

	debug := flag.Bool("d", false, "Debug mode. Default false.")
	flag.Parse()

	conf.Debug = *debug
	if conf.Debug {
		conf.LoggerConf.LogLevel = "DEBUG"

	}
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
		logrus.Info("Signal received: ", sig.String())
		// Set shutdown = true
		shutdown <- true
	}()

	config := new(config.Config)
	// Prepare config
	prepare(config)

	// Init logger
	logger.InitLogger()

	// Set log level
	logrus.SetLevel(logger.ParseLogLevel(config.LoggerConf.LogLevel))
	logrus.Tracef("DebugMode: %v", config.Debug)

	// Create kate controller
	kc, err := createKateController(*config)
	if err != nil {
		logrus.WithError(err).Fatal("Couldn't create KateController")
	}

	// Start server
	go kc.gin.Run()
	kc.parser.StartRepeatedParcing()

	<-shutdown
	logrus.Debug("Server is down!")
}
