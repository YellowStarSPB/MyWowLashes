package api

import (
	"venus/internal/gin/api/controller"

	"github.com/gin-gonic/gin"
)

func CreateApiGroups(g *gin.Engine) {
	adminGroup := g.Group("/api/admin")
	{
		adminGroup.GET("/example", controller.GetExample)
	}

	userGroup := g.Group("/api/user")
	{
		userGroup.GET("/example", controller.GetExample)
	}
}
