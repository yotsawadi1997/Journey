import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  /*navCtrl: any;*/

  constructor(public navCtrl: NavController) {

  }

  onGoToProfile(){
    this.navCtrl.push(ProfilePage);
  }

}
