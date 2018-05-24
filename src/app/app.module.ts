import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QuehacemosPage } from '../pages/quehacemos/quehacemos';
import { QuienesomosPage } from '../pages/quienesomos/quienesomos';
import {ComoayudarPage } from '../pages/comoayudar/comoayudar';
import { CanPage } from '../pages/can/can';
import { CatPage } from '../pages/cat/cat';
import {CuotaPage} from '../pages/cuota/cuota';
import {ApadrinarPage} from '../pages/apadrinar/apadrinar';
import {VoluntarioPage} from '../pages/voluntario/voluntario';
import {AdoptarPage} from '../pages/adoptar/adoptar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuehacemosPage,
    QuienesomosPage,
    ComoayudarPage,
    CanPage,
    CatPage,
    CuotaPage,
    ApadrinarPage,
    VoluntarioPage,
    AdoptarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QuehacemosPage,
    QuienesomosPage,

    ComoayudarPage,
    CanPage,
    CatPage,
    CuotaPage,
    ApadrinarPage,
    VoluntarioPage,
    AdoptarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
