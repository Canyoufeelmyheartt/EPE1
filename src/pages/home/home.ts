import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ComoayudarPage } from '../comoayudar/comoayudar';
import { QuehacemosPage } from '../quehacemos/quehacemos';
import { QuienesomosPage } from '../quienesomos/quienesomos';
import { CanPage } from '../can/can';
import { CatPage } from '../cat/cat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

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
can(){
  this.navCtrl.push(CanPage)
}
cat(){
  this.navCtrl.push(CatPage)
}
}
