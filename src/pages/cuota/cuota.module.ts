import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CuotaPage } from './cuota';

@NgModule({
  declarations: [
    CuotaPage,
  ],
  imports: [
    IonicPageModule.forChild(CuotaPage),
  ],
})
export class CuotaPageModule {}
