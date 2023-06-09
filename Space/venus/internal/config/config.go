package config

import (
	"fmt"
)

type Config struct {
	Debug        bool `default:"false"`
	Servonfig    serConfig
	DbConf       dbConfig
	LoggerConf   loggerConfig
	ParserConfig parserConfig
}

type serConfig struct {
	Port string `default:":1001"`
}

type dbConfig struct {
	Host     string `default:"localhost"`
	User     string `default:"kateshop"`
	Password string `default:"kateshop"`
	DbName   string `default:"kateshop"`
	Port     string `default:"5432"`
	Sslmode  string `default:"disable"`
	TimeZone string `default:"Europe/Moscow"`
}

func (dbc *dbConfig) DSN() string {
	return fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=%s TimeZone=%s", dbc.Host, dbc.User, dbc.Password, dbc.DbName, dbc.Port, dbc.Sslmode, dbc.TimeZone)
}

type loggerConfig struct {
	LogLevel string `default:"TRACE"`
}
type parserConfig struct {
	Url   string `default:"https://vk.com/uslugi-211296299?section=album_1"`
	Timer uint   `default:"12"`
}
