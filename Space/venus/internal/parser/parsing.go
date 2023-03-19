package parser

import (
	"fmt"
	"log"
	"net/http"

	"github.com/PuerkitoBio/goquery"
)

// парсер
func Parser() {
	url := "https://habr.com/ru/post/493088/"
	// вставляем ссылку, с которой будем парсить страницу
	resp, err := http.Get(url)
	if err != nil {
		log.Fatalln(err)
		//проверяем, что ссылка рабочая
	} else if resp.StatusCode == 200 {
		fmt.Println("We can scrape this")
	} else {
		log.Fatalln("Do not scrape this")
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
//TODO всё отпарскенное перекинуть в json структуры (а надо?)
//TODO перекидывать список url ссылок на фото в баззу данных
