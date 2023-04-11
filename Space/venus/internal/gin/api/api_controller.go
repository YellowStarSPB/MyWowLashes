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
		//User
		adminGroup.GET("/users", func(c *gin.Context) { controller.GetAllUsers(c, dbController) })
		adminGroup.GET("/user", func(c *gin.Context) { controller.GetUserById(c, dbController) })
		adminGroup.POST("/user", func(c *gin.Context) { controller.PostUser(c, dbController) })
		//Photo
		adminGroup.GET("/photo", func(c *gin.Context) { controller.GetPhotoById(c, dbController) })
		adminGroup.POST("/photo", func(c *gin.Context) { controller.PostPhoto(c, dbController) })
		//Order
		adminGroup.GET("/order", func(c *gin.Context) { controller.GetOrderById(c, dbController) })
		adminGroup.POST("/order", func(c *gin.Context) { controller.PostOrder(c, dbController) })
		adminGroup.POST("/orderupdate", func(c *gin.Context) { controller.PostOrderUpdate(c, dbController) })
		adminGroup.GET("/calendar", func(c *gin.Context) { controller.GetCalendar(c, dbController) })
		//Sevices
		adminGroup.GET("/services", func(c *gin.Context) { controller.GetServicesById(c, dbController) })
		adminGroup.POST("/services", func(c *gin.Context) { controller.PostServices(c, dbController) })
		//Record
		adminGroup.POST("/record", func(c *gin.Context) { controller.PostRecord(c, dbController) })
	}

	g.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerfiles.Handler))
}
