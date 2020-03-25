webpackJsonp(["registration.module"],{

/***/ "../../../../../src/app/services/registerValidator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterEqualValidator; });
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


var RegisterEqualValidator = /** @class */ (function () {
    function RegisterEqualValidator() {
    }
    RegisterEqualValidator_1 = RegisterEqualValidator;
    RegisterEqualValidator.prototype.validate = function (control) {
        var controlTocompare = control.parent.get(this.validateEqual);
        if (controlTocompare && controlTocompare.value !== control.value) {
            return { 'notEqual': true };
        }
        return null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], RegisterEqualValidator.prototype, "validateEqual", void 0);
    RegisterEqualValidator = RegisterEqualValidator_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[validateEqual]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALIDATORS"], useExisting: RegisterEqualValidator_1, multi: true }
            ]
        })
    ], RegisterEqualValidator);
    return RegisterEqualValidator;
    var RegisterEqualValidator_1;
}());



/***/ }),

/***/ "../../../../../src/app/views/registration/datafilterpipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationDataFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RegistrationDataFilterPipe = /** @class */ (function () {
    function RegistrationDataFilterPipe() {
    }
    RegistrationDataFilterPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) { return row.FIRST_NAME.toLowerCase().indexOf(query.toLowerCase()) > -1; });
        }
        return array;
    };
    RegistrationDataFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
            name: 'dataFilter'
        })
    ], RegistrationDataFilterPipe);
    return RegistrationDataFilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/views/registration/registration-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration_component__ = __webpack_require__("../../../../../src/app/views/registration/registration.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__registration_component__["a" /* RegistrationComponent */],
        data: {
            title: 'Registration'
        }
    }
];
var RegistrationRoutingModule = /** @class */ (function () {
    function RegistrationRoutingModule() {
    }
    RegistrationRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], RegistrationRoutingModule);
    return RegistrationRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<toaster-container [toasterconfig]=\"toasterconfig\"></toaster-container>\r\n<ng4-loading-spinner></ng4-loading-spinner>\r\n<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">Registration\r\n      <button class=\"btn btn-primary float-right\" type=\"button\" data-toggle=\"modal\" tooltip=\"Add User\"\r\n        (click)=\"successModal.show(); openAddUserModal();\">\r\n        <i class=\"fa fa-plus fa-lg\"></i>\r\n      </button>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row mb-3\">\r\n        <div class=\"col-md-4 offset-md-8\">\r\n          <div class=\"input-group\">\r\n\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"filterQuery\" placeholder=\"Search by name\" />\r\n            <span class=\"input-group-append\">\r\n              <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i></button>\r\n            </span>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <table class=\"table table-striped\" [mfData]=\"userlist | dataFilter : filterQuery\" #mf=\"mfDataTable\"\r\n        [mfRowsOnPage]=\"5\">\r\n        <thead>\r\n          <tr>\r\n            <th>\r\n              #\r\n            </th>\r\n            <th>\r\n              <mfDefaultSorter by=\"name\">Name</mfDefaultSorter>\r\n            </th>\r\n            <th>\r\n              User Type\r\n            </th>\r\n            <th>\r\n              Phone\r\n            </th>\r\n            <th>\r\n              Email\r\n            </th>\r\n            <th>\r\n              Address\r\n            </th>\r\n            <th>\r\n              Action\r\n            </th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let user of mf.data\">\r\n            <td><input type=\"checkbox\" /></td>\r\n            <!-- <td><img [src]=\"item.img\" height=\"30px\" width=\"30px\" style=\"border-radius: 5px;\"> {{item.name}}</td> -->\r\n            <td> {{user.FIRST_NAME}} {{user.LAST_NAME}}</td>\r\n            <td *ngIf=\"user.ROLE == '1'\">Admin</td>\r\n            <td *ngIf=\"user.ROLE == '2'\">Venue Provider</td>\r\n            <td *ngIf=\"user.ROLE == '3'\">User</td>\r\n            <td><i class=\"fa fa-whatsapp\" aria-hidden=\"true\"></i> {{user.PHONE}}</td>\r\n            <td><a routerLink=\"/compose-mail\">{{user.EMAIL}}</a></td>\r\n            <td><i class=\"fa fa-map-marker\"></i> {{user.ADDRESS}}</td>\r\n            <td> <button class=\"btn btn-primary btn-sm\" style=\"margin-bottom: 4px\" type=\"button\" data-toggle=\"modal\"\r\n                tooltip=\"Edit User\" (click)=\"successModal.show(); openEditUserModal(user)\">\r\n                <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\r\n              </button>\r\n              <button class=\"btn btn-danger btn-sm\" style=\"margin-bottom: 4px\" type=\"button\" data-toggle=\"modal\"\r\n                tooltip=\"Delete user\" (click)=\"openDataRestaurant(user,template)\">\r\n                <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </td>\r\n            <ng-template #template>\r\n              <div class=\"modal-body text-center\">\r\n                <p class=\"confirm-Delete\">Are you sure for Delete <span>{{user.FIRST_NAME}} {{user.LAST_NAME}}</span>\r\n                  user?\r\n                </p>\r\n                <button type=\"button\" class=\"btn btn-success\" (click)=\"confirm()\">Yes</button>\r\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"decline()\">No</button>\r\n              </div>\r\n            </ng-template>\r\n          </tr>\r\n        </tbody>\r\n        <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\r\n            </td>\r\n          </tr>\r\n        </tfoot>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\" [config]=\"{backdrop: 'static',keyboard: 'false'}\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <form #userRegiForm=\"ngForm\" name=\"updateUserForm\" novalidate>\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Registration</h4>\r\n          <button type=\"button\" class=\"close\" (click)=\"successModal.hide()\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body\">\r\n                <div class=\"form-group row\">\r\n                  <!-- <div class=\"col-md-4\">\r\n                                      <label for=\"userID\">User Id :</label>\r\n                                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.userID\" name=\"userID\" #userID=\"ngModel\" placeholder=\"Enter userID\" readonly>\r\n                                      <span class=\"help-block\" style=\"color: red;\" *ngIf=\"userID.errors && (userID.touched || userForm.submitted)\">User ID is\r\n                                          required</span>\r\n                                  </div> -->\r\n                  <div class=\"col-md-4\">\r\n                    <label for=\"fname\">First name :</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter First name\" [(ngModel)]=\"user.FIRST_NAME\"\r\n                      name=\"FIRST_NAME\" #FIRST_NAME=\"ngModel\" required>\r\n                    <span class=\"help-block\" style=\"color: red;\"\r\n                      *ngIf=\"FIRST_NAME.errors && (FIRST_NAME.touched || userRegiForm.submitted)\">First Name is\r\n                      required</span>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <label for=\"lname\">Last name :</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Last name\" [(ngModel)]=\"user.LAST_NAME\"\r\n                      name=\"LAST_NAME\" #LAST_NAME=\"ngModel\" required>\r\n                    <span class=\"help-block\" style=\"color: red;\"\r\n                      *ngIf=\"LAST_NAME.errors && (LAST_NAME.touched || userRegiForm.submitted)\">Last Name is\r\n                      required</span>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <label for=\"type\">User Role :\r\n                    </label>\r\n                    <ng-select [items]=\"userRoles\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select User Role\"\r\n                      [(ngModel)]=\"user.ROLE\" #ROLE=\"ngModel\" name=\"ROLE\" required>\r\n                    </ng-select>\r\n                    <span class=\"help-block\" style=\"color: red;\"\r\n                      *ngIf=\"ROLE.errors && (ROLE.touched || userRegiForm.submitted)\">User role is\r\n                      required</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <div class=\"col-md-4\">\r\n                    <label for=\"email\">Email :</label>\r\n                    <input type=\"email\" class=\"form-control\" [(ngModel)]=\"user.EMAIL\" name=\"EMAIL\" #EMAIL=\"ngModel\"\r\n                      placeholder=\"Enter email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required>\r\n                    <span class=\"help-block\" style=\"color: red;\"\r\n                      *ngIf=\"EMAIL.errors && (EMAIL.valid || EMAIL.dirty || EMAIL.touched || userRegiForm.submitted)\">Email\r\n                      is required and format should be\r\n                      <i>john@doe.com</i>.</span>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <label for=\"gender\">Gender :\r\n                    </label>\r\n                    <ng-select [items]=\"genders\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Gender\"\r\n                      [(ngModel)]=\"user.GENDER\" #GENDER=\"ngModel\" name=\"GENDER\" required>\r\n                    </ng-select>\r\n                    <span class=\"help-block\" style=\"color: red;\"\r\n                      *ngIf=\"GENDER.errors && (GENDER.touched || userRegiForm.submitted)\">Gender is\r\n                      required</span>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <label for=\"phone\">Phone :</label>\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.PHONE\" name=\"PHONE\" #PHONE=\"ngModel\"\r\n                      (keypress)=\"keyPress($event)\" minlength=10 maxlength=10 placeholder=\"Enter your phone\">\r\n                    <span class=\"help-block\" style=\"color: red;\"\r\n                      *ngIf=\"PHONE.errors && (PHONE.touched || userRegiForm.submitted)\">Phone is\r\n                      required. </span>\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <div class=\"col-md-4\">\r\n                    <label for=\"address\">Address :</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Address\" [(ngModel)]=\"user.ADDRESS\"\r\n                      name=\"ADDRESS\" #ADDRESS=\"ngModel\" required>\r\n                    <span class=\"help-block\" style=\"color: red;\"\r\n                      *ngIf=\"ADDRESS.errors && (ADDRESS.touched || userRegiForm.submitted)\">Address is required</span>\r\n                  </div>\r\n                  <div class=\"col-md-4\" *ngIf=\"user.ROLE != 1 && user.ROLE != 3\">\r\n                    <label for=\"address\">Company Name :</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Company Name\"\r\n                      [(ngModel)]=\"user.COMP_NAME\" name=\"COMP_NAME\" #COMP_NAME=\"ngModel\" required>\r\n                    <span class=\"help-block\" style=\"color: red;\"\r\n                      *ngIf=\"COMP_NAME.errors && (COMP_NAME.touched || userRegiForm.submitted)\">Company Name is\r\n                      required</span>\r\n                  </div>\r\n                  <div class=\"col-md-4\" *ngIf=\"user.ROLE != 1 && user.ROLE != 2\">\r\n                    <label for=\"address\">Qualification:</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Qaulification\"\r\n                      [(ngModel)]=\"user.QUALIFICATION\" name=\"QUALIFICATION\" #QUALIFICATION=\"ngModel\" required>\r\n                    <span class=\"help-block\" style=\"color: red;\"\r\n                      *ngIf=\"QUALIFICATION.errors && (QUALIFICATION.touched || userRegiForm.submitted)\">Qaulification is\r\n                      required</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <div class=\"col-md-4\" *ngIf=\"user._id === undefined\">\r\n                    <label for=\"password\">Password :</label>\r\n                    <div class=\"input-group\">\r\n                      <input [type]=\"passwordType\" class=\"form-control\" [(ngModel)]=\"user.PASSWORD\" name=\"PASSWORD\"\r\n                        #PASSWORD=\"ngModel\" (change)=\"confirmPassword.control.updateValueAndValidity()\"\r\n                        placeholder=\"Enter password\" required>\r\n                      <div class=\"input-group-append\">\r\n                        <span class=\"input-group-text\" (click)=\"togglePassword()\"><i [class]=\"eyeIcon\"></i></span>\r\n                      </div>\r\n                    </div>\r\n                    <span class=\"help-block\" style=\"color: red;\"\r\n                      *ngIf=\"PASSWORD.errors && (PASSWORD.touched || PASSWORD.dirty && userRegiForm.submitted)\">Password\r\n                      is required</span>\r\n                  </div>\r\n                  <div class=\"col-md-4\" *ngIf=\"user._id === undefined\">\r\n                    <label for=\"password\">Repeat Password :</label>\r\n                    <div class=\"input-group\">\r\n                      <input [type]=\"passwordType2\" class=\"form-control\" [(ngModel)]=\"user.confirmPassword\"\r\n                        name=\"confirmPassword\" #confirmPassword=\"ngModel\" validateEqual=\"PASSWORD\"\r\n                        placeholder=\"Repeat password\" required>\r\n                      <div class=\"input-group-append\">\r\n                        <span class=\"input-group-text\" (click)=\"togglePassword2()\"><i [class]=\"eyeIcon2\"></i></span>\r\n                      </div>\r\n                    </div>\r\n                    <span class=\"help-block\" style=\"color: red;\"\r\n                      *ngIf=\"confirmPassword.errors && (confirmPassword.touched || confirmPassword.dirty && confirmPassword.errors?.required && userRegiForm.submitted)\">Password\r\n                      is required</span>\r\n                    <span class=\"help-block\" style=\"color: red;\"\r\n                      *ngIf=\"confirmPassword.errors && (confirmPassword.touched || confirmPassword.dirty && confirmPassword.errors?.notEqual && !confirmPassword.errors?.required)\">Password\r\n                      is not match</span>\r\n                    <!-- <p class=\"bg-danger\" *ngIf=\"confirmPassword.errors && (confirmPassword.touched || confirmPassword.dirty && confirmPassword.errors?.required && userForm.submitted)\">Password is required.</p>\r\n                    <p class=\"bg-danger\" *ngIf=\"confirmPassword.errors && (confirmPassword.touched || confirmPassword.dirty && confirmPassword.errors?.notEqual && !confirmPassword.errors?.required)\">Password is not match.</p> -->\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"successModal.hide()\">Close</button>\r\n          <button type=\"button\" class=\"btn btn-primary px-4\" [disabled]=\"!userRegiForm.form.valid\"\r\n            *ngIf=\"user._id === undefined\" (click)=\"createUser(); successModal.hide()\">Save</button>\r\n          <button type=\"button\" class=\"btn btn-primary px-4\" [disabled]=\"!userRegiForm.form.valid\"\r\n            *ngIf=\"user._id != undefined\" (click)=\"updateUser(); successModal.hide()\">Update</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <!-- /.modal-content -->\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n</div>\r\n<!-- /.modal -->\r\n"

/***/ }),

/***/ "../../../../../src/app/views/registration/registration.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
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






var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(modalService, spinnerService, toasterService, _user_service, _router) {
        this.modalService = modalService;
        this.spinnerService = spinnerService;
        this.toasterService = toasterService;
        this._user_service = _user_service;
        this._router = _router;
        this.passwordType = 'password';
        this.passwordShown = false;
        this.eyeIcon = 'fa fa-eye';
        this.passwordType2 = 'password';
        this.passwordShown2 = false;
        this.eyeIcon2 = 'fa fa-eye';
        this.toasterconfig = new __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["a" /* ToasterConfig */]({
            tapToDismiss: true,
            timeout: 5000
        });
        this.user = {};
        this.userlist = [];
        this.userRoles = [
            { label: "Admin", value: 1 },
            { label: "Venue Provider", value: 2 },
            { label: "User", value: 3 }
        ];
        this.genders = [
            { label: "Male", value: "male" },
            { label: "Female", value: "female" }
        ];
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.getAllRegisterdUsers();
    };
    RegistrationComponent.prototype.togglePassword = function () {
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
    RegistrationComponent.prototype.togglePassword2 = function () {
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
    RegistrationComponent.prototype.openAddUserModal = function () {
        this.user = {};
    };
    RegistrationComponent.prototype.openEditUserModal = function (user) {
        this.user = user;
    };
    RegistrationComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode !== 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    RegistrationComponent.prototype.createUser = function () {
        var _this = this;
        this.spinnerService.show();
        this.loading = true;
        this._user_service.createUser(this.user)
            .subscribe(function (data) {
            if (data.verify == '1') {
                _this.spinnerService.hide();
                _this.toasterService.pop('success', 'Done', 'Registration Done');
                _this.getAllRegisterdUsers();
            }
            else {
                _this.spinnerService.hide();
                _this.toasterService.pop('error', 'Oopps..', 'Something went wrong');
            }
        }, function (error) {
            _this.spinnerService.hide();
            // this.showError(error.statusText);
            _this.loading = false;
        });
    };
    RegistrationComponent.prototype.getAllRegisterdUsers = function () {
        var _this = this;
        this.loading = true;
        this._user_service.getAllRegisterdUsers()
            .subscribe(function (data) {
            if (data.verify == '1') {
                _this.userlist = data.data;
            }
            else {
                _this.toasterService.pop('error', 'ooops..', 'Something went wrong !');
            }
        }, function (error) {
            _this.toasterService.pop('error', 'Server Error', 'Something went wrong !');
            _this.loading = false;
        });
    };
    RegistrationComponent.prototype.openDataRestaurant = function (item, template) {
        this.user = item;
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    };
    RegistrationComponent.prototype.confirm = function () {
        this.deleteUser(this.user);
        this.modalRef.hide();
    };
    RegistrationComponent.prototype.decline = function () {
        this.modalRef.hide();
    };
    RegistrationComponent.prototype.updateUser = function () {
        var _this = this;
        this.spinnerService.show();
        this.loading = true;
        this._user_service.updateUser(this.user)
            .subscribe(function (data) {
            if (data.verify == '1') {
                _this.spinnerService.hide();
                _this.toasterService.pop('success', 'Done', 'User Updated');
                _this.getAllRegisterdUsers();
            }
            else {
                _this.spinnerService.hide();
                _this.toasterService.pop('error', 'ooops..', 'Something went wrong !');
            }
        }, function (error) {
            _this.spinnerService.hide();
            _this.toasterService.pop('error', 'Server Error', 'Something went wrong !');
            _this.loading = false;
        });
    };
    RegistrationComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.loading = true;
        this._user_service.deleteUser(user)
            .subscribe(function (data) {
            if (data.verify == '1') {
                _this.toasterService.pop('success', 'Done', 'User Updated');
                _this.getAllRegisterdUsers();
            }
            else {
                _this.toasterService.pop('error', 'ooops..', 'Something went wrong !');
            }
        }, function (error) {
            _this.toasterService.pop('error', 'Server Error', 'Something went wrong !');
            _this.loading = false;
        });
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__("../../../../../src/app/views/registration/registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/registration/registration.component.scss"), __webpack_require__("../../../../../src/scss/vendors/toastr/toastr.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__["b" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner__["Ng4LoadingSpinnerService"], __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["c" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_1_app_services__["b" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/registration/registration.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationModule", function() { return RegistrationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration_routing_module__ = __webpack_require__("../../../../../src/app/views/registration/registration-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registration_component__ = __webpack_require__("../../../../../src/app/views/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_select_ng_select__ = __webpack_require__("../../../../@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__datafilterpipe__ = __webpack_require__("../../../../../src/app/views/registration/datafilterpipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_toaster_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_services_registerValidator__ = __webpack_require__("../../../../../src/app/services/registerValidator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var RegistrationModule = /** @class */ (function () {
    function RegistrationModule() {
    }
    RegistrationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__registration_routing_module__["a" /* RegistrationRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["c" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_angular2_datatable__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__ng_select_ng_select__["a" /* NgSelectModule */],
                __WEBPACK_IMPORTED_MODULE_9_angular2_toaster_angular2_toaster__["b" /* ToasterModule */],
                __WEBPACK_IMPORTED_MODULE_10_ng4_loading_spinner__["Ng4LoadingSpinnerModule"].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__registration_component__["a" /* RegistrationComponent */], __WEBPACK_IMPORTED_MODULE_8__datafilterpipe__["a" /* RegistrationDataFilterPipe */], __WEBPACK_IMPORTED_MODULE_11_app_services_registerValidator__["a" /* RegisterEqualValidator */]]
        })
    ], RegistrationModule);
    return RegistrationModule;
}());



/***/ })

});
//# sourceMappingURL=registration.module.chunk.js.map