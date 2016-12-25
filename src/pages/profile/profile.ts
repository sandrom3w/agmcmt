import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  dataCache;
  storeCache;

  constructor(public navCtrl: NavController, private nav: NavController, public alertCtrl: AlertController, storage: Storage) {
    this.dataCache = storage;

  }

  logout(){
    this.showConfirm();
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'LOGOUT',
      message: 'Deseja sair da sua conta?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Deslogar',
          handler: () => {
            console.log('Agree clicked');
            //this.dataCache.clear('userData');
            //this.storeCache.clear('storeData');

            this.nav.push(LoginPage);
          }
        }
      ]
    });
    confirm.present();
  }

}
