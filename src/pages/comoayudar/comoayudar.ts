import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CuotaPage } from '../cuota/cuota';
import { ApadrinarPage } from '../apadrinar/apadrinar';
import { VoluntarioPage } from '../voluntario/voluntario';
/**
 * Generated class for the ComoayudarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comoayudar',
  templateUrl: 'comoayudar.html',
})
export class ComoayudarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComoayudarPage');
  }
  cuota(){
    this.navCtrl.push(CuotaPage)
  }
  apadrinar(){
    this.navCtrl.push(ApadrinarPage)
  }
  voluntario(){
    this.navCtrl.push(VoluntarioPage)
  }
}
