webpackJsonp(["change-password.module"],{

/***/ "../../../../../src/app/services/passwordvalidator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordEqualValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChangePasswordEqualValidator = /** @class */ (function () {
    function ChangePasswordEqualValidator() {
    }
    ChangePasswordEqualValidator_1 = ChangePasswordEqualValidator;
    ChangePasswordEqualValidator.prototype.validate = function (control) {
        var controlTocompare = control.parent.get(this.validateEqual);
        if (controlTocompare && controlTocompare.value !== control.value) {
            return { 'notEqual': true };
        }
        return null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ChangePasswordEqualValidator.prototype, "validateEqual", void 0);
    ChangePasswordEqualValidator = ChangePasswordEqualValidator_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[validateEqual]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALIDATORS"], useExisting: ChangePasswordEqualValidator_1, multi: true }
            ]
        })
    ], ChangePasswordEqualValidator);
    return ChangePasswordEqualValidator;
    var ChangePasswordEqualValidator_1;
}());



/***/ }),

/***/ "../../../../../src/app/views/change-password/change-password-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change_password_component__ = __webpack_require__("../../../../../src/app/views/change-password/change-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__change_password_component__["a" /* ChangePasswordComponent */],
        data: {
            title: 'Change Password'
        }
    }
];
var ChangePasswordRoutingModule = /** @class */ (function () {
    function ChangePasswordRoutingModule() {
    }
    ChangePasswordRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ChangePasswordRoutingModule);
    return ChangePasswordRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "<ng4-loading-spinner></ng4-loading-spinner>\r\n<div class=\"container\">\r\n  <div class=\"row \">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"mb-3\">Change Password</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <p class=\"text-muted\"></p>\r\n          <form name=\"newpasswordForm\" #newpasswordForm=\"ngForm\" novalidate>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-md-12\">\r\n                <label for=\"password\">Enter New Password :</label>\r\n                <div class=\"input-group mb-4\">\r\n                  <input [type]=\"passwordType\" class=\"form-control\" [(ngModel)]=\"user.PASSWORD\" name=\"PASSWORD\"\r\n                    #PASSWORD=\"ngModel\" (change)=\"newpasswordForm.control.updateValueAndValidity()\"\r\n                    placeholder=\"Enter New password\" required>\r\n                  <div class=\"input-group-append\">\r\n                    <span class=\"input-group-text\" (click)=\"togglePassword()\"><i [class]=\"eyeIcon\"></i></span>\r\n                  </div>\r\n                </div>\r\n                <span class=\"help-block\" style=\"color: red;\"\r\n                  *ngIf=\"PASSWORD.errors && (PASSWORD.touched || PASSWORD.dirty && newpasswordForm.submitted)\">Password\r\n                  is required</span>\r\n              </div>\r\n              <div class=\"col-md-12 form-group\">\r\n                <label for=\"password\">Retype New Password :</label>\r\n                <div class=\"  input-group mb-4\">\r\n                  <input [type]=\"passwordType2\" class=\"form-control\" [(ngModel)]=\"user.confirmPassword\"\r\n                    name=\"confirmPassword\" #confirmPassword=\"ngModel\" validateEqual=\"PASSWORD\"\r\n                    placeholder=\"Retype password\" required>\r\n                  <div class=\"input-group-append\">\r\n                    <span class=\"input-group-text\" (click)=\"togglePassword2()\"><i [class]=\"eyeIcon2\"></i></span>\r\n                  </div>\r\n                </div>\r\n                <span class=\"help-block\" style=\"color: red;\"\r\n                  *ngIf=\"confirmPassword.errors && (confirmPassword.touched || confirmPassword.dirty && confirmPassword.errors?.required && userRegiForm.submitted)\">Password\r\n                  is required</span>\r\n                <span class=\"help-block\" style=\"color: red;\"\r\n                  *ngIf=\"confirmPassword.errors && (confirmPassword.touched || confirmPassword.dirty && confirmPassword.errors?.notEqual && !confirmPassword.errors?.required)\">Password\r\n                  is not match</span>\r\n              </div>\r\n            </div>\r\n      \r\n          </form>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <button type=\"button\" [disabled]=\"!newpasswordForm.valid\" (click)=\"changePassword()\"\r\n                class=\"btn btn-primary btn-block btn-ch mb-3\">Submit</button>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <button class=\"btn btn-block btn-ch\" routerLink=\"/dashboard\">Cancel</button>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<toaster-container [toasterconfig]=\"toasterconfig\"></toaster-container>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/change-password/change-password.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/change-password/change-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(authenticationService, formBuilder, toasterService, userService, router, SpinnerService) {
        this.authenticationService = authenticationService;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
        this.SpinnerService = SpinnerService;
        this.passwordType = 'password';
        this.passwordShown = false;
        this.eyeIcon = 'fa fa-eye';
        this.passwordType2 = 'password';
        this.passwordShown2 = false;
        this.eyeIcon2 = 'fa fa-eye';
        this.user = {};
        this.toasterconfig = new __WEBPACK_IMPORTED_MODULE_1_angular2_toaster__["a" /* ToasterConfig */]({
            tapToDismiss: true,
            timeout: 10000
        });
        this.toasterService = toasterService;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent.prototype.togglePassword = function () {
        if (this.passwordShown) {
            this.passwordShown = false;
            this.passwordType = 'password';
            this.eyeIcon = "fa fa-eye";
        }
        else {
            this.passwordShown = true;
            this.passwordType = 'text';
            this.eyeIcon = "fa fa-eye-slash";
        }
    };
    ChangePasswordComponent.prototype.togglePassword2 = function () {
        if (this.passwordShown2) {
            this.passwordShown2 = false;
            this.passwordType2 = 'password';
            this.eyeIcon2 = "fa fa-eye";
        }
        else {
            this.passwordShown2 = true;
            this.passwordType2 = 'text';
            this.eyeIcon2 = "fa fa-eye-slash";
        }
    };
    ChangePasswordComponent.prototype.changePassword = function () {
        var _this = this;
        this.SpinnerService.show();
        this.userService.changePassword(this.user)
            .subscribe(function (data) {
            if (data.verify != 1) {
                _this.SpinnerService.hide();
                _this.toasterService.pop('error', 'Error', 'Email not match');
            }
            else {
                _this.SpinnerService.hide();
                _this.toasterService.pop('success', 'Done', 'Password has been Change...');
                _this.authenticationService.isLogout();
                _this.router.navigate(['/pages/home']);
            }
        }, function (error) {
            _this.SpinnerService.hide();
            console.log(error);
        });
    };
    ;
    ChangePasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__("../../../../../src/app/views/change-password/change-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/change-password/change-password.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_app_services__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_angular2_toaster__["c" /* ToasterService */], __WEBPACK_IMPORTED_MODULE_3_app_services__["b" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/change-password/change-password.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordModule", function() { return ChangePasswordModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__change_password_routing_module__ = __webpack_require__("../../../../../src/app/views/change-password/change-password-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__change_password_component__ = __webpack_require__("../../../../../src/app/views/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_services_passwordvalidator__ = __webpack_require__("../../../../../src/app/services/passwordvalidator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ChangePasswordModule = /** @class */ (function () {
    function ChangePasswordModule() {
    }
    ChangePasswordModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__change_password_routing_module__["a" /* ChangePasswordRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__["Ng4LoadingSpinnerModule"].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__change_password_component__["a" /* ChangePasswordComponent */], __WEBPACK_IMPORTED_MODULE_7_app_services_passwordvalidator__["a" /* ChangePasswordEqualValidator */]]
        })
    ], ChangePasswordModule);
    return ChangePasswordModule;
}());



/***/ })

});
//# sourceMappingURL=change-password.module.chunk.js.map