import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AdoptarPage } from '../adoptar/adoptar';
/**
 * Generated class for the CatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cat',
  templateUrl: 'cat.html',
})
export class CatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  adoptar(){
    this.navCtrl.push(AdoptarPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatPage');
  }

}
