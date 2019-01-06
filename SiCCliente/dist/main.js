(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../material-component/configurador/configurador.component": [
		"./src/app/material-component/configurador/configurador.component.ts",
		"default~material-component-configurador-configurador-component~material-component-material-module"
	],
	"./material-component/material.module": [
		"./src/app/material-component/material.module.ts",
		"default~material-component-configurador-configurador-component~material-component-material-module",
		"material-component-material-module"
	],
	"./starter/starter.module": [
		"./src/app/starter/starter.module.ts",
		"starter-starter-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Main wrapper - style you can find in pages.scss -->\r\n<!-- ============================================================== -->\r\n<router-outlet><app-spinner></app-spinner></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _starter_starter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./starter/starter.component */ "./src/app/starter/starter.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/full/full.component */ "./src/app/layouts/full/full.component.ts");
/* harmony import */ var _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/full/header/header.component */ "./src/app/layouts/full/header/header.component.ts");
/* harmony import */ var _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/full/sidebar/sidebar.component */ "./src/app/layouts/full/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./demo-material-module */ "./src/app/demo-material-module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/spinner.component */ "./src/app/shared/spinner.component.ts");
/* harmony import */ var _layouts_full_header_header_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./layouts/full/header/header.module */ "./src/app/layouts/full/header/header.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _starter_starter_component__WEBPACK_IMPORTED_MODULE_7__["TermosDeUso"],
                _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_9__["FullComponent"],
                _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_10__["AppHeaderComponent"],
                _shared_spinner_component__WEBPACK_IMPORTED_MODULE_16__["SpinnerComponent"],
                _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["AppSidebarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _demo_material_module__WEBPACK_IMPORTED_MODULE_13__["DemoMaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
                _layouts_full_header_header_module__WEBPACK_IMPORTED_MODULE_17__["AppHeaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutes"])
            ],
            entryComponents: [
                _starter_starter_component__WEBPACK_IMPORTED_MODULE_7__["TermosDeUso"],
            ],
            providers: [
                {
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"],
                    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__["PathLocationStrategy"]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/full/full.component */ "./src/app/layouts/full/full.component.ts");

var AppRoutes = [
    {
        path: '',
        component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__["FullComponent"],
        children: [
            {
                path: '',
                redirectTo: '/starter',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: './material-component/material.module#MaterialComponentsModule'
            },
            {
                path: 'starter',
                loadChildren: './starter/starter.module#StarterModule'
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['./starter']);
            return false;
        }
        else {
            return true;
        }
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "./node_modules/@ngx-pwa/local-storage/fesm5/ngx-pwa-local-storage.js");
/* harmony import */ var _isLoggedIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isLoggedIn */ "./src/app/isLoggedIn.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(localStorage) {
        this.localStorage = localStorage;
    }
    AuthService.prototype.isAuthenticated = function () {
        var LoggedIn = _isLoggedIn__WEBPACK_IMPORTED_MODULE_2__["IsLoggedIn"].Instance;
        if (LoggedIn.isLoggedIn) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_1__["LocalStorage"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/config.ts":
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
var Config = /** @class */ (function () {
    function Config() {
    }
    //static sicGcUrl = 'https://3da-arqsi-g1-sic.azurewebsites.net';
    //static sicEncomendasUrl = 'https://sic-encomendas.herokuapp.com/';
    //static sicClient = 'https://arqsi-g1-sic-client.herokuapp.com/';
    Config.sicGcUrl = 'https://sicgc-g8583.azurewebsites.net/api/';
    Config.sicEncomendasUrl = 'https://sic-encomendas-g8583.herokuapp.com/';
    Config.sicEntregasUrl = 'https://40.89.154.142:3001/';
    return Config;
}());



/***/ }),

/***/ "./src/app/demo-material-module.ts":
/*!*****************************************!*\
  !*** ./src/app/demo-material-module.ts ***!
  \*****************************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/accordion */ "./node_modules/@angular/cdk/esm5/accordion.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 */
var DemoMaterialModule = /** @class */ (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"],
                _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"],
                _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_3__["CdkAccordionModule"],
                _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["ObserversModule"],
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"],
                _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["PortalModule"],
            ]
        })
    ], DemoMaterialModule);
    return DemoMaterialModule;
}());



/***/ }),

/***/ "./src/app/isLoggedIn.ts":
/*!*******************************!*\
  !*** ./src/app/isLoggedIn.ts ***!
  \*******************************/
/*! exports provided: IsLoggedIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsLoggedIn", function() { return IsLoggedIn; });
var IsLoggedIn = /** @class */ (function () {
    function IsLoggedIn() {
        this.isLoggedIn = false;
    }
    Object.defineProperty(IsLoggedIn, "Instance", {
        get: function () {
            return this._instance || (this._instance = new this());
        },
        enumerable: true,
        configurable: true
    });
    IsLoggedIn.prototype.toggle = function () {
        this.isLoggedIn = !this.isLoggedIn;
    };
    IsLoggedIn.prototype.toggleIf = function () {
        if (this.isLoggedIn == true) {
            this.toggle();
        }
    };
    return IsLoggedIn;
}());



/***/ }),

/***/ "./src/app/layouts/full/full.component.html":
/*!**************************************************!*\
  !*** ./src/app/layouts/full/full.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Main wrapper - style you can find in pages.scss -->\r\n<!-- ============================================================== -->\r\n<div class=\"main-container\"> \r\n    <!-- ============================================================== -->\r\n    <!-- Topbar - style you can find in header.scss -->\r\n    <!-- ============================================================== -->\r\n    <mat-toolbar color=\"accent\" class=\"topbar telative\">\r\n        <!-- ============================================================== -->\r\n        <!-- Logo - style you can find in header.scss -->\r\n        <!-- ============================================================== -->\r\n        <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand\" href=\"index.html\">\r\n                <!-- Logo icon --><b>\r\n                    <!--You can put here icon as well // <i class=\"wi wi-sunset\"></i> //-->\r\n                    <!-- Dark Logo icon -->\r\n                    <img src=\"assets/images/logo-icon.png\" alt=\"homepage\" class=\"dark-logo\">\r\n                    <!-- Light Logo icon -->\r\n                    <img src=\"assets/images/logo-light-icon.png\" alt=\"homepage\" class=\"light-logo\">\r\n                </b>\r\n                <!--End Logo icon -->\r\n                <!-- Logo text -->\r\n                <span fxShow=\"false\" fxShow.gt-xs>\r\n                 <!-- dark Logo text -->\r\n                 <img src=\"assets/images/logo-text.png\" alt=\"homepage\" class=\"dark-logo\">\r\n                 <!-- Light Logo text -->    \r\n                 <img src=\"assets/images/logo-light-text.png\" class=\"light-logo\" alt=\"homepage\">\r\n                </span> </a>\r\n        </div>\r\n        <!-- ============================================================== -->\r\n        <!-- sidebar toggle -->\r\n        <!-- ============================================================== -->\r\n        \r\n        <button mat-icon-button (click)=\"snav.toggle()\" value=\"sidebarclosed\">\r\n            <mat-icon>menu</mat-icon>\r\n        </button>\r\n        <span fxFlex></span>\r\n        <!-- ============================================================== -->\r\n        <!-- app header component - style you can find in header.scss / header.component.ts-->\r\n        <!-- ============================================================== -->\r\n        <app-header></app-header>\r\n    </mat-toolbar>\r\n    <!-- ============================================================== -->\r\n    <!-- End Topbar - style you can find in pages.scss -->\r\n    <!-- ============================================================== -->\r\n    <mat-sidenav-container class=\"example-sidenav-container\" [style.marginTop.px]=\"mobileQuery.matches ? 0 : 0\">\r\n        <!-- ============================================================== -->\r\n        <!-- Sidebar - style you can find in sidebar.scss -->\r\n        <!-- ============================================================== -->\r\n        <mat-sidenav #snav id=\"snav\" class=\"dark-sidebar pl-xs\" [mode]=\"mobileQuery.matches ? 'side' : 'over'\" fixedTopGap=\"0\" [opened]=\"mobileQuery.matches\" [disableClose]=\"mobileQuery.matches\"  >\r\n            \r\n                <app-sidebar></app-sidebar>\r\n               \r\n            \r\n        </mat-sidenav>\r\n        <!-- ============================================================== -->\r\n        <!-- Sidebar - style you can find in sidebar.scss -->\r\n        <!-- ============================================================== -->\r\n        \r\n        <!-- ============================================================== -->\r\n        <!-- Page container - style you can find in pages.scss -->\r\n        <!-- ============================================================== -->\r\n        <mat-sidenav-content class=\"page-wrapper\">\r\n                 \r\n                <div class=\"page-content\">\r\n                   \r\n                        <router-outlet><app-spinner></app-spinner></router-outlet>\r\n                    \r\n                </div>    \r\n               \r\n        </mat-sidenav-content>\r\n        <!-- ============================================================== -->\r\n        <!-- Page container - style you can find in pages.scss -->\r\n        <!-- ============================================================== -->\r\n    </mat-sidenav-container>\r\n</div>"

/***/ }),

/***/ "./src/app/layouts/full/full.component.ts":
/*!************************************************!*\
  !*** ./src/app/layouts/full/full.component.ts ***!
  \************************************************/
/*! exports provided: FullComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullComponent", function() { return FullComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/menu-items/menu-items */ "./src/app/shared/menu-items/menu-items.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/** @title Responsive sidenav */
var FullComponent = /** @class */ (function () {
    function FullComponent(changeDetectorRef, media, menuItems) {
        this.menuItems = menuItems;
        this.mobileQuery = media.matchMedia('(min-width: 768px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    FullComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    FullComponent.prototype.ngAfterViewInit = function () { };
    FullComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-full-layout',
            template: __webpack_require__(/*! ./full.component.html */ "./src/app/layouts/full/full.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["MediaMatcher"],
            _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__["MenuItems"]])
    ], FullComponent);
    return FullComponent;
}());



/***/ }),

/***/ "./src/app/layouts/full/header/header.component.html":
/*!***********************************************************!*\
  !*** ./src/app/layouts/full/header/header.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Profile - style you can find in header.scss -->\r\n<!-- ============================================================== -->\r\n<a href=\"https://wrappixel.com/templates/materialpro-angular-dashboard/\" class=\" m-r-20 hidden-sm-up\" mat-raised-button\r\n    color=\"warn\"></a>\r\n<button [matMenuTriggerFor]=\"profile\" mat-icon-button class=\"m-r-5\"> <img src=\"assets/images/users/1.jpg\" alt=\"user\"\r\n        class=\"profile-pic\" (click)=\"checkHTML()\"> </button>\r\n<mat-menu #profile=\"matMenu\" class=\"mymegamenu\">\r\n    <button mat-menu-item *ngIf=\"activateLogout\" (click)=\"logoutUserHTML()\">\r\n        <mat-icon>exit_to_app</mat-icon>Sign Out\r\n    </button>\r\n</mat-menu>"

/***/ }),

/***/ "./src/app/layouts/full/header/header.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layouts/full/header/header.component.ts ***!
  \*********************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "./node_modules/@ngx-pwa/local-storage/fesm5/ngx-pwa-local-storage.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _isLoggedIn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../isLoggedIn */ "./src/app/isLoggedIn.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppHeaderComponent = /** @class */ (function () {
    function AppHeaderComponent(auth, snackBar, router, localStorage) {
        this.auth = auth;
        this.snackBar = snackBar;
        this.router = router;
        this.localStorage = localStorage;
        //flags
        this.activateLogout = false;
    }
    AppHeaderComponent.prototype.ngOnInit = function () { };
    AppHeaderComponent.prototype.logoutUserHTML = function () {
        var _this = this;
        this.localStorage.getItem('auth').subscribe(function (data) {
            if (data != null) {
                _this.localStorage.clear().subscribe(function () { });
                _this.snackBar.open("Logout realizado com sucesso!", "", { duration: 4000 });
                var LoggedIn = _isLoggedIn__WEBPACK_IMPORTED_MODULE_5__["IsLoggedIn"].Instance;
                LoggedIn.toggleIf();
            }
            _this.router.navigate(['./starter']);
            _this.activateLogout = false;
        });
    };
    AppHeaderComponent.prototype.checkHTML = function () {
        var _this = this;
        this.localStorage.getItem('auth').subscribe(function (data) {
            if (data != null) {
                _this.activateLogout = true;
            }
            else {
                _this.snackBar.open("You need to be logged in!", "", { duration: 4000 });
                _this.router.navigate(['./starter']);
            }
        });
    };
    AppHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layouts/full/header/header.component.html")
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"]])
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());



/***/ }),

/***/ "./src/app/layouts/full/header/header.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layouts/full/header/header.module.ts ***!
  \******************************************************/
/*! exports provided: AppHeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderModule", function() { return AppHeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppHeaderModule = /** @class */ (function () {
    function AppHeaderModule() {
    }
    AppHeaderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            providers: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]],
            declarations: []
        })
    ], AppHeaderModule);
    return AppHeaderModule;
}());



/***/ }),

/***/ "./src/app/layouts/full/sidebar/sidebar.component.html":
/*!*************************************************************!*\
  !*** ./src/app/layouts/full/sidebar/sidebar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- sidebar -->\r\n<!-- ============================================================== -->\r\n <div class=\"user-profile\" style=\"background: url(assets/images/background/user-info.jpg) no-repeat;\">\r\n    <!-- User profile image -->\r\n    <div class=\"profile-img\"> <img src=\"assets/images/users/profile.png\" alt=\"user\"> </div>\r\n    <!-- User profile text-->\r\n    <!-- ============================================================== -->\r\n    <!-- Profile - style you can find in header.scss -->\r\n    <!-- ============================================================== -->\r\n    <div class=\"profile-text\"><a class=\"\"> Welcome! <i class=\"ti-angle-down font-12 m-l-5\"></i></a></div>\r\n    \r\n</div>\r\n<mat-nav-list appAccordion>\r\n    <mat-list-item appAccordionLink *ngFor=\"let menuitem of menuItems.getMenuitem()\" routerLinkActive=\"selected\" group=\"{{menuitem.state}}\">\r\n        <a class=\"\" appAccordionToggle [routerLink]=\"['/', menuitem.state]\" *ngIf=\"menuitem.type === 'link'\">\r\n            <mat-icon>{{ menuitem.icon }}</mat-icon> \r\n            <span>{{ menuitem.name }}</span> \r\n            <span fxFlex></span> \r\n            <span class=\"label label-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span> \r\n        </a>\r\n        \r\n    </mat-list-item>\r\n\r\n</mat-nav-list>"

/***/ }),

/***/ "./src/app/layouts/full/sidebar/sidebar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layouts/full/sidebar/sidebar.component.ts ***!
  \***********************************************************/
/*! exports provided: AppSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebarComponent", function() { return AppSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/menu-items/menu-items */ "./src/app/shared/menu-items/menu-items.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppSidebarComponent = /** @class */ (function () {
    function AppSidebarComponent(changeDetectorRef, media, menuItems) {
        this.menuItems = menuItems;
        this.mobileQuery = media.matchMedia('(min-width: 768px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    AppSidebarComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    AppSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/layouts/full/sidebar/sidebar.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"],
            _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__["MenuItems"]])
    ], AppSidebarComponent);
    return AppSidebarComponent;
}());



/***/ }),

/***/ "./src/app/shared/accordion/accordion.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/accordion/accordion.directive.ts ***!
  \*********************************************************/
/*! exports provided: AccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return AccordionDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccordionDirective = /** @class */ (function () {
    function AccordionDirective(router) {
        var _this = this;
        this.router = router;
        this.navlinks = [];
        setTimeout(function () { return _this.checkOpenLinks(); });
    }
    AccordionDirective.prototype.closeOtherLinks = function (selectedLink) {
        this.navlinks.forEach(function (link) {
            if (link !== selectedLink) {
                link.selected = false;
            }
        });
    };
    AccordionDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    AccordionDirective.prototype.removeGroup = function (link) {
        var index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    };
    AccordionDirective.prototype.checkOpenLinks = function () {
        var _this = this;
        this.navlinks.forEach(function (link) {
            if (link.group) {
                var routeUrl = _this.router.url;
                var currentUrl = routeUrl.split('/');
                if (currentUrl.indexOf(link.group) > 0) {
                    link.selected = true;
                    _this.closeOtherLinks(link);
                }
            }
        });
    };
    AccordionDirective.prototype.ngAfterContentChecked = function () {
        var _this = this;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }))
            .subscribe(function (e) { return _this.checkOpenLinks(); });
    };
    AccordionDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appAccordion]'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AccordionDirective);
    return AccordionDirective;
}());



/***/ }),

/***/ "./src/app/shared/accordion/accordionanchor.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/accordion/accordionanchor.directive.ts ***!
  \***************************************************************/
/*! exports provided: AccordionAnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return AccordionAnchorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionlink.directive */ "./src/app/shared/accordion/accordionlink.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AccordionAnchorDirective = /** @class */ (function () {
    function AccordionAnchorDirective(navlink) {
        this.navlink = navlink;
    }
    AccordionAnchorDirective.prototype.onClick = function (e) {
        this.navlink.toggle();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AccordionAnchorDirective.prototype, "onClick", null);
    AccordionAnchorDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appAccordionToggle]'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"])),
        __metadata("design:paramtypes", [_accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"]])
    ], AccordionAnchorDirective);
    return AccordionAnchorDirective;
}());



/***/ }),

/***/ "./src/app/shared/accordion/accordionlink.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/accordion/accordionlink.directive.ts ***!
  \*************************************************************/
/*! exports provided: AccordionLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return AccordionLinkDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion.directive */ "./src/app/shared/accordion/accordion.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AccordionLinkDirective = /** @class */ (function () {
    function AccordionLinkDirective(nav) {
        this.nav = nav;
    }
    Object.defineProperty(AccordionLinkDirective.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (value) {
            this._selected = value;
            if (value) {
                this.nav.closeOtherLinks(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    AccordionLinkDirective.prototype.ngOnInit = function () {
        this.nav.addLink(this);
    };
    AccordionLinkDirective.prototype.ngOnDestroy = function () {
        this.nav.removeGroup(this);
    };
    AccordionLinkDirective.prototype.toggle = function () {
        this.selected = !this.selected;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AccordionLinkDirective.prototype, "group", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.selected'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AccordionLinkDirective.prototype, "selected", null);
    AccordionLinkDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appAccordionLink]'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"])),
        __metadata("design:paramtypes", [_accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"]])
    ], AccordionLinkDirective);
    return AccordionLinkDirective;
}());



/***/ }),

/***/ "./src/app/shared/accordion/index.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/accordion/index.ts ***!
  \*******************************************/
/*! exports provided: AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordionanchor.directive */ "./src/app/shared/accordion/accordionanchor.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__["AccordionAnchorDirective"]; });

/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionlink.directive */ "./src/app/shared/accordion/accordionlink.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"]; });

/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion.directive */ "./src/app/shared/accordion/accordion.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return _accordion_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"]; });






/***/ }),

/***/ "./src/app/shared/menu-items/menu-items.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/menu-items/menu-items.ts ***!
  \*************************************************/
/*! exports provided: MenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItems", function() { return MenuItems; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _isLoggedIn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../isLoggedIn */ "./src/app/isLoggedIn.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MENUITEMS = [
    { state: 'starter', name: 'Starter Page', type: 'link', icon: 'av_timer' },
    { state: 'configurador', type: 'link', name: 'Configurador', icon: 'settings' }
];
var MENUITEMSGestor = [
    { state: 'starter', name: 'Starter Page', type: 'link', icon: 'av_timer' },
    { state: 'configurador', type: 'link', name: 'Configurador', icon: 'settings' },
    { state: 'gerir-acabamento', type: 'link', name: 'Gerir Acabamento', icon: 'format_paint' },
    { state: 'gerir-material', type: 'link', name: 'Gerir Material', icon: 'texture' },
    { state: 'gerir-categoria', type: 'link', name: 'Gerir Categoria', icon: 'category' },
    { state: 'gerir-colecoes', type: 'link', name: 'Gerir Colecoes', icon: 'collections' },
    { state: 'gerir-catalogos', type: 'link', name: 'Gerir Catalogos', icon: 'view_list' },
    { state: 'gerir-produto', type: 'link', name: 'Gerir Produto', icon: 'map' },
    { state: 'gerir-encomendas', type: 'link', name: 'Gerir Encomendas', icon: 'inbox' },
    { state: 'entregas', type: 'link', name: 'Entregas', icon: 'local_shipping' },
    { state: 'consultar-historico', type: 'link', name: 'Consultar Historico', icon: 'history' }
];
var MenuItems = /** @class */ (function () {
    function MenuItems() {
    }
    MenuItems.prototype.getMenuitem = function () {
        var LoggedIn = _isLoggedIn__WEBPACK_IMPORTED_MODULE_1__["IsLoggedIn"].Instance;
        if (LoggedIn.isLoggedIn == true) {
            return MENUITEMSGestor;
        }
        return MENUITEMS;
    };
    MenuItems = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MenuItems);
    return MenuItems;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-items/menu-items */ "./src/app/shared/menu-items/menu-items.ts");
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion */ "./src/app/shared/accordion/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionAnchorDirective"],
                _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"],
                _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"]
            ],
            exports: [
                _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionAnchorDirective"],
                _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"],
                _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"]
            ],
            providers: [_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__["MenuItems"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/spinner.component.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/spinner.component.ts ***!
  \*********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent(router, document) {
        var _this = this;
        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                _this.isSpinnerVisible = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
                _this.isSpinnerVisible = false;
            }
        }, function () {
            _this.isSpinnerVisible = false;
        });
    }
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.isSpinnerVisible = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SpinnerComponent.prototype, "backgroundColor", void 0);
    SpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spinner',
            template: "<div class=\"preloader\" *ngIf=\"isSpinnerVisible\">\n        <div class=\"spinner\">\n          <div class=\"double-bounce1\"></div>\n          <div class=\"double-bounce2\"></div>\n        </div>\n    </div>",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            Document])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/starter/starter.component.html":
/*!************************************************!*\
  !*** ./src/app/starter/starter.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <h1 style=\"text-align: center\">Welcome to SiC Client!</h1>\r\n</mat-card>\r\n<mat-card>\r\n    <mat-card-content>\r\n        <div style=\"text-align:left\">\r\n            <div style=\"text-align: left\">\r\n                <mat-card-title>\r\n                    <h2>Log in to your account!</h2>\r\n                </mat-card-title>\r\n                <mat-form-field appearance=\"outline\">\r\n                    <input matInput placeholder=\"Email\" required [(ngModel)]=\"emailLogin\">\r\n                </mat-form-field>\r\n                <mat-form-field appearance=\"outline\">\r\n                    <input matInput placeholder=\"Password\" type=\"password\" required [(ngModel)]=\"passwordLogin\">\r\n                </mat-form-field>\r\n                <mat-form-field appearance=\"outline\" *ngIf=\"activate\">\r\n                    <input matInput placeholder=\"One time password\" required [(ngModel)]=\"otpLogin\">\r\n                </mat-form-field>\r\n                <button mat-raised-button color=\"primary\" (click)=\"loginUserHTML()\">Log in</button>\r\n            </div>\r\n            <ng-template #noError>\r\n            </ng-template>\r\n        </div>\r\n    </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card>\r\n    <mat-card-content>\r\n        <div style=\"text-align:left\">\r\n            <div style=\"text-align: left\">\r\n                <mat-card-title>\r\n                    <h2>Register a new account!</h2>\r\n                </mat-card-title>\r\n                <mat-form-field appearance=\"outline\">\r\n                    <input matInput placeholder=\"Email\" required [(ngModel)]=\"emailRegister\">\r\n                </mat-form-field>\r\n                <mat-form-field appearance=\"outline\">\r\n                    <input matInput placeholder=\"Password\" required type=\"password\" [(ngModel)]=\"passwordRegister\">\r\n                </mat-form-field>\r\n                <div class=\"termos\">\r\n                    <mat-checkbox class=\"checkboxTermos\" [(ngModel)]=\"aceitarTermos\"></mat-checkbox>\r\n                    <label class=\"labelTermos\">Aceito os </label>\r\n                    <label class=\"labelTermos2\" (click)=\"abrirTermosDeUso()\">Termos de Uso</label>\r\n                </div>\r\n                <button mat-raised-button color=\"primary\" (click)=\"registerUserHTML()\">Register</button>\r\n            </div>\r\n            <ng-template #noError>\r\n            </ng-template>\r\n        </div>\r\n    </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/starter/starter.component.scss":
/*!************************************************!*\
  !*** ./src/app/starter/starter.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Application-wide Styles */\nh1 {\n  color: black;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 250%; }\nh2, h3 {\n  color: black;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter; }\nbody {\n  margin: 2em; }\nbody, input[type=\"text\"], button {\n  color: white;\n  font-family: Cambria, Georgia; }\n/* everywhere else */\n* {\n  color: black;\n  font-family: Cambria, Georgia; }\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px; }\nnav a:visited, a:link {\n  color: #607D8B; }\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC; }\nnav a.active {\n  color: #039be5; }\n.termos {\n  float: left;\n  width: 100%;\n  margin-bottom: 20px; }\n.labelTermos {\n  margin-left: 5px; }\n.labelTermos2 {\n  color: #039be5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhcnRlci9DOlxcVXNlcnNcXGpvYW8gcmVpc1xcRG9jdW1lbnRzXFxJc2VwXFwzwrphbm9cXExBUFI1XFxsYXByNVxcU2lDQ2xpZW50ZS9zcmNcXGFwcFxcc3RhcnRlclxcc3RhcnRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkI7QUFDN0I7RUFDSSxhQUFtQjtFQUNuQiwwQ0FBeUM7RUFDekMsZ0JBQWUsRUFDaEI7QUFDRDtFQUNFLGFBQW1CO0VBQ25CLDBDQUF5QztFQUN6QyxxQkFBb0IsRUFDckI7QUFDRDtFQUNFLFlBQVcsRUFDWjtBQUNEO0VBQ0UsYUFBeUI7RUFDekIsOEJBQTZCLEVBQzlCO0FBQ0QscUJBQXFCO0FBQ3JCO0VBQ0UsYUFBbUI7RUFDbkIsOEJBQTZCLEVBQzlCO0FBRUQ7RUFDRSxrQkFBaUI7RUFDakIsc0JBQXFCO0VBQ3JCLGlCQUFnQjtFQUNoQixzQkFBcUI7RUFDckIsdUJBQXNCO0VBQ3RCLG1CQUFrQixFQUNuQjtBQUNEO0VBQ0UsZUFBYyxFQUNmO0FBQ0Q7RUFDRSxlQUFjO0VBQ2QsMEJBQXlCLEVBQzFCO0FBQ0Q7RUFDRSxlQUFjLEVBQ2Y7QUFDRDtFQUNBLFlBQVU7RUFDVixZQUFVO0VBQ1Ysb0JBQW1CLEVBQ3BCO0FBRUM7RUFDQSxpQkFBZ0IsRUFDakI7QUFFRDtFQUNFLGVBQWMsRUFDZiIsImZpbGUiOiJzcmMvYXBwL3N0YXJ0ZXIvc3RhcnRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFwcGxpY2F0aW9uLXdpZGUgU3R5bGVzICovXHJcbmgxIHtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjUwJTtcclxuICB9XHJcbiAgaDIsIGgzIHtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIH1cclxuICBib2R5IHtcclxuICAgIG1hcmdpbjogMmVtO1xyXG4gIH1cclxuICBib2R5LCBpbnB1dFt0eXBlPVwidGV4dFwiXSwgYnV0dG9uIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgR2VvcmdpYTtcclxuICB9XHJcbiAgLyogZXZlcnl3aGVyZSBlbHNlICovXHJcbiAgKiB7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIEdlb3JnaWE7XHJcbiAgfVxyXG5cclxuICBuYXYgYSB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICBuYXYgYTp2aXNpdGVkLCBhOmxpbmsge1xyXG4gICAgY29sb3I6ICM2MDdEOEI7XHJcbiAgfVxyXG4gIG5hdiBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDM5YmU1O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NGRDhEQztcclxuICB9XHJcbiAgbmF2IGEuYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjMDM5YmU1O1xyXG4gIH1cclxuICAudGVybW9zIHtcclxuICBmbG9hdDpsZWZ0O1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuICAubGFiZWxUZXJtb3Mge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5sYWJlbFRlcm1vczIge1xyXG4gIGNvbG9yOiAjMDM5YmU1O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/starter/starter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/starter/starter.component.ts ***!
  \**********************************************/
/*! exports provided: StarterComponent, TermosDeUso */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarterComponent", function() { return StarterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermosDeUso", function() { return TermosDeUso; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _starter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./starter.service */ "./src/app/starter/starter.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "./node_modules/@ngx-pwa/local-storage/fesm5/ngx-pwa-local-storage.js");
/* harmony import */ var _isLoggedIn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isLoggedIn */ "./src/app/isLoggedIn.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StarterComponent = /** @class */ (function () {
    function StarterComponent(starterSrv, snackBar, router, localStorage, dialog) {
        this.starterSrv = starterSrv;
        this.snackBar = snackBar;
        this.router = router;
        this.localStorage = localStorage;
        this.dialog = dialog;
        this.aceitarTermos = false;
        //flags
        this.activate = false;
    }
    StarterComponent.prototype.ngOnInit = function () { };
    StarterComponent.prototype.loginUserHTML = function () {
        var _this = this;
        var email = this.emailLogin;
        if (!email) {
            this.snackBar.open("Por favor preencha os campos obrigatorios.", "", { duration: 4000 });
            return;
        }
        var password = this.passwordLogin;
        if (this.activate) {
            var OTP = this.otpLogin;
            var tipoUtilizador = void 0;
            tipoUtilizador = this.tipo;
            this.starterSrv.loginUserOTP({ email: email, password: password, OTP: OTP, tipoUtilizador: tipoUtilizador }).subscribe(function (utilizador) {
                _this.snackBar.open("Login Realizado!", "", { duration: 4000 });
                var loggedEmail = email;
                _this.localStorage.setItem('auth', loggedEmail).subscribe(function () { });
                _this.starterSrv.getTipoUtilizador(email).subscribe(function (tipoAtual) {
                    var tipoString = tipoAtual.toString();
                    if (tipoString == "Gestor") {
                        var LoggedIn = _isLoggedIn__WEBPACK_IMPORTED_MODULE_5__["IsLoggedIn"].Instance;
                        LoggedIn.toggle();
                    }
                });
                _this.router.navigate(['./configurador']);
            }, function (erro) {
                _this.snackBar.open("Erro! Something went wrong!", erro.error, { duration: 4000 });
                console.log(erro);
            });
        }
        else {
            var OTP = void 0;
            var tipoUtilizador = void 0;
            tipoUtilizador = this.tipo;
            this.starterSrv.loginUser({ email: email, password: password, OTP: OTP, tipoUtilizador: tipoUtilizador }).subscribe(function (_) {
                _this.snackBar.open("A one time password was sent to your email!", "", { duration: 4000 });
                _this.activate = true;
            }, function (erro) {
                _this.snackBar.open("Erro!", erro.error, { duration: 4000 });
                console.log(erro);
            });
        }
    };
    StarterComponent.prototype.registerUserHTML = function () {
        var _this = this;
        if (this.aceitarTermos == false) {
            this.snackBar.open("Aceite os Termos de Uso", "", { duration: 4000 });
            return;
        }
        var email = this.emailRegister;
        var password = this.passwordRegister;
        var OTP = "";
        var tipoUtilizador;
        tipoUtilizador = this.tipo;
        this.starterSrv.registerUser({ email: email, password: password, OTP: OTP, tipoUtilizador: tipoUtilizador }).subscribe(function (utilizador) {
            _this.snackBar.open("Utilizador registado com sucesso! Pode agora fazer login com a sua nova conta!", "", { duration: 4000 });
        }, function (erro) {
            _this.snackBar.open("Erro!", erro.error, { duration: 4000 });
            console.log(erro);
        });
    };
    StarterComponent.prototype.abrirTermosDeUso = function () {
        var _this = this;
        var dialogRef = this.dialog.open(TermosDeUso, {});
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != undefined)
                _this.aceitarTermos = result;
        });
    };
    StarterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-starter',
            template: __webpack_require__(/*! ./starter.component.html */ "./src/app/starter/starter.component.html"),
            styles: [__webpack_require__(/*! ./starter.component.scss */ "./src/app/starter/starter.component.scss")]
        }),
        __metadata("design:paramtypes", [_starter_service__WEBPACK_IMPORTED_MODULE_2__["StarterService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_4__["LocalStorage"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], StarterComponent);
    return StarterComponent;
}());

var TermosDeUso = /** @class */ (function () {
    function TermosDeUso(dialogRef) {
        this.dialogRef = dialogRef;
    }
    TermosDeUso.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    TermosDeUso = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'termos-de-uso',
            template: __webpack_require__(/*! ./termos-de-uso.html */ "./src/app/starter/termos-de-uso.html"),
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], TermosDeUso);
    return TermosDeUso;
}());



/***/ }),

/***/ "./src/app/starter/starter.service.ts":
/*!********************************************!*\
  !*** ./src/app/starter/starter.service.ts ***!
  \********************************************/
/*! exports provided: StarterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarterService", function() { return StarterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var StarterService = /** @class */ (function () {
    function StarterService(httpClient) {
        this.httpClient = httpClient;
        this.urlLogin = _config__WEBPACK_IMPORTED_MODULE_3__["Config"].sicGcUrl + 'Login';
        this.urlRegister = _config__WEBPACK_IMPORTED_MODULE_3__["Config"].sicGcUrl + 'Register';
        this.urlLoginOTP = _config__WEBPACK_IMPORTED_MODULE_3__["Config"].sicGcUrl + 'Login/OTP';
    }
    StarterService.prototype.extractData = function (res) {
        return res || {};
    };
    StarterService.prototype.handleError = function (err) {
        if (err.error instanceof ErrorEvent) {
            console.error('An error occurred: ', err.error.message);
        }
        else {
            console.error("Web Api returned code " + err.status + ", " + (" Response body was: " + err.error));
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err);
    };
    StarterService.prototype.loginUser = function (utilizador) {
        return this.httpClient.post(this.urlLogin, utilizador, httpOptions);
    };
    StarterService.prototype.loginUserOTP = function (utilizador) {
        return this.httpClient.post(this.urlLoginOTP, utilizador, httpOptions);
    };
    StarterService.prototype.registerUser = function (utilizador) {
        return this.httpClient.post(this.urlRegister, utilizador, httpOptions);
    };
    StarterService.prototype.getTipoUtilizador = function (email) {
        return this.httpClient.get(this.urlLogin + '/' + email);
    };
    StarterService.prototype.getIdUtilizador = function (email) {
        return this.httpClient.get(this.urlLoginOTP + '/' + email);
    };
    StarterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StarterService);
    return StarterService;
}());



/***/ }),

/***/ "./src/app/starter/termos-de-uso.html":
/*!********************************************!*\
  !*** ./src/app/starter/termos-de-uso.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>POLÍTICA DE PRIVACIDADE E PROTEÇÃO DE DADOS PESSOAIS</h1>\r\n<div mat-dialog-content>\r\n    <p>\r\n        Ao efetuar o registo no nosso site toma conhecimento e dá consentimento de que os seus dados são recolhidos,\r\n        tratados, preservados e protegidos de acordo com a Política de Privacidade e de Protecção de Dados Pessoais.\r\n    </p>\r\n    <p>\r\n        Resumidamente, a nossa Política de Privacidade prevê, define e garante que:\r\n    </p>\r\n    <p>\r\n        - Seguimos as melhores práticas no âmbito da segurança e proteção dos dados pessoais, no sentido de acautelar a\r\n        proteção dos dados que nos são confiados pelos utilizadores que interagem com os nosso sites e usam os nossos\r\n        produtos, serviços ou conteúdos;\r\n    </p>\r\n    <p>\r\n        - No âmbito da actividade comercial da empresa, poderão ser recolhidos e tratados dados pessoais, cedidos pelos\r\n        utilizadores ou registados em cookies, permanentes ou de sessão, no decorrer da sua actividade no nosso site;\r\n    </p>\r\n    <p>\r\n        - Estes dados são naturalmente necessários à autenticação dos utilizadores, ao eficaz funcionamento dos\r\n        serviços, ao reconhecimento das suas preferências e definições quando regressam ao site;\r\n    </p>\r\n    <p>\r\n        - Em situação alguma os dados recolhidos serão utilizados para outra finalidade que não seja aquela para a qual\r\n        foi dado o consentimento por parte do seu titular.\r\n    </p>\r\n\r\n    <h6>ÂMBITO</h6>\r\n    <p>\r\n        A presente Política de Privacidade e Protecção de Dados Pessoais aplica-se, excepto quando indicado em\r\n        contrário,aos websites e serviços, adiante abreviadamente designado “Site”, detido pela SiCEncomendas,\r\n        adiante abreviadamente designada “Empresa”, nomeadamente:\r\n        Site SiC (site ainda não existente)\r\n    </p>\r\n\r\n    <h6>MOTIVAÇÃO</h6>\r\n    <p>\r\n        A presente Política de Privacidade tem como objectivo dar a conhecer aos Utilizadores do Site da Empresa as\r\n        regras gerais de privacidade e tratamento dos seus dados pessoais, recolhidos e tratados pela Empresa no \r\n        respeito e cumprimento da Lei de Proteção de Dados Pessoais - Lei n.o 67/98 de 26 de Outubro de 1998, \r\n        e da Directiva UE 2016/680 do Parlamento Europeu – Regulamento Geral de Protecção de Dados, de 27 de \r\n        abril de 2016.\r\n    </p>\r\n    <p>\r\n        A Empresa segue as melhores práticas no âmbito da segurança e proteção dos dados pessoais, no sentido de\r\n        acautelar a proteção dos dados que lhe são confiados pelos Utilizadores que interagem o Site e usam os \r\n        produtos, serviços ou conteúdos.\r\n    </p>\r\n\r\n    As regras previstas nesta Política de Privacidade complementam as disposições, em matéria de proteção e tratamento\r\n    de dados pessoais, previstas nos contratos que os Clientes, Parceiros e Fornecedores celebram com a Empresa, assim\r\n    como as regras previstas nos Termos e Condições que regulam a oferta de produtos e serviços do Site.<p></p>\r\n\r\n    Ao disponibilizar os seus dados pessoais, o Utilizador está a autorizar a recolha, uso e divulgação dos mesmos de\r\n    acordo com as regras aqui definidas.<p></p>\r\n\r\n    <h6>DEFINIÇÃO DE DADOS PESSOAIS</h6>\r\n    O conceito de “dados pessoais” é neste documento aplicável a qualquer informação relativa a uma pessoa singular\r\n    identificada ou identificável.<p></p>\r\n\r\n    É considerada identificável a pessoa que possa ser identificada direta ou indiretamente, designadamente por\r\n    referência a um número de identificação ou a um ou mais elementos específicos da sua identidade física, \r\n    fisiológica, psíquica, económica, cultural ou social.<p></p>\r\n\r\n    <h6>ABRANGÊNCIA</h6>\r\n    Esta Política de Privacidade aplica-se exclusivamente à recolha e tratamento de dados pessoais efetuados pela\r\n    Empresa, no âmbito da interacção do Utilizador com o próprio Site, tal como identificados nesta Política de\r\n    Privacidade.<p></p>\r\n\r\n    Nos Sites da Empresa poderá encontrar ligações externas de acesso a websites que são alheios à Empresa. A\r\n    disponibilização de tais ligações é efetuada de boa fé, não podendo a Empresa ser responsabilizada pela recolha e\r\n    tratamento de dados pessoais efetuados em websites externos, nem ser responsabilizada pelo rigor, credibilidade e\r\n    funcionalidade de websites pertencentes a entidades terceiras.<p></p>\r\n\r\n    <h6>RECOLHA DE DADOS</h6>\r\n    A Empresa procede à recolha e tratamento de dados pessoais, cedidos ou gerados pela actividade dos Utilizadores do\r\n    Site, com seu conhecimento e consentimento por via deste documento, estritamente no âmbito da sua actividade, na\r\n    medida em que sejam necessários à prestação dos serviços oferecidos pelo referido Site e no âmbito da actividade\r\n    comercial da Empresa tal como consta do seu Objecto Social.<p></p>\r\n\r\n    Os dados pessoais recolhidos são tratados informaticamente e no estrito cumprimento da legislação de proteção de\r\n    dados pessoais, sendo armazenados em base de dados criadas para o efeito.<p></p>\r\n\r\n    Em situação alguma os dados recolhidos serão utilizados para outra finalidade que não seja aquela para a qual foi\r\n    dado o consentimento por parte do seu titular.<p></p>\r\n\r\n    <h6>PERSISTÊNCIA</h6>\r\n    Sem prejuízo do cumprimento das normas legais relativas à conservação e transmissão de dados a entidades judiciais\r\n    devidamente mandatadas, a Empresa manterá registo dos dados pessoais recolhidos apenas na medida e pelo tempo\r\n    necessário ao fornecimento dos serviços oferecidos pelo Site.<p></p>\r\n\r\n    O período de tempo durante o qual os dados são armazenados e conservados varia de acordo com a finalidade para a\r\n    qual a informação é tratada.<p></p>\r\n\r\n    Sempre que não haja exigência legal especifica, os dados serão armazenados e conservados apenas pelo período mínimo\r\n    necessário para a finalidade a que se destinou a sua recolha, findo o qual os mesmos serão eliminados.<p></p>\r\n\r\n    <h6>ACESSO E ELIMINAÇÃO</h6>\r\n    Nos termos da Lei de Proteção de Dados Pessoais, é garantido ao titular dos dados o direito de acesso, atualização,\r\n    retificação ou eliminação dos seus dados pessoais, mediante pedido por escrito endereçado à Empresa.<p></p>\r\n\r\n    O pedido por escrito de acesso, rectificação ou eliminação de dados pessoais poderá ser submetido nas Definições do\r\n    Utilizador após efetuado o login no Site.<p></p>\r\n\r\n    <h6>SEGURANÇA</h6>\r\n    A Empresa assume o compromisso de pugnar pela proteção e segurança dos dados pessoais recolhidos, mantendo presente\r\n    a devida preocupação e empenho na defesa da privacidade dos seus Utilizadores e tomando as medidas necessárias a\r\n    evitar a sua difusão, perda, uso indevido, alteração, tratamento, acesso não autorizado ou qualquer outra forma\r\n    de uso ilícito.<p></p>\r\n\r\n    <h6>COOKIES</h6>\r\n    O Site da Empresa usa “cookies”, pequenos pedaços de código armazenados no dispositivo dos Utilizadores, para\r\n    optimizar a sua experiência de navegação e permitir determinado tipo de funcionalidades - por exemplo,\r\n    reconhecer que já se encontra autenticado.<p></p>\r\n\r\n    Cookies essenciais para a prestação de um serviço:\r\n    Cookies que permitem o uso de websites, aplicações e respetivas funcionalidades. Permitem a navegação no website e\r\n    a utilização das suas aplicações, tal como aceder a áreas seguras do website através de login. Sem estes cookies,\r\n    os serviços respetivos não podem ser prestados.<p></p>\r\n\r\n    A Informação recolhida neste processo é completamente anónima, e em nenhuma circunstância permite a identificação\r\n    dos Utilizadores.<p></p>\r\n\r\n    Se não está confortável com a utilização de \"cookies\", o utilizador pode gerir-los nas definições do seu navegador,\r\n    incluindo a possibilidade de impedir a sua activação (com eventual prejuízo da funcionalidade do site) ou\r\n    eliminá-los automaticamente do seu dispositivo quando terminar a sua visita ao site.<p></p>\r\n\r\n    <h6>TERCEIROS</h6>\r\n    Em nenhuma circunstância os dados pessoais cedidos pelos utilizadores ou registados em cookies no âmbito da sua\r\n    actividade nos Sites são transmitidos a entidades terceiras, sejam elas Parceiros, Clientes ou Fornecedores.<p></p>\r\n\r\n    Não serão divulgados quaisquer dados a terceiras entidades.<p></p>\r\n\r\n    <h6>ACTUALIZAÇÕES</h6>\r\n    O acesso aos produtos, serviços e conteúdos oferecidos pelos Sites da Empresa estão condicionados ao conhecimento\r\n    expresso, claro e transparente da presente Política de Privacidade.<p></p>\r\n\r\n    A Empresa reserva-se o direito de, em qualquer altura, proceder a ajustes ou alterações à presente Política de\r\n    Privacidade, sendo essas alterações devidamente publicitadas nos Sites da Empresa, e o acesso aos mesmos de novo\r\n    condicionado ao seu consentimento expresso e consciente.<p></p>\r\n\r\n    Ultima atualização: 3 de Janeiro de 2019\r\n\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button [mat-dialog-close]=\"false\">Recusar</button>\r\n    <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Aceitar</button>\r\n</div>"

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\joao reis\Documents\Isep\3ºano\LAPR5\lapr5\SiCCliente\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map