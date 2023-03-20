package parser

import (
	"fmt"
	"net/http"
	"venus/internal/config"

	"github.com/PuerkitoBio/goquery"
	"github.com/sirupsen/logrus"
)

type ParserController interface {
	StartParsing()
}

type parserController struct {
	Res    *http.Response
	Parser *goquery.Selection
}

func CreateParserController(config config.Config) ParserController {
	pc := new(parserController)
	var err error
	// Open HTML-page
	pc.Res, err = http.Get(config.ParserConfig.Url)
	if err != nil {
		logrus.WithError(err).WithField("URL", config.ParserConfig.Url).Fatal("Couldn't get url")
		//Check if the page is working
	} else if pc.Res.StatusCode == 200 {
		logrus.Debug("HTML-page ready for parsed!")
	} else {
		logrus.WithError(err).WithField("URL", pc.Res.StatusCode).Fatal("HTML-page is not found or work!")
	}

	return pc
}

// StartParsing - function for starting parsing
func (pc *parserController) StartParsing() {
	doc, err := goquery.NewDocumentFromReader(pc.Res.Body)
	if err != nil {
		logrus.Fatal(err)
	}
	//Searth info for parsing
	doc.Find("a.tm-main-menu__item").Each(func(i int, selector *goquery.Selection) {
		linkAll, _ := selector.Attr("href")
		fmt.Printf("%s\n", linkAll)
		logrus.Debug("PARSING RESULT")
	})
}
