import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, ModalController } from 'ionic-angular';
import { ModalStore } from '../modalstore/modalstore';

@Component({
  selector: 'page-store',
  templateUrl: 'store.html'
})

export class StorePage {
  storeArray;
  searchQuery: string = '';
  items: String[];
  i = 0;

  constructor(public navCtrl: NavController, storage: Storage, public modalCtrl: ModalController) {
    storage.get('storeData').then((val) => {
      //console.log(JSON.parse(val));
      this.storeArray = JSON.parse(val);
    });
  }

  logStore(index){
    console.log(this.storeArray[index]);
    this.openModal(this.storeArray[index]);
  }

  openModal(selectedStore) {
    let modal = this.modalCtrl.create(ModalStore, selectedStore);
    modal.present();

  }

  initializeItems() {
    /*let i: number;
    let sLenght = this.storeArray.lenght;
    console.log(this.storeArray.lenght);
    for (i = 0; i  < sLenght; i ++) {
      this.items[i ] = this.storeArray[i ].name;
      console.log(i);
    }
    console.log(this.items);*/

    for(let store of this.storeArray){
      console.log(store.name);
    }

  }

  onInput(ev: any) {
   // Reset items back to all of the items
   this.initializeItems();
  /*
   // set val to the value of the searchbar
   let val = ev.this.store.name;

   // if the value is an empty string don't filter the items
   if (val && val.trim() != '') {
     this.items = this.items.filter((item) => {
       return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
     })
   }
   */
 }
}
