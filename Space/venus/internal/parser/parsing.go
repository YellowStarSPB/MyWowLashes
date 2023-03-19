package parsing

import (
	"fmt"
	"github.com/PuerkitoBio/goquery"
	"github.com/sirupsen/logrus"
	"log"
	"net/http"
	"venus/internal/config"
)

// парсер
func parsing(config config.Config) {
	// вставляем ссылку, с которой будем парсить страницу
	resp, err := http.Get(config.ParseConfig.UrlParser)
	if err != nil {
		logrus.WithError(err).WithField("URL", config.ParseConfig.UrlParser).Fatal("Couldn't get url")
		//проверяем, что ссылка рабочая
	} else if resp.StatusCode == 200 {
		logrus.Debug("HTML-page ready for parsed!")
	} else {
		logrus.WithError(err).WithField("URL", resp.StatusCode).Fatal("HTML-page is not found or work!")
	}
	//парсим документ страницы
	doc, err := goquery.NewDocumentFromReader(resp.Body)
	if err != nil {
		log.Fatalf("not dowland %s", err)
	}
	//ищем по странице ссылки
	doc.Find("a.tm-main-menu__item").Each(func(i int, selector *goquery.Selection) {
		link, _ := selector.Attr("href")
		fmt.Printf("%s\n", link)

	})
}

//TODO сделать структуры для url фоток
//TODO перекидывать список url ссылок на фото в баззу данных
