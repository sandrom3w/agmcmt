import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//My imports
import { SignupPage } from '../../pages/signup/signup';

//External imports
import * as $ from 'jquery';

var eventos = [
  {
    title: '1-evento',
    start: '2016-12-29'
  },
    {
      title: '2-evento',
      start: '2016-12-29'
    },
      {
        title: '3-evento',
        start: '2016-12-29'
      },
  {
    title: 'Long Event',
    start: '2017-01-01',
    end: '2017-01-10'
  }
];

@Component({
  selector: 'full-calendar',
  templateUrl: 'full-calendar.html'
})
export class FullCalendarComponent {
  today: String = new Date().toISOString();

  constructor(private nav: NavController) {}

  calendarOptions: Object = {
    height: 'parent',
    contentHeight: 'auto',
    locale:'pt',
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
    events: eventos,
    eventClick: function(event) {
      console.log('evento zuado');
    },
    dayClick: function(date, jsEvent, view) {
      console.log('Clicked on: ' + date.format());
      console.log('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
      console.log('Current view: ' + view.name);

      // change the day's background color just for fun
      $(this).css('background-color', 'lightblue');

      //this.partiu();
    }

  }

  partiu() {
    this.nav.push(SignupPage);
  }
}
