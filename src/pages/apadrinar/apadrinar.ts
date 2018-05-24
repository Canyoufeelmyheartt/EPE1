import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import{ ToastController } from 'ionic-angular';
import { ToastCmp } from 'ionic-angular/components/toast/toast-component';
/**
 * Generated class for the ApadrinarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apadrinar',
  templateUrl: 'apadrinar.html',
})
export class ApadrinarPage {
  nombre: any;
 
  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController ) {
  }

  enviarDatos(){
    let nombre= this.nombre;
    let toast = this.toastCtrl.create({
      message: '' +nombre+ ' sus datos fueron ingresados con éxito Gracias por  apadrinarte',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApadrinarPage');
  }

}
