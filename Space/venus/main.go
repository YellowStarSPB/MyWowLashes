package main

import (
	"os"
	"os/signal"
	"syscall"
	"venus/internal/gin"
	"venus/internal/logger"

	log "github.com/sirupsen/logrus"
)

type kateController struct {
	gin gin.GinController
}

func CreateKateController() *kateController {
	kc := new(kateController)
	kc.gin = gin.CreateGinController()

	return kc
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
	// Init logger
	logger.InitLogger()

	log.SetLevel(logger.ParseLogLevel("TRACE"))

	// Create kate controller
	kc := CreateKateController()

	// Start server
	go kc.gin.Run(":8080")

	log.Debug("Server is running!")
	<-shutdown
}
