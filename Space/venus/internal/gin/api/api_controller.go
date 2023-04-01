package api

import (
	"venus/internal/gin/api/controller"
	db_services "venus/internal/gorm/services"

	"github.com/gin-gonic/gin"
	swaggerfiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)

func CreateApiGroups(g *gin.Engine, dbController db_services.DbController) {
	base := g.Group("/api")
	adminGroup := base.Group("/admin")
	{
		adminGroup.GET("/example", controller.GetExample)
		adminGroup.GET("/talon", func(c *gin.Context) { controller.GetTalonById(c, dbController) })
		adminGroup.POST("/talon", func(c *gin.Context) { controller.PostTalon(c, dbController) })
		adminGroup.GET("/users", func(c *gin.Context) { controller.GetAllUsers(c, dbController) })
		adminGroup.GET("/user", func(c *gin.Context) { controller.GetUserById(c, dbController) })
		adminGroup.POST("/user", func(c *gin.Context) { controller.PostUser(c, dbController) })
		adminGroup.GET("/photo", func(c *gin.Context) { controller.GetPhotoById(c, dbController) })
		adminGroup.POST("/photo", func(c *gin.Context) { controller.PostPhoto(c, dbController) })

	}

	// userGroup := base.Group("/user")
	{
		// userGroup.GET("/example", controller.GetExample)
	}

	g.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerfiles.Handler))
}
