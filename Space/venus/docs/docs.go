// Code generated by swaggo/swag. DO NOT EDIT.

package docs

import "github.com/swaggo/swag"

const docTemplate = `{
    "schemes": {{ marshal .Schemes }},
    "swagger": "2.0",
    "info": {
        "description": "{{escape .Description}}",
        "title": "{{.Title}}",
        "contact": {},
        "license": {
            "name": "Apache 2.0",
            "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
        },
        "version": "{{.Version}}"
    },
    "host": "{{.Host}}",
    "basePath": "{{.BasePath}}",
    "paths": {
        "/admin/example": {
            "get": {
                "description": "get example message",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "summary": "Example api test",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/domain.GetExampleResponse"
                        }
                    }
                }
            }
        },
        "/admin/order": {
            "get": {
                "description": "get order ID by ID",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Order"
                ],
                "summary": "Get order ID",
                "parameters": [
                    {
                        "type": "integer",
                        "description": "place here order ID",
                        "name": "orderId",
                        "in": "query",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/domain.GetOrderByIdResponse"
                        }
                    }
                }
            },
            "post": {
                "description": "Insert new order",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Order"
                ],
                "summary": "Post order",
                "parameters": [
                    {
                        "description": "place here order ID",
                        "name": "rquestBody",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/domain.PostOrderRequest"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/domain.PostOrderResponse"
                        }
                    }
                }
            }
        },
        "/admin/photo": {
            "get": {
                "description": "get photo ID by ID",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Photo"
                ],
                "summary": "Get photo ID",
                "parameters": [
                    {
                        "type": "integer",
                        "description": "place here photo ID",
                        "name": "photoId",
                        "in": "query",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/domain.GetPhotoByIdResponse"
                        }
                    }
                }
            },
            "post": {
                "description": "Insert new photo",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Photo"
                ],
                "summary": "Post photo",
                "parameters": [
                    {
                        "description": "place here photo ID",
                        "name": "rquestBody",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/domain.PostPhotoRequest"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/domain.PostPhotoResponse"
                        }
                    }
                }
            }
        },
        "/admin/talon": {
            "get": {
                "description": "get talon ID by ID",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "summary": "Get talon ID",
                "parameters": [
                    {
                        "type": "integer",
                        "description": "place here talon ID",
                        "name": "talonId",
                        "in": "query",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/domain.GetTalonByIdResponse"
                        }
                    }
                }
            },
            "post": {
                "description": "Insert new talon",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "summary": "Post talon",
                "parameters": [
                    {
                        "description": "place here talon ID",
                        "name": "rquestBody",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/domain.PostTalonRequest"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/domain.PostTalonResponse"
                        }
                    }
                }
            }
        },
        "/admin/user": {
            "get": {
                "description": "get user ID by ID",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Users"
                ],
                "summary": "Get user ID",
                "parameters": [
                    {
                        "type": "integer",
                        "description": "place here user ID",
                        "name": "userId",
                        "in": "query",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/domain.GetUserByIdResponse"
                        }
                    }
                }
            },
            "post": {
                "description": "Insert new user",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Users"
                ],
                "summary": "Post user",
                "parameters": [
                    {
                        "description": "place here user ID",
                        "name": "rquestBody",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/domain.PostUserRequest"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/domain.PostUserResponse"
                        }
                    }
                }
            }
        },
        "/admin/users": {
            "get": {
                "description": "get users",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Users"
                ],
                "summary": "Get Users",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/domain.GetAllUsersResponse"
                        }
                    }
                }
            }
        }
    },
    "definitions": {
        "domain.GetAllUsersResponse": {
            "type": "object",
            "properties": {
                "users": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/domain.GetUserByIdResponse"
                    }
                }
            }
        },
        "domain.GetExampleResponse": {
            "type": "object",
            "properties": {
                "example": {
                    "type": "string",
                    "example": "oleg loh"
                }
            }
        },
        "domain.GetOrderByIdResponse": {
            "type": "object",
            "properties": {
                "status": {
                    "$ref": "#/definitions/domain.Status"
                },
                "time": {
                    "type": "string",
                    "example": "10.03.2023,10:30PM"
                },
                "userId": {
                    "type": "integer",
                    "example": 1
                }
            }
        },
        "domain.GetPhotoByIdResponse": {
            "type": "object",
            "properties": {
                "hidden": {
                    "type": "boolean",
                    "example": true
                },
                "imagename": {
                    "type": "string",
                    "example": "1"
                },
                "servicesId": {
                    "type": "integer",
                    "example": 1
                },
                "url": {
                    "type": "string",
                    "example": "1"
                }
            }
        },
        "domain.GetTalonByIdResponse": {
            "type": "object",
            "properties": {
                "orderId": {
                    "type": "integer",
                    "example": 1
                },
                "time": {
                    "type": "string",
                    "example": "10.03.2023,10:30PM"
                },
                "userId": {
                    "type": "integer",
                    "example": 1
                }
            }
        },
        "domain.GetUserByIdResponse": {
            "type": "object",
            "properties": {
                "callpreferences": {
                    "type": "string",
                    "example": "1"
                },
                "instagram": {
                    "type": "string",
                    "example": "lololo"
                },
                "orderId": {
                    "type": "integer",
                    "example": 1
                },
                "phonenumber": {
                    "type": "string",
                    "example": "9833211233212"
                },
                "talon": {
                    "type": "integer",
                    "example": 1
                },
                "username": {
                    "type": "string",
                    "example": "OLEG"
                }
            }
        },
        "domain.PostOrderRequest": {
            "type": "object",
            "properties": {
                "status": {
                    "$ref": "#/definitions/domain.Status"
                },
                "time": {
                    "type": "string",
                    "example": "10.03.2023,10:30PM"
                },
                "userId": {
                    "type": "integer",
                    "example": 1
                }
            }
        },
        "domain.PostOrderResponse": {
            "type": "object",
            "properties": {
                "orderId": {
                    "type": "integer",
                    "example": 1
                }
            }
        },
        "domain.PostPhotoRequest": {
            "type": "object",
            "properties": {
                "hidden": {
                    "type": "boolean",
                    "example": true
                },
                "imagename": {
                    "type": "string",
                    "example": "1"
                },
                "servicesId": {
                    "type": "integer",
                    "example": 1
                },
                "url": {
                    "type": "string",
                    "example": "1"
                }
            }
        },
        "domain.PostPhotoResponse": {
            "type": "object",
            "properties": {
                "photoId": {
                    "type": "integer",
                    "example": 1
                }
            }
        },
        "domain.PostTalonRequest": {
            "type": "object",
            "properties": {
                "orderId": {
                    "type": "integer",
                    "example": 1
                },
                "time": {
                    "type": "string",
                    "example": "2023-01-02T10:30:00Z"
                },
                "userId": {
                    "type": "integer",
                    "example": 1
                }
            }
        },
        "domain.PostTalonResponse": {
            "type": "object",
            "properties": {
                "talonId": {
                    "type": "integer",
                    "example": 1
                }
            }
        },
        "domain.PostUserRequest": {
            "type": "object",
            "properties": {
                "callpreferences": {
                    "type": "string",
                    "example": "1"
                },
                "instagram": {
                    "type": "string",
                    "example": "lololo"
                },
                "orderId": {
                    "type": "integer",
                    "example": 1
                },
                "phonenumber": {
                    "type": "string",
                    "example": "9833211233212"
                },
                "talon": {
                    "type": "integer",
                    "example": 1
                },
                "username": {
                    "type": "string",
                    "example": "OLEG"
                }
            }
        },
        "domain.PostUserResponse": {
            "type": "object",
            "properties": {
                "userId": {
                    "type": "integer",
                    "example": 1
                }
            }
        },
        "domain.Status": {
            "type": "string",
            "enum": [
                "accepted",
                "canceled",
                "pending"
            ],
            "x-enum-varnames": [
                "status_accepted",
                "status_canceled",
                "status_pending"
            ]
        }
    }
}`

// SwaggerInfo holds exported Swagger Info so clients can modify it
var SwaggerInfo = &swag.Spec{
	Version:          "0.1",
	Host:             "",
	BasePath:         "/api",
	Schemes:          []string{},
	Title:            "Kate Shop testing API",
	Description:      "This is a Kate server.",
	InfoInstanceName: "swagger",
	SwaggerTemplate:  docTemplate,
}

func init() {
	swag.Register(SwaggerInfo.InstanceName(), SwaggerInfo)
}
