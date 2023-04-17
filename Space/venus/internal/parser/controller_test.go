package parser_test

import (
	"fmt"
	"net/http"
	"strings"
	"testing"

	"github.com/PuerkitoBio/goquery"
	"github.com/stretchr/testify/assert"
)

func TestParse(t *testing.T) {
	links := []string{}
	// Open HTML-page
	res, err := http.Get("https://vk.com/uslugi-211296299")
	assert.Nil(t, err, "can't get page")
	doc, err := goquery.NewDocumentFromReader(res.Body)
	assert.Nil(t, err, "can't querry page")
	//Searth info for parsing
	doc.Find("a").Each(func(i int, selector *goquery.Selection) {
		link, _ := selector.Attr("href")
		// assert.Equal(t, "", link, "can't get page")
		if strings.HasPrefix(link, "/product") {
			linkRes, err := http.Get(fmt.Sprintf("https://vk.com%s", link))
			assert.Nil(t, err, "can't get page")
			linkDoc, err := goquery.NewDocumentFromReader(linkRes.Body)
			assert.Nil(t, err, "can't querry page")
			linkDoc.Find("div").Each(func(i int, selector *goquery.Selection) {
				linkLink, _ := selector.Attr("src")
				if linkLink != "" {
					links = append(links, linkLink)
				}
			})

			// name := linkDoc.Find("div .MarketItemHead__title").Text()
			// assert.Equal(t, "", name)

			// cena := linkDoc.Find("div .MarketItemHead__price").Text()
			// assert.Equal(t, "", cena)

			// desc := linkDoc.Find("div .MarketItemInfo__description").Text()
			// assert.Equal(t, "", desc)

			// NOTE: FUNC FOR FIND ATTR
			// linkDoc.Find("div").Each(func(i int, selector *goquery.Selection) {
			// 	if selector.Text() == "Закрытые пучки, создающие удлиняющий эффект " {
			// 		assert.Equal(t, "", selector.Nodes[0].Attr)
			// 	}
			// })
		}
	})

	assert.Equal(t, "", links)
}
