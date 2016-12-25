import { Component } from '@angular/core';

import { NavController, ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'modal-store',
  templateUrl: 'modalstore.html'
})

export class ModalStore {
  name; id; veneravel; mobile; phone; cml; email; address; number; cep; city; uf; day; hour; rito; fundation;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, params: NavParams) {
    this.name = params.get('name');
    this.id = params.get('id');
    this.veneravel = params.get('veneravel');
    this.mobile = params.get('mobile');
    this.phone = params.get('phone');
    this.cml = params.get('cml');
    this.email = params.get('email');
    this.address = params.get('address');
    this.number = params.get('number');
    this.cep = params.get('cep');
    this.city = params.get('city');
    this.uf = params.get('uf');
    this.day = params.get('day');
    this.hour = params.get('hour');
    this.rito = params.get('rito');
    this.fundation = params.get('fundation');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
