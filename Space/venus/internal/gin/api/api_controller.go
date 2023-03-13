package api

import (
	"venus/internal/gin/api/controller"

	"github.com/gin-gonic/gin"
	swaggerfiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)

func CreateApiGroups(g *gin.Engine) {
	base := g.Group("/api")
	adminGroup := base.Group("/admin")
	{
		adminGroup.GET("/example", controller.GetExample)
	}

	// userGroup := base.Group("/user")
	{
		// userGroup.GET("/example", controller.GetExample)
	}

	g.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerfiles.Handler))
}
