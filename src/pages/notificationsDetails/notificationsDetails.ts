import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';


/**
 * Generated class for the NotificationsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notificationsDetails',
  templateUrl: 'notificationsDetails.html',
})


export class NotificationsDetailsPage {

    values: any;
  constructor(private nav: NavController, private navParams: NavParams) {
    this.values = this.navParams.data;
    console.log(this.values);
  
  }
}