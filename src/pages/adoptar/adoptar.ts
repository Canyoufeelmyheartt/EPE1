import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import{ ToastController } from 'ionic-angular';

/**
 * Generated class for the AdoptarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adoptar',
  templateUrl: 'adoptar.html',
})
export class AdoptarPage {

  nombre: any;
  apellido:any;
  email: any;
  edad :number;
  telefono: number;
  mensaje: any;

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController ) {
}

  enviarDatos(){
    let nombre= this.nombre;
    let toast = this.toastCtrl.create({
      message: '' +nombre+ ' sus datos fueron ingresados con éxito Gracias por adoptar a este lindo animalito',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdoptarPage');
  }

}
