webpackJsonp(["toastr.module"],{

/***/ "../../../../../src/app/views/notifications/toastr/toastr-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastrRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toastr_component__ = __webpack_require__("../../../../../src/app/views/notifications/toastr/toastr.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__toastr_component__["a" /* ToastrComponent */],
        data: {
            title: 'Toastr'
        }
    }
];
var ToastrRoutingModule = /** @class */ (function () {
    function ToastrRoutingModule() {
    }
    ToastrRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ToastrRoutingModule);
    return ToastrRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/notifications/toastr/toastr.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">Notifications</div>\r\n    <div class=\"card-body\">\r\n      <button class=\"btn btn-success\" (click)=\"showSuccess()\">Try Success</button>\r\n      <button class=\"btn btn-danger\" (click)=\"showError()\">Try Error</button>\r\n      <button class=\"btn btn-warning\" (click)=\"showWarning()\">Try Warning</button>\r\n      <button class=\"btn btn-info\" (click)=\"showInfo()\">Try Info</button>\r\n      <button class=\"btn btn-primary\" (click)=\"showPrimary()\">Try Primary</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<toaster-container [toasterconfig]=\"toasterconfig\"></toaster-container>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/notifications/toastr/toastr.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastrComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_toaster_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastrComponent = /** @class */ (function () {
    function ToastrComponent(toasterService) {
        this.toasterconfig = new __WEBPACK_IMPORTED_MODULE_1_angular2_toaster_angular2_toaster__["a" /* ToasterConfig */]({
            tapToDismiss: true,
            timeout: 5000
        });
        this.toasterService = toasterService;
    }
    ToastrComponent.prototype.showSuccess = function () {
        this.toasterService.pop('success', 'Success Toaster', 'This is toaster description');
    };
    ToastrComponent.prototype.showError = function () {
        this.toasterService.pop('error', 'Error Toaster', 'This is toaster description');
    };
    ToastrComponent.prototype.showWarning = function () {
        this.toasterService.pop('warning', 'Warning Toaster', 'This is toaster description');
    };
    ToastrComponent.prototype.showInfo = function () {
        this.toasterService.pop('info', 'Info Toaster', 'This is toaster description');
    };
    ToastrComponent.prototype.showPrimary = function () {
        this.toasterService.pop('primary', 'Primary Toaster', 'This is toaster description');
    };
    ToastrComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/notifications/toastr/toastr.component.html"),
            styles: [__webpack_require__("../../../../../src/scss/vendors/toastr/toastr.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_toaster_angular2_toaster__["c" /* ToasterService */]])
    ], ToastrComponent);
    return ToastrComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/notifications/toastr/toastr.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrModule", function() { return ToastrModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toastr_component__ = __webpack_require__("../../../../../src/app/views/notifications/toastr/toastr.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toastr_routing_module__ = __webpack_require__("../../../../../src/app/views/notifications/toastr/toastr-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Toastr


//Routing

var ToastrModule = /** @class */ (function () {
    function ToastrModule() {
    }
    ToastrModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__toastr_routing_module__["a" /* ToastrRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2_angular2_toaster_angular2_toaster__["b" /* ToasterModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__toastr_component__["a" /* ToastrComponent */]
            ]
        })
    ], ToastrModule);
    return ToastrModule;
}());



/***/ })

});
//# sourceMappingURL=toastr.module.chunk.js.map