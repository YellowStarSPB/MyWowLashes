package parser

import (
	"github.com/PuerkitoBio/goquery"
	"github.com/sirupsen/logrus"
	"net/http"
	"time"
	"venus/internal/config"
)

type ParserController interface {
	StartParsing()
}

type parserController struct {
	Url   string
	Timer time.Duration
}

func CreateParserController(config config.Config) ParserController {
	pc := new(parserController)
	pc.Timer = config.ParserConfig.Timer * (time.Hour * 12)
	pc.Url = config.ParserConfig.Url
	return pc
}

// StartParsing - function for starting parsing
func (pc *parserController) StartParsing() {
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
		logrus.Debug("%s\n", linkAll)
		logrus.Error("Error in parsing", err)
	})
}
