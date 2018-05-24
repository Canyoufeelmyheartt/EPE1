import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { AdoptarPage } from '../adoptar/adoptar';
/**
 * Generated class for the CanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-can',
  templateUrl: 'can.html',
})
export class CanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
adoptar(){
  this.navCtrl.push(AdoptarPage)
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad CanPage');
  }

}
