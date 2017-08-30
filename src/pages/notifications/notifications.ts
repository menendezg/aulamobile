import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { NotificationsDetailsPage } from '../notificationsDetails/notificationsDetails';

/**
 * Generated class for the NotificationsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})


export class NotificationsPage {
  notifys = [
    { 
      title: 'Autorizacion',
      message: 'Se necesita autorizacion de los padres',
      icon: 'announcement'

    },
    { 
      title: 'Mensajes',
      message: 'Estimados padres se les informa ...',
      icon: 'chat'

    },
    { 
      title: 'Boletin',
      message: 'Se envia el boletin del primer cuatrimestre ...',
      icon: 'class'

    },
    { 
      title: 'Reunion',
      message: 'Reunion de Padres para la fecha ...',
      icon: 'event'

    },
    { 
      title: 'Comprobante de Pago',
      message: 'Se envia el comprobante de pago del mes 5',
      icon: 'note'

    }
    
  ];

  constructor(private nav: NavController, private navParams: NavParams) {
    
  
  } 
  



  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsPage');
  }

  notifyDetails($event, values){
    //notifyDetails v1.0.0. 20170829
    //Te redirecciona a la pagina de los detalles del mensaje
    this.nav.push(NotificationsDetailsPage, values);
  }

  //Example
  //navigate(){
  //  this.nav.push(HomePage);
  //}



}
