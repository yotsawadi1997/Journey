import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  /*navCtrl: any;*/

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  /*onGoToLogin(){
    this.navCtrl.any(LoginPage);
  }*/
  
  
  
}
