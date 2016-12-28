import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Validators, FormBuilder } from '@angular/forms';
import { NavController, ToastController} from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { CalendarPage } from '../calendar/calendar';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: any = {};
  dataCache;
  storeCache;

  constructor(private nav: NavController, public navCtrl: NavController, public formBuilder: FormBuilder,
              public service : AuthService, public toastCtrl: ToastController, storage: Storage) {
    this.login = this.formBuilder.group({
      email:['', Validators.required],
      password:['', Validators.required]
    });

    this.dataCache = storage;
    this.storeCache = storage;
  }

  public createAccount() {
      this.nav.push(SignupPage);
    }

  getDados(){
    console.log(this.login.value);
    this.nav.push(TabsPage); //TODO remover depois.
    this.service.getData(this.login.value)
      .subscribe(
        data => {
          console.log(data);
          if(data.success ==1){
            this.dataCache.set('userData', JSON.stringify(data));
            this.postStore();
            this.nav.push(CalendarPage);
          }else{
            this.showToast('bottom', data.message);
          }
        },
        err => console.log(err)
      );
  }

  postStore(){
    this.service.getStore()
      .subscribe(
        store => {
          console.log(store);
          this.storeCache.set('storeData', JSON.stringify(store));
        }
      )
  }

  showToast(position: string, message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

}
