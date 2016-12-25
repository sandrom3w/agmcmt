import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html'
<<<<<<< HEAD

=======
>>>>>>> origin/master
})
export class CalendarPage {

<<<<<<< HEAD
  constructor(public navCtrl: NavController, storege: Storage) {
    this.storeCache.storage.get('userData').then((val) => {
    });
=======
  constructor(public navCtrl: NavController, storage: Storage) {
    storage.get('userData').then((val) => {
      //console.log(JSON.parse(val));
    })

>>>>>>> origin/master
  }

}
