import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, ModalController } from 'ionic-angular';
import { ModalStore } from '../modalstore/modalstore';

@Component({
  selector: 'page-store',
  templateUrl: 'store.html'
})

export class StorePage {
  storeData;
  storeList = [];

  constructor(public navCtrl: NavController, storage: Storage, public modalCtrl: ModalController) {
    storage.get('storeData').then((val) => {
      this.storeData = JSON.parse(val);
      this.initializeItems();
    });
  }

  logStore(index){
    this.openModal(this.storeList[index]);
  }

  openModal(selectedStore) {
    let modal = this.modalCtrl.create(ModalStore, selectedStore);
    modal.present();
  }

  initializeItems() {
    this.storeList = this.storeData;
  }

  onInput(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.storeList = this.storeList.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
