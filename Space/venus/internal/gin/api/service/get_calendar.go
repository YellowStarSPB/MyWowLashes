package service

import (
	"time"
	"venus/internal/gin/api/domain"
	db_domain "venus/internal/gorm/domain"
	db_services "venus/internal/gorm/services"

	"github.com/sirupsen/logrus"
)

func GetCalendar(req domain.GetCalendarRequest, dbc db_services.DbController) (*domain.GetCalendarResponse, error) {
	date, err := time.Parse(time.DateOnly, req.Date)
	if err != nil {
		return nil, err
	}
	logrus.WithField("date", date).Debug("date after parsing")
	resp, err := dbc.GetCalendarOrders(date)
	if err != nil {
		return nil, err
	}

	return convertCalendarOrders(resp, date), nil
}

func convertCalendarOrders(dbOrders []db_domain.Order, date time.Time) *domain.GetCalendarResponse {
	resp := new(domain.GetCalendarResponse)
	for _, dbOrder := range dbOrders {
		if dbOrder.Time.Month().String() == date.Month().String() {
			if len(resp.Current) > 0 {
				for i, day := range resp.Current {
					if day.Day == uint(dbOrder.Time.Day()) {
						resp.Current[i].Times = append(resp.Current[i].Times, dbOrder.Time.String())
					} else {
						resp.Current = append(resp.Current, domain.GetCalendarTicket{
							Day:   uint(dbOrder.Time.Day()),
							Times: []string{dbOrder.Time.String()},
						})
					}
				}
			} else {
				resp.Current = append(resp.Current, domain.GetCalendarTicket{
					Day:   uint(dbOrder.Time.Day()),
					Times: []string{dbOrder.Time.String()},
				})
			}
		} else {
			if len(resp.Next) > 0 {
				for i, day := range resp.Next {
					if day.Day == uint(dbOrder.Time.Day()) {
						resp.Next[i].Times = append(resp.Next[i].Times, dbOrder.Time.String())
					} else {
						resp.Next = append(resp.Next, domain.GetCalendarTicket{
							Day:   uint(dbOrder.Time.Day()),
							Times: []string{dbOrder.Time.String()},
						})
					}
				}
			} else {
				resp.Next = append(resp.Next, domain.GetCalendarTicket{
					Day:   uint(dbOrder.Time.Day()),
					Times: []string{dbOrder.Time.String()},
				})
			}
		}
	}

	return resp
}
