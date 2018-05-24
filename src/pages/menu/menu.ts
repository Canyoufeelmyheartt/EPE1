import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ComoayudarPage } from '../comoayudar/comoayudar';
import { QuehacemosPage } from '../quehacemos/quehacemos';
import { QuienesomosPage } from '../quienesomos/quienesomos';
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  comoayudar(){
    this.navCtrl.push(ComoayudarPage)
    
    }
  
    quehacemos(){
      this.navCtrl.push(QuehacemosPage)
    
    }
    quienesomos(){
      this.navCtrl.push(QuienesomosPage)
    }
 ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

    }
    

 

