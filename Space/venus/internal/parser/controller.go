package parser

import (
	"net/http"
	"time"
	"venus/internal/config"

	"github.com/PuerkitoBio/goquery"
	"github.com/sirupsen/logrus"
)

type ParserController interface {
	parse()
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
	pc.parse()

	go func() {
		for now := range time.Tick(pc.Timer) {
			logrus.WithField("time", now).Info("Parse start")
			pc.parse()
		}
	}()
}

// StartParsing - function for starting parsing
func (pc *parserController) parse() {
	// Open HTML-page
	res, err := http.Get(pc.Url)
	if err != nil {
		logrus.WithError(err).WithField("URL", pc.Url).Fatal("Couldn't get url")
		//Check if the page is working
	} else if res.StatusCode == 200 {
		logrus.Debug("HTML-page ready for parsed!")
	} else {
		logrus.WithError(err).WithField("URL", res.StatusCode).Fatal("HTML-page is not found or work!")
	}
	doc, err := goquery.NewDocumentFromReader(res.Body)
	logrus.WithError(err).WithField("body", res.Body).Fatal("Couldn't create new document from reader")
	//Searth info for parsing
	doc.Find("a.tm-main-menu__item").Each(func(i int, selector *goquery.Selection) {
		linkAll, err := selector.Attr("href")
		if err != nil {
			logrus.WithError(err).WithField("URL", pc.Url).Fatal("Couldn't get url")
		}
		logrus.Debug("%s\n", linkAll)
		logrus.Error("Error in parsing", err)
	})
}
