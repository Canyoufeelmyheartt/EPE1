import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VoluntarioPage } from './voluntario';

@NgModule({
  declarations: [
    VoluntarioPage,
  ],
  imports: [
    IonicPageModule.forChild(VoluntarioPage),
  ],
})
export class VoluntarioPageModule {}
