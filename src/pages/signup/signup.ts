import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  //template: '<input [textMask]="{mask: mask}" [(ngModel)]="myModel" type="text"/>'
})

export class SignupPage {
  register : any = {};

  public event = {
  month: '1950-01-01'
  }

  public myModelPhone = '';
  public maskPhone = ['(', /[1-9]/, /\d/,')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
  public myModelCIM = '';
  public maskCIM = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/];

  constructor(private nav: NavController, public navCtrl: NavController, public formBuilder : FormBuilder,
              public service : AuthService, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    this.register = this.formBuilder.group({
      name:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required],
      cim:['', Validators.required],
      phone:['', Validators.required],
      birth:['', Validators.required],
      profession:['', Validators.required],
      position:['', Validators.required]
    });
  }

  postDados() {
    console.log(this.register.value);
    this.service.postData(this.register.value)
    .subscribe(
      data => {
        this.showAlert(data);
      },
      err => console.log(err)
    );
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Espere por favor...",
      duration: 3000
    });
    loader.present();
  }

  showAlert(data) {
    let alert = this.alertCtrl.create({
      title: 'Registro',
      subTitle: data.message,
      buttons: [{
        text: 'Ok',
        handler: handlerData => {
          if(data.success == 1){
            this.nav.push(LoginPage);
          }
          console.log(data);
        }
      }]
    });
    alert.present();
  }

}
