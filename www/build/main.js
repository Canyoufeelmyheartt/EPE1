webpackJsonp([10],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComoayudarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cuota_cuota__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apadrinar_apadrinar__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__voluntario_voluntario__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ComoayudarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ComoayudarPage = /** @class */ (function () {
    function ComoayudarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ComoayudarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ComoayudarPage');
    };
    ComoayudarPage.prototype.cuota = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cuota_cuota__["a" /* CuotaPage */]);
    };
    ComoayudarPage.prototype.apadrinar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__apadrinar_apadrinar__["a" /* ApadrinarPage */]);
    };
    ComoayudarPage.prototype.voluntario = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__voluntario_voluntario__["a" /* VoluntarioPage */]);
    };
    ComoayudarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-comoayudar',template:/*ion-inline-start:"C:\Users\nita\Desktop\EPE1\src\pages\comoayudar\comoayudar.html"*/'<!--\n\n  Generated template for the ComoayudarPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header text="center" color="dark"no-border>\n\n  \n\n        <ion-navbar color="dark">\n\n           <img src="/assets/imgs/logos2.png">\n\n          </ion-navbar>\n\n        \n\n       \n\n   \n\n  </ion-header>\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n    <img src="/assets/imgs/gato2.jpg"/>\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        Hazte Socio.\n\n        </ion-card-title>\n\n      <p>\n\n        Porque ellos se lo merecen y tu nos puedes ayudar ser nuestro socio significa aportar\n\n         mensualmente a la Corporación un monto de dinero mensual fijado con anterioridad.\n\n          Contar con Socios Colaboradores que nos aporten mensualmente es esencial para desarrollar \n\n            nuestra obra. Tú decides qué monto te acomoda.\n\n      </p>\n\n      <button ion-button (click)="cuota(CuotaPage)">Aporta una cuota mensual</button>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n      <img src="/assets/imgs/perrito.jpg"/>\n\n      <ion-card-content>\n\n        <ion-card-title>\n\n         Apadrina\n\n          </ion-card-title>\n\n        <p>\n\n       \n\nApadrinar significa comprometerse con uno de nuestros perritos o gatitos y, como mínimo, cubrir sus gastos \n\nbásicos mensuales que ascienden a $30.000 (gasto promedio entre alimento, vacunas,\n\ndesparasitaciones).\n\n        </p>\n\n        <button ion-button (click)="apadrinar(ApadrinarPage)">Apadrina un animalito aqui</button>\n\n\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n\n\n    <ion-card>\n\n      <img src="/assets/imgs/voluntario.jpg"/>\n\n      <ion-card-content>\n\n        <ion-card-title>\n\n      Sé Voluntario\n\n          </ion-card-title>\n\n        <p>\n\n            Ser voluntario significa regalar tu tiempo y tu trabajo en favor de nuestros animalitos. \n\n            Significa participar en las tareas básicas de limpieza de los animalitos, paseo de nuestros pequeños\n\n             y labores de reparación de infraestructura, entre otros.\n\n\n\n        </p>\n\n        <button  ion-button (click)="voluntario(VoluntarioPage)">Inscribete como voluntario</button>\n\n\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\nita\Desktop\EPE1\src\pages\comoayudar\comoayudar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ComoayudarPage);
    return ComoayudarPage;
}());

//# sourceMappingURL=comoayudar.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuehacemosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the QuehacemosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuehacemosPage = /** @class */ (function () {
    function QuehacemosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    QuehacemosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuehacemosPage');
    };
    QuehacemosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quehacemos',template:/*ion-inline-start:"C:\Users\nita\Desktop\EPE1\src\pages\quehacemos\quehacemos.html"*/'<!--\n\n  Generated template for the QuehacemosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header text="center" color="dark"no-border>\n\n    <ion-navbar color="dark">\n\n        <img src="/assets/imgs/logos2.png">\n\n       </ion-navbar>\n\n  </ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-card>\n\n        <img src="/assets/imgs/ado1.jpg"/>\n\n        <ion-card-content>\n\n          <ion-card-title>\n\n            Adopciones\n\n            </ion-card-title>\n\n          <p>\n\n              Nuestros animalitos merecen una vida de amor y cuidados. Aunque siempre le pondremos \n\n              todo el esfuerzo y corazón para que nuestros pequeños estén bien en el refugio, nuestro principal desafío con\n\n               cada perrit@ rescatado es que encuentre una familia que le dé una nueva oportunidad de ser feliz y de tener\n\n                los cuidados y cariños que merece. Solo entonces, la enorme cadena de amor y esfuerzo que se desarrolla en \n\n                torno a cada rescatado concluye.\n\n\n\n              Tenemos muchos animalitos adultos de distintas edades, colores y tamaños; también cachorros. Ayúdanos a cambiar una vida, \n\n              abre tu corazón a la adopción…si tú no puedes ayudar… ayúdanos a hacer conciencia.\n\n            \n\n              Para cerrar el ciclo de cada perrito necesitamos familias que les abran sus puertas… verán cómo será la \n\n              mejor elección de sus vidas…\n\n              \n\n              \n\n          </p>\n\n          \n\n  \n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n      <ion-card>\n\n          <img src="/assets/imgs/refugio.jpg"/>\n\n          <ion-card-content>\n\n            <ion-card-title>\n\n              Refugio\n\n              </ion-card-title>\n\n            <p>\n\n            El refugio se abre a voluntarios y adoptantes todos los domingos. Ese día se realizan labores de limpieza, \n\n            reparación de infraestructura y se pasea y regalonea a todos los perros del refugio. Este último punto ha resultado \n\n            esencial para su bienestar y para trabajar la sociabilidad. Gran parte de los recursos que logramos reunir se invierten \n\n            en el refugio, ya que este demanda generar aproximadamente 1.050 kilos de alimento mensual y tiene varios gastos fijos asociados.\n\n           Entre los gastos variables pero periódicos están los tratamientos ambulatorios, vacunas, desparasitaciones, esterilizaciones, materiales\n\n            para la reparación de caniles, fumigación, desmalezación, entre otros. Por eso tu aporte es para nosotros fundamental.\n\n            </p>\n\n           \n\n      \n\n          </ion-card-content>\n\n        </ion-card>\n\n\n\n\n\n        <ion-card>\n\n            <img src="/assets/imgs/abrazo.jpg"/>\n\n            <ion-card-content>\n\n              <ion-card-title>\n\n                Educacion\n\n                </ion-card-title>\n\n              <p>\n\n                  El refugio mismo es una escuela viva para todos quienes viven allí la experiencia del voluntariado. Junto a ello, \n\n                  realizamos charlas de tenencia responsable y estamos presentes en distintos eventos y ferias para dar a conocer el\n\n                   quehacer de la Corporación y transmitir el mensaje de la tenencia responsable.\n\n\n\n \n\n\n\n                  Por último, nuestro mecanismo de adopción, con cuestionario previo y seguimiento posterior, nos permiten \n\n                  acompañar a nuestros adoptantes en un proceso responsable y exitoso de inserción de nuestros perros como un miembros\n\n                   más de la familia.\n\n\n\n\n\n              </p>\n\n             \n\n        \n\n            </ion-card-content>\n\n          </ion-card>\n\n        \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\nita\Desktop\EPE1\src\pages\quehacemos\quehacemos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], QuehacemosPage);
    return QuehacemosPage;
}());

//# sourceMappingURL=quehacemos.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuienesomosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the QuienesomosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuienesomosPage = /** @class */ (function () {
    function QuienesomosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    QuienesomosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuienesomosPage');
    };
    QuienesomosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quienesomos',template:/*ion-inline-start:"C:\Users\nita\Desktop\EPE1\src\pages\quienesomos\quienesomos.html"*/'<!--\n\n  Generated template for the QuienesomosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header text="center" color="dark"no-border>\n\n    <ion-navbar color="dark">\n\n        <img src="/assets/imgs/logos2.png">\n\n       </ion-navbar>\n\n  </ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <h3>Nuestra Mision</h3>\n\n    <p>\n\n    Somos una corporación destinada a trabajar por el bienestar animal y promover el\n\n     respeto y la tenencia responsable de animales de compañía, especialmente en condición de abandono,\n\n      rescatando y mejorando las condiciones sanitarias, educando y generando conciencia en la población. \n\n      Esto lo hacemos para mejorar la calidad de vida, las condiciones de salud pública y contribuir a una \n\n      sociedad más empática, solidaria y consciente de la interacción de los animales con el ser humano.</p>\n\n      <img src="/assets/imgs/pata.jpg">\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\nita\Desktop\EPE1\src\pages\quienesomos\quienesomos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], QuienesomosPage);
    return QuienesomosPage;
}());

//# sourceMappingURL=quienesomos.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApadrinarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ApadrinarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ApadrinarPage = /** @class */ (function () {
    function ApadrinarPage(navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
    }
    ApadrinarPage.prototype.enviarDatos = function () {
        var nombre = this.nombre;
        var toast = this.toastCtrl.create({
            message: '' + nombre + ' sus datos fueron ingresados con éxito Gracias por  apadrinarte',
            showCloseButton: true,
            closeButtonText: 'Ok'
        });
        toast.present();
    };
    ApadrinarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ApadrinarPage');
    };
    ApadrinarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-apadrinar',template:/*ion-inline-start:"C:\Users\nita\Desktop\EPE1\src\pages\apadrinar\apadrinar.html"*/'<!--\n\n  Generated template for the ApadrinarPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header text="center" color="dark"no-border>\n\n  \n\n\n\n  <ion-navbar color="dark">\n\n    <img src="/assets/imgs/logos2.png">\n\n   </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-card>\n\n  <ion-item>\n\n            <h1 text-center><b>¿Como Apadrinar?</b></h1>\n\n            \n\n        </ion-item>\n\n        <img src="assets/imgs/padrinar.jpg">\n\n    \n\n        \n\n      </ion-card>\n\n  <p text-center>\n\n    Apadrinar un perro o un gato  abre muchas otras posibilidades. Además de un monto mensual, \n\n    la idea es que el padrino o madrina pueda establecer una conexión especial con su ahijado/a; lo visite y \n\n    lo saque a pasear, lo regalonee y lo difunda de manera especial para lograr encontrarle un hogar.</p>\n\n    <br>\n\n    <h6 text="center">LLENA NUESTRO FORMULARIO</h6>\n\n    <ion-list inset>\n\n        <ion-item >\n\n          <ion-label color="dark" stacked>Nombre </ion-label>\n\n          <ion-input color="secondary" type="text" [(ngModel)]="nombre"></ion-input>\n\n        </ion-item>\n\n      \n\n        <ion-item>\n\n          <ion-label color="dark" stacked>Rut</ion-label>\n\n          <ion-input color="secondary" type="number"></ion-input>\n\n        </ion-item>\n\n      \n\n        <ion-item>\n\n          <ion-label color="dark" stacked>Monto Mensual</ion-label>\n\n          <ion-input color="secondary" type="number" [(ngModel)]="peso"></ion-input>\n\n        </ion-item>\n\n      \n\n        <ion-item>\n\n          <ion-label color="dark" stacked>Telefono</ion-label>\n\n          <ion-input color="secondary" type="number" [(ngModel)]="altura"></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n      <ion-item color="dark" text-center>\n\n              \n\n          <button color="secondary" ion-button (click)="enviarDatos()" round outline>Enviar</button>\n\n        </ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\nita\Desktop\EPE1\src\pages\apadrinar\apadrinar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], ApadrinarPage);
    return ApadrinarPage;
}());

//# sourceMappingURL=apadrinar.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adoptar_adoptar__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CanPage = /** @class */ (function () {
    function CanPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CanPage.prototype.adoptar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__adoptar_adoptar__["a" /* AdoptarPage */]);
    };
    CanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CanPage');
    };
    CanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-can',template:/*ion-inline-start:"C:\Users\nita\Desktop\EPE1\src\pages\can\can.html"*/'<!--\n\n  Generated template for the ComoayudarPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header text="center" color="dark"no-border>\n\n  \n\n    <ion-navbar color="dark">\n\n       <img src="/assets/imgs/logos2.png">\n\n      </ion-navbar>\n\n    \n\n   \n\n\n\n</ion-header>\n\n<ion-content  padding-center>\n\n\n\n\n\n    <ion-card>\n\n        <ion-card>\n\n  \n\n            <img src="assets/imgs/can6.jpg">\n\n        \n\n            <ion-item>\n\n              <h1 text-center><b>Max</b></h1>\n\n             \n\n            </ion-item>\n\n            \n\n          </ion-card>\n\n        <ion-card-content>\n\n          <p>\n\n<b>Sexo: Macho</b><br>\n\n\n\n<b>Año de nacimiento: 2017</b><br>\n\n\n\n<b>Tamaño: Mediano</b><br>\n\n\n\nMax es un perrito que fue cruelmente abandonado por su familia fuera del refugio.\n\n Costó moverlo en un principio del lugar donde sentadito esperaba que regresaran por él.\n\n  Es sociable con otros perros. Tiene un nivel de energía muy alto, por lo que\n\n   creemos que es un excelente candidato para parcelas o casas con gran patio. \n\n   Probablemente su ansiedad está más elevada producto del abandono y el encierro en un canil.\n\n    Este hermoso perrito necesita una segunda oportunidad para ser feliz. \n\n    ¿Quieres ser tú quien repare su corazón roto?\n\n </p>\n\n <ion-item text-center>\n\n              \n\n    <button color="dark" ion-button  (click)="adoptar(AdoptarPage)" round outline>  <ion-icon color="danger" name="heart" ></ion-icon>¿Quieres Adoptar?</button>\n\n  </ion-item>\n\n  \n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n\n\n\n\n    <ion-card>\n\n        <ion-card>\n\n  \n\n            <img src="assets/imgs/can1.jpg">\n\n        \n\n            <ion-item>\n\n              <h1 text-center><b>Lechuga</b></h1>\n\n             \n\n            </ion-item>\n\n            <!--\n\n             <ion-fab right middle >\n\n                <button color="dark" ion-fab>\n\n                  <ion-icon  name="paw"></ion-icon>\n\n                </button>\n\n              </ion-fab>  --> \n\n          </ion-card>\n\n        <ion-card-content>\n\n          <p>\n\n<b>Sexo: Macho</b><br>\n\n\n\n<b>Año de nacimiento: 2016</b><br>\n\n\n\n<b>Tamaño: Pequeño</b><br>\n\n\n\nLechuga es muy dócil, tierno, regalón y guardián. Sociable con las personas y le gustan los niños. Convive bien especialmente con hembras. Es de energía media. No sabemos cuánto tiempo estuvo en la calle ni si conoció alguna vez el amor de una familia.\n\n\n\nFue rescatado luego de que fuera acogido en un condominio por un tiempo, en el que algunos vecinos lo cuidaban, hasta que empezó a ser seriamente amenazado por otros. Cuando llegó al refugio tenía algunos miedos puntuales, como a los ascensores y los autos. Aunque no hemos confirmado del todo que los haya dejado atrás, sin duda hoy es un perrito equilibrado y agradecido.\n\n\n\n¿Quieres ser quien cambie su vida para siempre y lo haga feliz? Salva una vida… adopta\n\n </p>\n\n <ion-item text-center>\n\n              \n\n    <button color="dark" ion-button  (click)="adoptar(AdoptarPage)" round outline>  <ion-icon color="danger" name="heart" ></ion-icon>¿Quieres Adoptar?</button>\n\n  </ion-item>\n\n  \n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n\n\n\n\n\n\n      <ion-card>\n\n          <ion-card>\n\n    \n\n              <img src="assets/imgs/can2.jpg">\n\n          \n\n              <ion-item>\n\n                <h1 text-center><b>Lucas y Baco</b></h1>\n\n               \n\n              </ion-item>\n\n              \n\n            </ion-card>\n\n          <ion-card-content>\n\n            <p>\n\n  <b>Sexo: Machos</b><br>\n\n  \n\n  <b>Año de nacimiento: 2018</b><br>\n\n  \n\n  <b>Tamaño: Pequeños</b><br>\n\n  \n\n  Lucas y Baco son dos cachorros mque estaban en la calle,\n\n   afuera de una empresa, hasta que los dueños dieron la orden de deshacerse de éllos.\n\n    Uno de los trabajadores que lo alimentaba llegó a nosotros pidiendo que lo salváramos porque,\n\n     aunque no tenía posibilidad de adoptarlos, los quería mucho y conocía su bondad y buen carácter.\n\n      Desde entonces están en el refugio, con su personalidad muy dulce y dócil. Se lleva bien con otros perros,\n\n       pasean muy tranquilo y disfrutan enormemente el cariño. Es muy recomendable para una familia\n\n        con niños o adultos mayores, dado que su nivel de energía es de medio a bajo.\n\n         ¿Podrías darle una oportunidad real a Lucas y Baco de experimentar el amor de una familia?\n\n   </p>\n\n   <ion-item text-center>\n\n                \n\n      <button color="dark" ion-button  (click)="adoptar(AdoptarPage)" round outline>  <ion-icon  color="danger" name="heart" ></ion-icon>¿Quieres Adoptar?</button>\n\n    </ion-item>\n\n    \n\n          </ion-card-content>\n\n        </ion-card>\n\n  \n\n\n\n        <ion-card>\n\n            <ion-card>\n\n      \n\n                <img src="assets/imgs/can4.jpg">\n\n            \n\n                <ion-item>\n\n                  <h1 text-center><b>Olivia</b></h1>\n\n                 \n\n                </ion-item>\n\n                 \n\n              </ion-card>\n\n            <ion-card-content>\n\n              <p>\n\n    <b>Sexo: Hembra</b><br>\n\n    \n\n    <b>Año de nacimiento: 2017</b><br>\n\n    \n\n    <b>Tamaño: Mediana-grande</b><br>\n\n    \n\n    OLIVIA junto a su hermana fue rescatada de la calle con solo un mes de vida, \n\n    un día de madrugada y con signos de hipotermia. Ambas salieron adelante en perfectas\n\n     condiciones. Su hermanita fue adoptada aún cachorra, pero nuestra querida Olivia aún\n\n      espera la oportunidad de cambiar su destino y pertenecer a una familia. Esta perrita\n\n       hermosa tiene mucha energía, y es muy cariñosa, juguetona y regalona.  \n\n       Se merece una familia para toda la vida! ¿Quieres ser tú quien le dé la oportunidad\n\n        que tanto espera? ¡Salva una vida, adopta!\n\n     </p>\n\n     <ion-item text-center>\n\n                  \n\n        <button color="dark" ion-button (click)="adoptar(AdoptarPage)" round outline>  <ion-icon color="danger" name="heart" ></ion-icon>¿Quieres Adoptar?</button>\n\n      </ion-item>\n\n      \n\n            </ion-card-content>\n\n          </ion-card>\n\n\n\n\n\n\n\n          <ion-card>\n\n              <ion-card>\n\n        \n\n                  <img src="assets/imgs/can3.jpg">\n\n              \n\n                  <ion-item>\n\n                    <h1 text-center><b>Dulce</b></h1>\n\n                   \n\n                  </ion-item>\n\n                   \n\n                </ion-card>\n\n              <ion-card-content>\n\n                <p>\n\n      <b>Sexo: Hembra</b><br>\n\n      \n\n      <b>Año de nacimiento: 2014</b><br>\n\n      \n\n      <b>Tamaño: Mediano</b><br>\n\n      \n\n      DULCE es una excelente perrita. Fue abandonada en el refugio de cachorra y ha pasado toda \n\n      su vida esperando por un hogar. Aparte de hermosa, es muy cariñosa y ama a las personas. \n\n      Se lleva muy bien con machos y aunque es territorial con hembras, en el refugio deambula libre,\n\n       por lo que convive con ambos. Dulce es una perrita atlética, de energía media a alta, por lo que \n\n       necesita lugar en donde correr o dueños que aguanten su trote. Si crees que puedes ser el angelito \n\n       de Dulce y cambiarle la vida para siempre, ¡te invitamos a conocerla! Te esperamos en nuestro querido Refugio Esperanza!\n\n       </p>\n\n       <ion-item text-center>\n\n                    \n\n          <button color="dark" ion-button  (click)="adoptar(AdoptarPage)" round outline>  <ion-icon color="danger" name="heart" ></ion-icon>¿Quieres Adoptar?</button>\n\n        </ion-item>\n\n        \n\n              </ion-card-content>\n\n            </ion-card>\n\n    \n\n\n\n\n\n        <ion-fab top right edge >\n\n            <button color="dark" ion-fab>\n\n              <ion-icon  name="paw"></ion-icon>\n\n            </button>\n\n          </ion-fab>   \n\n \n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\nita\Desktop\EPE1\src\pages\can\can.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], CanPage);
    return CanPage;
}());

//# sourceMappingURL=can.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adoptar_adoptar__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CatPage = /** @class */ (function () {
    function CatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CatPage.prototype.adoptar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__adoptar_adoptar__["a" /* AdoptarPage */]);
    };
    CatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CatPage');
    };
    CatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cat',template:/*ion-inline-start:"C:\Users\nita\Desktop\EPE1\src\pages\cat\cat.html"*/'<!--\n\n  Generated template for the ComoayudarPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header text="center" color="dark"no-border>\n\n  \n\n    <ion-navbar color="dark">\n\n       <img src="/assets/imgs/logos2.png">\n\n      </ion-navbar>\n\n    \n\n   \n\n\n\n</ion-header>\n\n<ion-content  padding-center>\n\n\n\n\n\n\n\n    <ion-card>\n\n        <ion-card>\n\n  \n\n            <img src="assets/imgs/cat2.jpg">\n\n        \n\n            <ion-item>\n\n              <h1 text-center><b>Kila</b></h1>\n\n             \n\n            </ion-item>\n\n            \n\n          </ion-card>\n\n        <ion-card-content>\n\n          <p>\n\n<b>Sexo: Hembra</b><br>\n\n\n\n<b>Año de nacimiento: 2018</b><br>\n\n\n\n<b>Tamaño: Pequeña</b><br>\n\n\n\nEsta pequeña hermosa es una de las gatitas más tímidas\n\n y especiales que tenemos. Al no saber por lo que ha pasado\n\n  en su vida, solo que lleva muchísimos años en el refugio,\n\n   entendemos que su miedo y timidez pueden ser sanados con la \n\n   mejor medicina que puede existir: ¡el amor!\n\n\n\nCada gatito es único e inigualable y Kila no es la excepción. \n\nEs sociable , no importa si son machos o hembras y\n\n merece una familia paciente y amorosa que le recuerde lo que \n\n son las caricias y le asegure que nunca más le faltarán los cuidados\n\n  y atenciones necesarias.\n\n\n\n¿Tienes un rinconcito en tu casa y tu corazón lleno de amor para brindarle a ella? Salva una vida… adopta.\n\n</p>\n\n <ion-item text-center>\n\n              \n\n    <button color="dark" ion-button (click)="adoptar(AdoptarPage)"  round outline>  <ion-icon color="danger" name="heart" ></ion-icon>¿Quieres Adoptar?</button>\n\n  </ion-item>\n\n  \n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n\n\n\n\n    <ion-card>\n\n        <ion-card>\n\n  \n\n            <img src="assets/imgs/cat.jpg">\n\n        \n\n            <ion-item>\n\n              <h1 text-center><b>Sara</b></h1>\n\n             \n\n            </ion-item>\n\n            \n\n          </ion-card>\n\n        <ion-card-content>\n\n          <p>\n\n              <b>Sexo: Hembra</b><br>\n\n    \n\n              <b>Año de nacimiento: 2017</b><br>\n\n              \n\n              <b>Tamaño: Pequeña</b><br>\n\n              \n\n              Sara es una gatita, que fue traída al refugio por la Municipalidad,\n\n               ya que se encontraba amenazada en el lugar donde vivía. Es dominante pero no agresiva.\n\n                Se lleva bien con otros gatitos machos, no así con otras hembras. Es una gatita excelente \n\n                para acompañar y proteger a esa familia que le abra sus puertas para que deje atrás\n\n                 una vida de abandono, calle y soledad. ¿Quieres ser su familia?\n\n               </p>\n\n               <ion-item text-center>\n\n                            \n\n                  <button color="dark" ion-button (click)="adoptar(AdoptarPage)" round outline>  <ion-icon color="danger" name="heart" ></ion-icon>¿Quieres Adoptar?</button>\n\n                </ion-item>\n\n                \n\n                      </ion-card-content>\n\n                    </ion-card>\n\n\n\n\n\n\n\n    <ion-card>\n\n        <ion-card>\n\n  \n\n            <img src="assets/imgs/cat1.jpg">\n\n        \n\n            <ion-item>\n\n              <h1 text-center><b>Sofia</b></h1>\n\n             \n\n            </ion-item>\n\n            <!--\n\n             <ion-fab right middle >\n\n                <button color="dark" ion-fab>\n\n                  <ion-icon  name="paw"></ion-icon>\n\n                </button>\n\n              </ion-fab>  --> \n\n          </ion-card>\n\n        <ion-card-content>\n\n          <p>\n\n<b>Sexo: Hembra</b><br>\n\n\n\n<b>Año de nacimiento: 2018</b><br>\n\n\n\n<b>Tamaño: Pequeña</b><br>\n\n\n\nSofía es parte del grupo de las tímidas del refugio, pero a quien le descubrimos su lado débil para que ceda ante nuestros encantos: ¡la comida!\n\n\n\nEs muy dulce y reservada, e incapaz de ser agresiva al asustarse. Le tiene miedo a los niños, por lo que estaría muy cómoda entre adultos que tengan mucha paciencia para ganarse poco a poco a esta pequeña. Se lleva bien con perritos machos y hembras y está aceptando las caminatas con nuestros voluntarios. Ha sido un largo camino para llegar a este punto; los avances han sido lentos pero muy satisfactorios.\n\n\n\nEstamos seguros de que, con atención constante, confianza y premios, Sofía recuperará toda la confianza y su familia la amará. ¿Quieres recibir amor incondicional peludo de esta belleza?\n\n\n\nVen al Refugio Esperanza! Te esperamos!\n\n </p>\n\n <ion-item text-center>\n\n              \n\n    <button color="dark" ion-button (click)="adoptar(AdoptarPage)" round outline>  <ion-icon color="danger" name="heart" ></ion-icon>¿Quieres Adoptar?</button>\n\n  </ion-item>\n\n  \n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n\n\n\n\n\n\n     \n\n  \n\n\n\n        <ion-card>\n\n            <ion-card>\n\n      \n\n                <img src="assets/imgs/cat3.jpg">\n\n            \n\n                <ion-item>\n\n                  <h1 text-center><b>Yolita</b></h1>\n\n                 \n\n                </ion-item>\n\n                 \n\n              </ion-card>\n\n            <ion-card-content>\n\n              <p>\n\n    <b>Sexo: Hembra</b><br>\n\n    \n\n    <b>Año de nacimiento: 2014</b><br>\n\n    \n\n    <b>Tamaño: Mediana</b><br>\n\n    \n\n    Yolita fue rescata desde el hospital de Talagante, donde llegó a tener a \n\n    sus gatitos en pleno invierno! Fue una super mamá y dio todo por cuidarlos y\n\n     protegerlos de la intensa lluvia. Se refugió bajo unas hojas de palmera y cartones \n\n     para que los pequeños no pasaran frío y fue muy protectora de cualquiera que se acercara.\n\n      Sus pequeños encontraron lindas familias, pero hace ya tiempo que seguimos soñando \n\n      con darle la misma oportunidad a Yolita.\n\n\n\nA pesar de su edad es una gatita muy vital y energética, que ama pasear y explorar. \n\nTiene mucha personalidad y no convive con hembras, pero sí con machos. ¿Quieres ser\n\n quien le cambie la vida para siempre? Contáctanos. Si no puedes adoptar, por favor \n\n difunde y ayúdanos a un hogar para esta viejita hermosa\n\n     </p>\n\n     <ion-item text-center>\n\n                  \n\n        <button color="dark" ion-button (click)="adoptar(AdoptarPage)" round outline>  <ion-icon color="danger" name="heart" ></ion-icon>¿Quieres Adoptar?</button>\n\n      </ion-item>\n\n      \n\n            </ion-card-content>\n\n          </ion-card>\n\n\n\n\n\n\n\n         \n\n    \n\n\n\n\n\n        <ion-fab top right edge >\n\n            <button color="dark" ion-fab>\n\n              <ion-icon  name="paw"></ion-icon>\n\n            </button>\n\n          </ion-fab>   \n\n \n\n  </ion-content>'/*ion-inline-end:"C:\Users\nita\Desktop\EPE1\src\pages\cat\cat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], CatPage);
    return CatPage;
}());

//# sourceMappingURL=cat.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CuotaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CuotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CuotaPage = /** @class */ (function () {
    function CuotaPage(navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
    }
    CuotaPage.prototype.enviarDatos = function () {
        var nombre = this.nombre;
        var toast = this.toastCtrl.create({
            message: '' + nombre + ' sus datos fueron ingresados con éxito Gracias por fijar una cuota mensual',
            showCloseButton: true,
            closeButtonText: 'Ok'
        });
        toast.present();
    };
    CuotaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CuotaPage');
    };
    CuotaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cuota',template:/*ion-inline-start:"C:\Users\nita\Desktop\EPE1\src\pages\cuota\cuota.html"*/'<!--\n\n  Generated template for the CuotaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header text="center" color="dark"no-border>\n\n  <ion-navbar color="dark">\n\n    <img src="/assets/imgs/logos2.png">\n\n   </ion-navbar>\n\n \n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content text="center" >\n\n\n\n    <ion-card >\n\n    <ion-card>\n\n  \n\n        <img src="assets/imgs/cuota.jpg">\n\n    \n\n        <ion-item >\n\n            <h1 text-center><b>Fija una pequeña cuota<br> mensual</b></h1>\n\n        </ion-item>\n\n      </ion-card>\n\n\n\n  <ion-list inset>\n\n\n\n    <ion-item >\n\n      <ion-label color="dark" stacked>Nombre Completo</ion-label>\n\n      <ion-input type="text" [(ngModel)]="nombre"></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item >\n\n      <ion-label color="dark" stacked>Rut</ion-label>\n\n      <ion-input type="number"></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item >\n\n      <ion-label color="dark" stacked>Monto Mensual</ion-label>\n\n      <ion-input type="number" [(ngModel)]="peso"></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item >\n\n      <ion-label color="dark" stacked>Telefono</ion-label>\n\n      <ion-input type="number" [(ngModel)]="altura"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-item color="dark"  text-center>\n\n              \n\n      <button color="secondary" ion-button (click)="enviarDatos()" round outline>Enviar</button>\n\n    </ion-item>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\nita\Desktop\EPE1\src\pages\cuota\cuota.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], CuotaPage);
    return CuotaPage;
}());

//# sourceMappingURL=cuota.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoluntarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the VoluntarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VoluntarioPage = /** @class */ (function () {
    function VoluntarioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    VoluntarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VoluntarioPage');
    };
    VoluntarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-voluntario',template:/*ion-inline-start:"C:\Users\nita\Desktop\EPE1\src\pages\voluntario\voluntario.html"*/'<!--\n\n  Generated template for the VoluntarioPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header text="center" color="dark"no-border>\n\n  \n\n\n\n  <ion-navbar color="dark">\n\n    <img src="/assets/imgs/logos2.png">\n\n   </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h3>¿Que significa ser voluntario?</h3>\n\n\n\n   <p> Significa explorar en una experiencia que tiene infinitas posibilidades. Somos una corporación abierta y diversa sin fines de lucro,\n\n     donde los distintos talentos, disponibilidades e intereses tienen cabida. En el refugio y en la Corporación hay mucho que hacer,\n\n      en distintos ámbitos.</p>\n\n      <h3>¿Como puedo ser Voluntario?</h3>\n\n\n\n      Inscríbete en esta página o envía un correo a corazonanimal@gmail.com.\n\n       Recibirás toda la información necesaria. Es importante que confirmes tu asistencia\n\n        a más tardar el viernes para poder coordinar de manera adecuada el operativo, contabilizando las personas que \n\n        asistir.\n\n        <h3>Si no tengo auto ¿Puedo ser voluntario? </h3>\n\n        <img src="/assets/imgs/auto.jpg"/>\n\n        <p>Sí. Para nosotros es muy valioso cada voluntario que puede llegar al punto de encuentro en auto, justamente porque cada domingo\n\n           nos distribuimos entre los autos disponibles y los voluntarios a pie.</p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\nita\Desktop\EPE1\src\pages\voluntario\voluntario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], VoluntarioPage);
    return VoluntarioPage;
}());

//# sourceMappingURL=voluntario.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/adoptar/adoptar.module": [
		278,
		9
	],
	"../pages/apadrinar/apadrinar.module": [
		279,
		8
	],
	"../pages/can/can.module": [
		280,
		7
	],
	"../pages/cat/cat.module": [
		281,
		6
	],
	"../pages/comoayudar/comoayudar.module": [
		283,
		5
	],
	"../pages/cuota/cuota.module": [
		282,
		4
	],
	"../pages/menu/menu.module": [
		284,
		0
	],
	"../pages/quehacemos/quehacemos.module": [
		285,
		3
	],
	"../pages/quienesomos/quienesomos.module": [
		286,
		2
	],
	"../pages/voluntario/voluntario.module": [
		287,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comoayudar_comoayudar__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quehacemos_quehacemos__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__quienesomos_quienesomos__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__can_can__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cat_cat__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.comoayudar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__comoayudar_comoayudar__["a" /* ComoayudarPage */]);
    };
    HomePage.prototype.quehacemos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__quehacemos_quehacemos__["a" /* QuehacemosPage */]);
    };
    HomePage.prototype.quienesomos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__quienesomos_quienesomos__["a" /* QuienesomosPage */]);
    };
    HomePage.prototype.can = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__can_can__["a" /* CanPage */]);
    };
    HomePage.prototype.cat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cat_cat__["a" /* CatPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\nita\Desktop\EPE1\src\pages\home\home.html"*/'<!--\n\n  Generated template for the AdoptarPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<link href="https://fonts.googleapis.com/css?family=Cuprum|Dosis" rel="stylesheet">\n\n<ion-header text="center" color="dark"no-border>\n\n    <ion-toolbar color="dark">\n\n       \n\n        <button ion-button menuToggle>  <!-- falta en el ts funcion-->\n\n          <ion-icon name="menu" ></ion-icon>\n\n        </button>\n\n        <img src="/assets/imgs/logos2.png">\n\n      </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n      <button ion-item (click)="can(CanPage)" text-center>\n\n          <img src="/assets/imgs/portada1.png">\n\n         </button>\n\n         <button ion-item (click)="cat(CatPage)" text-center>\n\n            <img src="/assets/imgs/portada3.png">\n\n          </button>\n\n          <ion-fab  top right edge>\n\n              <button  color="dark" ion-fab mini><ion-icon name="add"></ion-icon></button>\n\n              <ion-fab-list>\n\n                <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n\n                <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n\n                <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n\n                <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n\n              </ion-fab-list>\n\n            </ion-fab>\n\n  </ion-content>\n\n  \n\n  <!--\n\n aqui va lo del menu baboso!\n\n-->\n\n\n\n \n\n<ion-menu [content]="mycontent">    <ion-content>\n\n  <ion-toolbar>\n\n    <img src="/assets/imgs/menu1.jpg">\n\n    \n\n  <ion-list>\n\n    <button ion-item  menuClose name="logo-apple" ><ion-icon name="home">   Home  </ion-icon>  \n\n    </button>\n\n\n\n\n\n    <button ion-item (click)="comoayudar(ComoayudarPage)"> <ion-icon name="logo-octocat">   ¿Como Ayudar? </ion-icon> \n\n    </button>\n\n\n\n    <button ion-item (click)="quehacemos(QuehacemosPage)"name="logo-apple" ><ion-icon name="md-paw"> ¿Que hacemos? </ion-icon>\n\n    </button>\n\n\n\n   <button ion-item (click)="quienesomos(QuienesomosPage)"name="logo-apple" ><ion-icon name="ios-people">   Quienes somos</ion-icon>\n\n   </button>\n\n\n\n\n\n    </ion-list>\n\n  \n\n\n\n    </ion-toolbar>\n\n    <img src="/assets/imgs/pata.jpg">\n\n</ion-content>\n\n</ion-menu>\n\n <ion-nav #mycontent [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\nita\Desktop\EPE1\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_quehacemos_quehacemos__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_quienesomos_quienesomos__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_comoayudar_comoayudar__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_can_can__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_cat_cat__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_cuota_cuota__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_apadrinar_apadrinar__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_voluntario_voluntario__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_adoptar_adoptar__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_quehacemos_quehacemos__["a" /* QuehacemosPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_quienesomos_quienesomos__["a" /* QuienesomosPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_comoayudar_comoayudar__["a" /* ComoayudarPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_can_can__["a" /* CanPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_cat_cat__["a" /* CatPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_cuota_cuota__["a" /* CuotaPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_apadrinar_apadrinar__["a" /* ApadrinarPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_voluntario_voluntario__["a" /* VoluntarioPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_adoptar_adoptar__["a" /* AdoptarPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/adoptar/adoptar.module#AdoptarPageModule', name: 'AdoptarPage', segment: 'adoptar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/apadrinar/apadrinar.module#ApadrinarPageModule', name: 'ApadrinarPage', segment: 'apadrinar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/can/can.module#CanPageModule', name: 'CanPage', segment: 'can', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cat/cat.module#CatPageModule', name: 'CatPage', segment: 'cat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cuota/cuota.module#CuotaPageModule', name: 'CuotaPage', segment: 'cuota', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/comoayudar/comoayudar.module#ComoayudarPageModule', name: 'ComoayudarPage', segment: 'comoayudar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quehacemos/quehacemos.module#QuehacemosPageModule', name: 'QuehacemosPage', segment: 'quehacemos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quienesomos/quienesomos.module#QuienesomosPageModule', name: 'QuienesomosPage', segment: 'quienesomos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/voluntario/voluntario.module#VoluntarioPageModule', name: 'VoluntarioPage', segment: 'voluntario', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_quehacemos_quehacemos__["a" /* QuehacemosPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_quienesomos_quienesomos__["a" /* QuienesomosPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_comoayudar_comoayudar__["a" /* ComoayudarPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_can_can__["a" /* CanPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_cat_cat__["a" /* CatPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_cuota_cuota__["a" /* CuotaPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_apadrinar_apadrinar__["a" /* ApadrinarPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_voluntario_voluntario__["a" /* VoluntarioPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_adoptar_adoptar__["a" /* AdoptarPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\nita\Desktop\EPE1\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\nita\Desktop\EPE1\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdoptarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AdoptarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdoptarPage = /** @class */ (function () {
    function AdoptarPage(navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
    }
    AdoptarPage.prototype.enviarDatos = function () {
        var nombre = this.nombre;
        var toast = this.toastCtrl.create({
            message: '' + nombre + ' sus datos fueron ingresados con éxito Gracias por adoptar a este lindo animalito',
            showCloseButton: true,
            closeButtonText: 'Ok'
        });
        toast.present();
    };
    AdoptarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdoptarPage');
    };
    AdoptarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adoptar',template:/*ion-inline-start:"C:\Users\nita\Desktop\EPE1\src\pages\adoptar\adoptar.html"*/'<!--\n\n  Generated template for the AdoptarPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n    <ion-header text="center" color="dark"no-border>\n\n  \n\n        <ion-navbar color="dark">\n\n           <img src="/assets/imgs/logos2.png">\n\n          </ion-navbar>\n\n</ion-header>\n\n\n\n<br>\n\n<br>\n\n<br>\n\n<br>\n\n<ion-content padding>\n\n<ion-card >\n\n    <ion-item color="dark" text-center>\n\n       <b> <h2  color="secondary"  text="center">-------- ADOPTA AQUÍ --------</h2></b>\n\n   \n\n    </ion-item>\n\n   \n\n    <ion-list  >\n\n        <ion-item >\n\n          <ion-label color="dark"  stacked >Nombre </ion-label>\n\n          <ion-input  type="text" [(ngModel)]="nombre"></ion-input>\n\n        </ion-item>\n\n      \n\n        <ion-item color="dark">\n\n            <ion-label color="secondary"  stacked >Apellido </ion-label>\n\n            <ion-input type="text" [(ngModel)]="apellido"></ion-input>\n\n          </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="dark" stacked >E-mail</ion-label>\n\n          <ion-input type="text" [(ngModel)]="email"></ion-input>\n\n        </ion-item>\n\n      \n\n        <ion-item color="dark">\n\n            <ion-label color="secondary" stacked>Edad</ion-label>\n\n            <ion-input  type="number" [(ngModel)]="edad"></ion-input>\n\n          </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label color="dark" stacked>Telefono</ion-label>\n\n            <ion-input type="number" [(ngModel)]="telefono"></ion-input>\n\n          </ion-item>\n\n\n\n        <ion-item color="dark">\n\n          <ion-label color="secondary" stacked>Mensaje</ion-label>\n\n          <ion-input type="text" [(ngModel)]="mensaje"></ion-input>\n\n        </ion-item>\n\n      \n\n       \n\n      </ion-list>\n\n      <ion-item  text-center>\n\n              \n\n          <button  ion-button (click)="enviarDatos()" round outline>Enviar</button>\n\n        </ion-item>\n\n      </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\nita\Desktop\EPE1\src\pages\adoptar\adoptar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], AdoptarPage);
    return AdoptarPage;
}());

//# sourceMappingURL=adoptar.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map