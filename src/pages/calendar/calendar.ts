//Framework imports
import { Component, AfterViewInit, AfterContentChecked, OnChanges } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';

//My imports

//External imports
import * as $ from 'jquery';

@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html'

})
export class CalendarPage implements AfterViewInit, AfterContentChecked, OnChanges {

  constructor(public navCtrl: NavController, storage: Storage) {
    storage.get('userData').then((val) => {
      //console.log(JSON.parse(val));
    });
  }
  ngAfterViewInit(){
    $('.fc-day-number').css( "color", "red" );
  }

  ngAfterContentChecked(){
    $('.fc-day').click(function() {
      $(this).css( "background-color", "red" );
      console.log('foda-se');
    });
  }
  ngOnChanges(changes) {
    // changes.prop contains the old and the new value...
  }
}
