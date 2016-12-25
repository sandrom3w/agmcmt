import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html'

})
export class CalendarPage {

  constructor(public navCtrl: NavController, storage: Storage) {
    storage.get('userData').then((val) => {
      //console.log(JSON.parse(val));
    });
  }

}
