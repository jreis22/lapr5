(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["starter-starter-module"],{

/***/ "./src/app/material-component/configurador/configurador.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/material-component/configurador/configurador.module.ts ***!
  \************************************************************************/
/*! exports provided: ConfiguradorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguradorModule", function() { return ConfiguradorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ConfiguradorModule = /** @class */ (function () {
    function ConfiguradorModule() {
    }
    ConfiguradorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: []
        })
    ], ConfiguradorModule);
    return ConfiguradorModule;
}());



/***/ }),

/***/ "./src/app/starter/starter.module.ts":
/*!*******************************************!*\
  !*** ./src/app/starter/starter.module.ts ***!
  \*******************************************/
/*! exports provided: StarterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarterModule", function() { return StarterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../demo-material-module */ "./src/app/demo-material-module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _starter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./starter.component */ "./src/app/starter/starter.component.ts");
/* harmony import */ var _starter_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./starter.routing */ "./src/app/starter/starter.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_component_configurador_configurador_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../material-component/configurador/configurador.module */ "./src/app/material-component/configurador/configurador.module.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var StarterModule = /** @class */ (function () {
    function StarterModule() {
    }
    StarterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _demo_material_module__WEBPACK_IMPORTED_MODULE_3__["DemoMaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _material_component_configurador_configurador_module__WEBPACK_IMPORTED_MODULE_8__["ConfiguradorModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_starter_routing__WEBPACK_IMPORTED_MODULE_6__["StarterRoutes"])
            ],
            providers: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"], _auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]],
            declarations: [_starter_component__WEBPACK_IMPORTED_MODULE_5__["StarterComponent"]]
        })
    ], StarterModule);
    return StarterModule;
}());



/***/ }),

/***/ "./src/app/starter/starter.routing.ts":
/*!********************************************!*\
  !*** ./src/app/starter/starter.routing.ts ***!
  \********************************************/
/*! exports provided: StarterRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarterRoutes", function() { return StarterRoutes; });
/* harmony import */ var _starter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./starter.component */ "./src/app/starter/starter.component.ts");

var StarterRoutes = [
    {
        path: '',
        component: _starter_component__WEBPACK_IMPORTED_MODULE_0__["StarterComponent"]
    },
    {
        path: 'configurador',
        loadChildren: '../material-component/configurador/configurador.component'
    }
];


/***/ })

}]);
//# sourceMappingURL=starter-starter-module.js.map