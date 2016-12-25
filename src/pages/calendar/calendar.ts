import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-calendar',
  template: 'calendar-html'

})

export class CalendarPage {
  storeCache;

  constructor(public navCtrl: NavController, storege: Storage) {
    this.storeCache.storage.get('userData').then((val) => {

    });
  }

}
