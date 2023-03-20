package parser

import (
	"fmt"
	"net/http"
	"venus/internal/config"

	"github.com/PuerkitoBio/goquery"
	"github.com/sirupsen/logrus"
)

// парсер
func Parsing(config config.Config) (link *goquery.Selection) {
	// вставляем ссылку, с которой будем парсить страницу
	resp, err := http.Get(config.ParserConfig.Url)
	if err != nil {
		logrus.WithError(err).WithField("URL", config.ParserConfig.Url).Fatal("Couldn't get url")
		//проверяем, что ссылка рабочая
	} else if resp.StatusCode == 200 {
		logrus.Debug("HTML-page ready for parsed!")
	} else {
		logrus.WithError(err).WithField("URL", resp.StatusCode).Fatal("HTML-page is not found or work!")
	}
	//парсим документ страницы
	doc, err := goquery.NewDocumentFromReader(resp.Body)
	if err != nil {
		logrus.Fatal(err)
	}
	//ищем по странице ссылки
	link = doc.Find("a.tm-main-menu__item").Each(func(i int, selector *goquery.Selection) {
		linkAll, _ := selector.Attr("href")
		fmt.Printf("%s\n", linkAll)
	})
	return link
}
