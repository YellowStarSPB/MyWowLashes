package parser

import (
	"errors"
	"fmt"
	"net/http"
	"time"
	"venus/internal/config"

	"github.com/PuerkitoBio/goquery"
	"github.com/sirupsen/logrus"
)

type ParserController interface {
	parse() error
	StartRepeatedParcing()
}

type parserController struct {
	Url   string
	Timer time.Duration
}

func CreateParserController(config config.Config) ParserController {
	pc := new(parserController)
	pc.Timer = time.Duration(config.ParserConfig.Timer) * time.Hour
	pc.Url = config.ParserConfig.Url
	return pc
}
func (pc *parserController) StartRepeatedParcing() {
	logrus.Info("First Parsing")
	if err := pc.parse(); err != nil {
		logrus.WithField("url", pc.Url).WithError(err).Error("Error on parcing url")
	}

	go func() {
		for now := range time.Tick(pc.Timer) {
			logrus.WithField("time", now).Info("Parse start")
			if err := pc.parse(); err != nil {
				logrus.WithField("url", pc.Url).WithError(err).Error("Error on parcing url")
			}
		}
	}()
}

// StartParsing - function for starting parsing
func (pc *parserController) parse() error {
	// Open HTML-page
	res, err := http.Get(pc.Url)
	if err != nil {
		return errors.New(fmt.Sprintf("Couldn't open url. url: '%s'. Error: '%s'", pc.Url, err.Error()))
		//Check if the page is working
	} else if res.StatusCode != 200 {
		return errors.New(fmt.Sprintf("HTML-page is not found or work! url: '%d'. Error: '%s'", res.StatusCode, err.Error()))
	}
	doc, err := goquery.NewDocumentFromReader(res.Body)
	if err != nil {
		logrus.WithError(err).WithField("body", res.Body).Fatal("Couldn't create new document from reader")
	}
	//Searth info for parsing
	doc.Find("a.tm-main-menu__item").Each(func(i int, selector *goquery.Selection) {
		linkAll, _ := selector.Attr("href")
		logrus.WithField("URL ", linkAll).Debug("From parser")
	})
	return nil
}
