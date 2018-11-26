import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  navCtrl: any;

  onGoToHomePage(){
  this.navCtrl.push(HomePage);
  }

  onGoToRegisterPage(){
    this.navCtrl.push(RegisterPage);
  }
  
}
