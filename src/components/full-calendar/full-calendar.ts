import { Component } from '@angular/core';
@Component({
selector: 'full-calendar',
templateUrl: 'full-calendar.html'
})
export class FullCalendarComponent {
  today: String = new Date().toISOString();

calendarOptions:Object = {
height: 'parent',
contentHeight: 'auto',
fixedWeekCount : false,
defaultDate: this.today,
editable: true,
eventLimit: true, // allow "more" link when too many events
defaultView: 'month',
allDaySlot: false,
minTime: '06:00:00',
maxTime: '23:00:00',
header: {
left: '',
center: 'prev, title, next',
right: ''
},
events: [
{
title: 'All Day Event',
start: '2016-09-01'
},
{
title: 'Long Event',
start: '2016-09-07',
end: '2016-09-10'
}]
}
}
