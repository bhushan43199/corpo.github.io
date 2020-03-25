webpackJsonp(["pages.module"],{

/***/ "../../../../../src/app/services/pagesValidator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesEqualValidator; });
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


var PagesEqualValidator = /** @class */ (function () {
    function PagesEqualValidator() {
    }
    PagesEqualValidator_1 = PagesEqualValidator;
    PagesEqualValidator.prototype.validate = function (control) {
        var controlTocompare = control.parent.get(this.validateEqual);
        if (controlTocompare && controlTocompare.value !== control.value) {
            return { 'notEqual': true };
        }
        return null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PagesEqualValidator.prototype, "validateEqual", void 0);
    PagesEqualValidator = PagesEqualValidator_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[validateEqual]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALIDATORS"], useExisting: PagesEqualValidator_1, multi: true }
            ]
        })
    ], PagesEqualValidator);
    return PagesEqualValidator;
    var PagesEqualValidator_1;
}());



/***/ }),

/***/ "../../../../../src/app/views/pages/404.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"clearfix\">\r\n          <h1 class=\"float-left display-3 mr-4\">404</h1>\r\n          <h4 class=\"pt-3\">Oops! You're lost.</h4>\r\n          <p class=\"text-muted\">The page you are looking for was not found.</p>\r\n        </div>\r\n        <div class=\"input-prepend input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n          </div>\r\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\r\n          <span class=\"input-group-append\">\r\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/pages/404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return P404Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var P404Component = /** @class */ (function () {
    function P404Component() {
    }
    P404Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/pages/404.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], P404Component);
    return P404Component;
}());



/***/ }),

/***/ "../../../../../src/app/views/pages/500.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"clearfix\">\r\n          <h1 class=\"float-left display-3 mr-4\">500</h1>\r\n          <h4 class=\"pt-3\">Houston, we have a problem!</h4>\r\n          <p class=\"text-muted\">The page you are looking for is temporarily unavailable.</p>\r\n        </div>\r\n        <div class=\"input-prepend input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n          </div>\r\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\r\n          <span class=\"input-group-append\">\r\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/pages/500.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return P500Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var P500Component = /** @class */ (function () {
    function P500Component() {
    }
    P500Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/pages/500.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], P500Component);
    return P500Component;
}());



/***/ }),

/***/ "../../../../../src/app/views/pages/forgotpassword.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<toaster-container [toasterconfig]=\"toasterconfig\"></toaster-container>\r\n<ng4-loading-spinner></ng4-loading-spinner>\r\n<form >\r\n<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-8\">\r\n        <div class=\"card-group mb-4\">\r\n          <div class=\"card p-4\">\r\n            <div class=\"card-body\">\r\n              <h1>Forgot Password</h1>\r\n              <p class=\"text-muted\">Forgot Your Password ?</p>\r\n              <form name=\"form\" (ngSubmit)=\"f.form.valid && forgot()\" #f=\"ngForm\" novalidate id=\"form_login\">\r\n                <div class=\"input-group mb-3\">\r\n                    <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\r\n                    </div>\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"fpObj.EMAIL\" name=\"EMAIL\" #EMAIL=\"ngModel\"  placeholder=\"Enter Registered Email\" autocomplete=\"off\" required>\r\n                \r\n                  </div>\r\n                  <span class=\"help-block\" style=\"color: red;\"\r\n                  *ngIf=\"EMAIL.errors && (EMAIL.valid || EMAIL.dirty || EMAIL.touched || f.submitted)\">Email\r\n                  is required and format should be\r\n                  <i>john@doe.xyz</i></span>\r\n                <div class=\"row\">\r\n                    <div class=\"col-6\">\r\n                        <button type=\"submit\" class=\"btn btn-primary px-4\" [disabled]= '!f.form.valid' >Submit</button>\r\n                    </div>\r\n                    <div class=\"col-6 text-right\">\r\n                        <button type=\"button\" class=\"btn btn-link px-0\" routerLink=\"/pages/login\">Back to Login</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n\r\n            </div>\r\n          </div>\r\n         \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/views/pages/forgotpassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(_router, _route, authenticationService, spinnerService, userService, toasterService) {
        this._router = _router;
        this._route = _route;
        this.authenticationService = authenticationService;
        this.spinnerService = spinnerService;
        this.userService = userService;
        this.fpObj = {};
        this.returnUrl = "";
        this.loading = false;
        this.passwordType = 'password';
        this.passwordShown = false;
        this.eyeIcon = 'fa fa-eye';
        this.user = {};
        this.toasterconfig = new __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["a" /* ToasterConfig */]({
            tapToDismiss: true,
            timeout: 5000
        });
        this.toasterService = toasterService;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        // this.authenticationService.isLogout();
        // this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
        // this._router.navigate([this.returnUrl]);
    };
    ForgotPasswordComponent.prototype.togglePassword = function () {
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
    ForgotPasswordComponent.prototype.forgot = function () {
        var _this = this;
        this.spinnerService.show();
        this.userService.forgotPassword(this.fpObj)
            .subscribe(function (data) {
            if (data.verify == '1') {
                _this.spinnerService.hide();
                _this.toasterService.pop('success', 'Done', 'Check your Email');
                _this._router.navigate(['/pages/login']);
            }
            else {
                _this.spinnerService.hide();
                _this.toasterService.pop('error', 'Oopps..', 'Something went wrong');
            }
        }, function (error) {
            _this.toasterService.pop('error', 'Oppss..', 'Something went wrong!');
            _this.spinnerService.hide();
            _this.loading = false;
        });
    };
    ForgotPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/pages/forgotpassword.component.html"),
            styles: [__webpack_require__("../../../../../src/scss/vendors/toastr/toastr.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2_app_services__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_2_app_services__["b" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["c" /* ToasterService */]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/pages/home.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"Home\">\r\n    <div class=\"bg-Blue\">\r\n       <div class=\"container\">\r\n          <div class=\"header-top row\">\r\n             <div class=\"header-top-txt col-md-4\">\r\n                <span><i class=\"fa fa-map-marker header-icon\" aria-hidden=\"true\"></i> 16 Winter Street, Peabody, MA 01960</span>\r\n             </div>\r\n             <div class=\"header-top-txt col-md-4\">\r\n                <span><i class=\"fa fa-phone header-icon\" aria-hidden=\"true\"></i> NEED HELP? CALL +1 (951) 123-4554</span>\r\n             </div>\r\n             <div class=\"header-top-txt col-md-4\">\r\n                <span><i class=\"fa fa-envelope header-icon\" aria-hidden=\"true\"></i> Email us: <a href=\"mailto:montupatidar43@gmail.com\" title=\"montupatidar43@gmail.com\">montupatidar43@gmail.com</a></span>\r\n             </div>\r\n             <div class=\"m-header-top-left\">\r\n                <p><i class=\"fa fa-phone header-icon\" aria-hidden=\"true\"></i> NEED HELP? CALL +1 (951) 123-4554</p>\r\n             </div>\r\n          </div>\r\n       </div>\r\n    </div>\r\n    <div class=\"navbar\">\r\n        <div class=\"container\">\r\n       <div class=\"logo\">\r\n          <a routerLink=\"/pages/home\">\r\n              The Corporate <span>Connection</span>\r\n              <!-- <img src=\"/assets/logo.png\" alt=\"logo\"> -->\r\n             </a>\r\n       </div>\r\n       <a class=\"press\" onclick=\"openNav()\">\r\n       <span></span>\r\n       <span></span>\r\n       <span></span>\r\n       </a>\r\n       <div class=\"menuhover\" id=\"myNav\">\r\n          <a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closeNav()\">&times;</a>            \r\n          <ul class=\"menu overlay-content \" >\r\n             <li class=\"active tab\"><a href=\"#Home\" title=\"Home\">Home</a></li>\r\n             <li class=\"tab \"><a href=\"#About\" title=\"About\">About</a></li>\r\n             <li class=\"tab \"><a  routerLink=\"/Admin\"  title=\"Project Gallery\">Admin</a></li>\r\n             <li class=\"tab \"><a href=\"#footer\" title=\"Contact Us\">Contact</a></li>\r\n             <li class=\"tab \"><a routerLink=\"/pages/login\">Login</a></li>\r\n             <li class=\"tab \"><a routerLink=\"/pages/register\" >Register</a></li>\r\n          </ul>\r\n          <div class=\"hover_header_top\">\r\n             <p><i class=\"fa fa-map-marker header_icon\" aria-hidden=\"true\"></i> 12 Royal Street, California USA</p>\r\n             <p><a href=\"mailto:info@marchandmartin.com\" title=\"mailto:info@marchandmartin.com\"><i class=\"fa fa-envelope header_3\" aria-hidden=\"true\"></i> contact@domain.com</a></p>\r\n          </div>\r\n          <div class=\"serch\">\r\n             <a class=\"fa fa-search\"></a>\r\n          </div>\r\n       </div>\r\n       <div id=\"search_ip\">\r\n         <div class=\"search_bx\">\r\n            <input type=\"text\" name=\"search\" placeholder=\"search\">\r\n            <a href=\"#\"><i class=\"fa fa-search\"></i></a>\r\n         </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  </header>\r\n  <section class=\"banner\">\r\n    <div class=\"container\">\r\n          <div class=\"header_bottom_text\">\r\n             <div class=\" banner_text table-cell\" >\r\n                <!-- <button href=\"#\" title=\"Request a FREE Estimate\" class=\"banner_btn\">REQUEST A FREE EStTIMTE</button> -->\r\n                <div class=\"banner-content-wrap\">\r\n                  <h1 class=\"banner-title wow fadeInUp\" data-wow-duration=\"1.5s\" data-wow-delay=\"700ms\">EVENT RENTAL, ARTIST BOOKING, VENUE HIRE,  DELHI NCR & BANGALORE </h1>\r\n                  <div class=\"full-banner\">\r\n                     <div class=\"row\">\r\n                     <div class=\"col-md-6 mb-3\">\r\n                       <a routerLink=\"/venuereg\"><i class=\"fa fa-building-o\" aria-hidden=\"true\"></i><br>\r\n                    Registor Your Venue <br>\r\n                    Property</a>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <a routerLink=\"/venuereg\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i><br>\r\n                     Registor Your <br>\r\n                     Supply</a> \r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                    <a routerLink=\"/userreg\"><i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"></i><br>\r\n                    Registor <br>\r\n                    User</a> \r\n                   </div>\r\n                   <div class=\"col-md-6\">\r\n                    <a routerLink=\"/#\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i><br>\r\n                    Upcoming  <br>\r\n                    Exam</a>\r\n                    </div>\r\n                  </div>\r\n                  </div>\r\n                </div>\r\n             </div>\r\n          </div>\r\n       </div>\r\n  </section>\r\n  <div class=\"about\" id=\"About\">\r\n    <div class=\"container\">\r\n       <div class=\"row\">\r\n         <div class=\"col-xs-6 col-sm-6 \">\r\n            <div class=\"about_text\" data-aos=\"fade-left\">\r\n                <h5>First your Should Know</h5>\r\n                <h2>About The <span>Corporate</span></h2>               \r\n                <p>Lorem ips illud nonummy, novum tation et his. Royal scriptaset patrioque scribentur, at pro fugit erts verter emmolestiae, sed et vivendo ali Lorem ipsum eillud nonu here mmy,\r\n                     novum tation et scripta patrioque scriben tur Quisque ligulas ipsum, euismod atras vulputate iltricies.\r\n                     Coordinates for abs po oordi nates for abs positioning the closest position.</p>\r\n               \r\n                <a href=\"#\" class=\"About_learn_btn\">Learn More</a>\r\n            </div>\r\n         </div>\r\n         <div class=\"col-xs-6 col-sm-6 \">\r\n            <div class=\"about-img\">\r\n            <img src=\"../../../assets/img/images/banner.png\" alt=\"\">\r\n       </div></div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"WeDo\" id=\"Services\">\r\n    <div class=\"container\">\r\n       <div class=\"row\">\r\n         \r\n         <div class=\"col-md-7\">\r\n            <div class=\"WeDo_text\" data-aos=\"fade-down\" data-aos-easing=\"linear\">\r\n                <h5>Making Awesome Designs</h5>\r\n                <h2>What We <span>Do</span></h2>               \r\n                <p>Coordinates for abs po oordinates for abs positioning the closest positioned Coordinates for abs positioning the closest positioned parent box of the positioned ting that ments.</p>                     \r\n            </div>\r\n            <div class=\"row\">\r\n               <div class=\"col-xs-6 col-sm-6\">\r\n                 <div class=\"wed_process_bx\" data-aos=\"fade-up\">\r\n                    <img src=\"../../../assets/img/images/cycle_icon.png\" alt=\"Cycle\">\r\n                    <h4>Design & Development</h4>\r\n                    <hr>\r\n                   <p>Lorem ipsum dolor sit amet sea te alii viris mneo squer dipereum.</p>\r\n                 </div> \r\n                  <div class=\"wed_process_bx\" data-aos=\"fade-up\">\r\n                   <img src=\"../../../assets/img/images/direction_icon.png\" alt=\"direction_icon\">\r\n                   <h4>Online Management</h4>\r\n                   <hr>\r\n                   <p>Lorem ipsum dolor sit amet sea te alii viris mneo squer dipereum.</p>\r\n                 </div> \r\n               </div>\r\n               <div class=\"col-xs-6 col-sm-6\">\r\n                <div class=\"wed_process_bx\" data-aos=\"fade-up\">\r\n                    <img src=\"../../../assets/img/images/wave_icon.png\" alt=\"wave_icon\">\r\n                    <h4>Creative Process</h4>\r\n                    <hr>\r\n                   <p>Lorem ipsum dolor sit amet sea te alii viris mneo squer dipereum.</p>\r\n                 </div> \r\n                 \r\n                 <div class=\"wed_process_bx\" data-aos=\"fade-up\" >\r\n                   <img src=\"../../../assets/img/images/doubletick_icon.png\" alt=\"doubletick_icon\">\r\n                   <h4>Friendly Support</h4>\r\n                   <hr>\r\n                   <p>Lorem ipsum dolor sit amet sea te alii viris mneo squer dipereum. </p>\r\n                 </div> \r\n               </div>\r\n            </div>\r\n         </div>\r\n         <div class=\"col-md-5\">\r\n          <div class=\"WeDo_img\">\r\n            <img src=\"../../../assets/img/images/your-artwork-here.png\" alt=\"about_studio_img_1\" class=\" img-responsive\">\r\n            <!-- <img src=\"./assets/images/your-artwork-here.png\" alt=\"about_studio_img_1\" class=\"WeDo_img_hover img-responsive\" data-aos=\"fade-down\"> -->\r\n         </div>\r\n         </div>\r\n       </div>\r\n    </div>\r\n  </div>\r\n     <!-- carousel slider end -->\r\n     <div class=\"chat_form\">\r\n       <div class=\"container\">\r\n          <div class=\"form\">\r\n             <h2 style=\"\">Ready to chat?</h2>\r\n             <form action=\"#\">\r\n                <div class=\"form-groups\">\r\n                   <i class=\"fa fa-user\"></i>\r\n                   <input type=\"text\" class=\"input\" id=\"exampleFormControlInput1\" placeholder=\"Your Name\" />\r\n                </div>\r\n                <div class=\"form-groups\">\r\n                   <i class=\"fa fa-envelope\"></i>\r\n                   <input type=\"email\" class=\"input\" id=\"exampleFormControlInput1\" placeholder=\"Email\" />\r\n                </div>\r\n                <div class=\"form-groups\">\r\n                   <i class=\"fa fa-phone\"></i>\r\n                   <input type=\"text\" class=\"input\" id=\"exampleFormControlInput1\" placeholder=\"Phone\" />\r\n                </div>\r\n                <div class=\"form-groups\">\r\n                   <textarea class=\"input\" id=\"exampleFormControlTextarea1\"  placeholder=\"How We Can Help You ?\"></textarea>\r\n                </div>\r\n                <a href=\"#\" title=\"Submit\" title=\"hello\" class=\"cheat_submit\">SUBMIT</a>\r\n             </form>\r\n          </div>\r\n       </div>\r\n    </div>\r\n    <footer id=\"footer\">\r\n       <div class=\"container\">\r\n          <div class=\"footer_main\">\r\n             <div class=\"footer_col1\" data-aos=\"fade-right\" data-aos-duration=\"1200\" data-aos-easing=\"linear\">\r\n                <div class=\"f_logo\">\r\n                   <a href=\"#\">The Corporate <span>Connection</span></a>\r\n                   <!-- <img src=\"/assets/footer_logo.png\" alt=\"Footer Logo\"> -->\r\n                </div>\r\n                <div class=\"call\">(978) 532-3224</div>\r\n                <address>16 Winter Street, Peabody, MA 01960</address>\r\n                <a href=\"mailto:info@marchandmartin.com\" title=\"mailto:info@marchandmartin.com\" class=\"mailto\">info@marchandmartin.com</a>\r\n                <div class=\"social\">\r\n                   <span><a href=\"#\" title=\"Facebook\"> <img src=\"../../../assets/img/images/1.png\" alt=\"Facebook\"> </a></span>\r\n                   <span><a href=\"#\" title=\"Twitter\"> <img src=\"../../../assets/img/images/2.png\" alt=\"Twitter\"> </a></span>\r\n                   <span><a href=\"#\" title=\"Google\"> <img src=\"../../../assets/img/images/3.png\" alt=\"Google\"> </a></span>\r\n                </div>\r\n             </div>\r\n             <div data-aos=\"fade-right\" data-aos-duration=\"1200\" data-aos-easing=\"linear\">\r\n                <h3>Quick Links</h3>\r\n                <ul class=\"f_link\">\r\n                   <li><a href=\"\" title=\"About Us\">About Us</a></li>\r\n                   <li><a href=\"\" title=\"Resources\">Resources</a></li>\r\n                   <li><a href=\"\" title=\"Testimonials\">Testimonials</a></li>\r\n                   <li><a href=\"\" title=\"Project Gallery\">Project Gallery</a></li>\r\n                   <li><a href=\"\" title=\"FAQs\">FAQs</a></li>\r\n                </ul>\r\n             </div>\r\n             <div data-aos=\"fade-left\" data-aos-duration=\"1200\" data-aos-easing=\"linear\">\r\n                <h3>Products / Services</h3>\r\n                <ul class=\"f_link\">\r\n                   <li><a href=\"\" title=\"Icynene Insulation\">Icynene Insulation</a></li>\r\n                   <li><a href=\"\" title=\"Traditional Closed Cell Polyurethane\">Traditional Closed Cell Polyurethane </a></li>\r\n                   <li><a href=\"\" title=\"Thermal & Ignition Barrier\">Thermal & Ignition Barrier</a></li>\r\n                   <li><a href=\"\" title=\"Infrared Thermography\">Infrared Thermography</a></li>\r\n                </ul>\r\n             </div>\r\n             <div class=\"Recent_Blogs\" data-aos=\"fade-left\" data-aos-duration=\"1200\" data-aos-easing=\"linear\">\r\n                <h3>Recent Blogs</h3>\r\n                <p class=\"color\">How spray foam insulation warms up a cold room</p>\r\n                <p >Now that winter is upon us, have you turned your \r\n                   heat up higher than you’d like?... <a href=\"\" title=\"Read More\">Read More</a>\r\n                </p>\r\n                <p class=\"color\">Finding A Licensed Contractor For Your Foam Installation</p>\r\n                <p>Not all insulation is created equal, for many different \r\n                   reasons. There are some instances... <a href=\"\" title=\"Read More\">Read More</a>\r\n                </p>\r\n             </div>\r\n          </div>\r\n       </div>\r\n       <div class=\"container\">\r\n          <div class=\"footer_end\" >\r\n             <div class=\"copyright\">\r\n                <p>March & Martin &copy; 2018 All Rights Reserved.</p>\r\n             </div>\r\n             <div>\r\n                <ul class=\"product\">\r\n                   <li><a href=\"#\" title=\"The lcynono insulation System\"> <img src=\"../../../assets/img/images/product.png\" alt=\"ttt\"></a></li>\r\n                   <li><a href=\"#\" title=\"Product Logo\"> <img src=\"../../../assets/img/images/prodct1.png\" alt=\"Product Logo\"></a></li>\r\n                   <li><a href=\"#\" title=\"Product Logo\"> <img src=\"../../../assets/img/images/prodct2.png\" alt=\"Product Logo\"></a></li>\r\n                   <li><a href=\"#\" title=\"Product Logo\"> <img src=\"../../../assets/img/images/prodct3.png\" alt=\"Product Logo\"></a></li>\r\n                   <li><a href=\"#\" title=\"Product Logo\"> <img src=\"../../../assets/img/images/prodct4.png\" alt=\"Product Logo\"></a></li>\r\n                </ul>\r\n             </div>\r\n          </div>\r\n       </div>\r\n    </footer>"

/***/ }),

/***/ "../../../../../src/app/views/pages/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.bg-Blue {\n  background-color: #15387a;\n  width: 100%;\n  position: relative;\n  overflow: hidden; }\n.header-top {\n  background-color: #15387a;\n  color: #fff;\n  font-size: 16px;\n  padding: 14px 10px; }\n.header-top-txt {\n  position: relative; }\n.header-top-txt a {\n  color: #8ac4fe;\n  text-transform: uppercase; }\n.m-header-top-left {\n  display: none; }\n.m-header-top-left p {\n  margin: 0; }\n.header-icon {\n  padding-right: 10px;\n  font-size: 14px; }\n.navbar {\n  position: relative;\n  display: block;\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\n  padding: 20px 0px;\n  background-color: #fff f; }\n.navbar > .container {\n  display: block; }\n.navbar:after {\n  display: block;\n  clear: both;\n  content: \" \"; }\n.navbar_padding:after {\n  display: block;\n  clear: both;\n  content: \" \"; }\n.logo {\n  float: left; }\n.logo a {\n  font-size: 22px;\n  color: #15387a;\n  font-weight: 600; }\n.logo a span {\n  color: #f77221; }\n.menu {\n  position: relative;\n  display: inline-block; }\n.menu .active a {\n  color: #f77221;\n  padding-bottom: 10px;\n  border-bottom: 3px solid #f77221; }\n.menu li {\n  display: inline-block; }\n.menu li a {\n  text-align: center;\n  color: #333;\n  font-size: 16px;\n  margin: 0px 15px;\n  -webkit-transition: 0.2s all;\n  transition: 0.2s all;\n  text-transform: uppercase; }\n.menuhover .closebtn {\n  display: none;\n  position: absolute;\n  top: 10px;\n  right: 20px;\n  font-size: 50px;\n  color: #fff; }\n.serch {\n  display: inline-block;\n  float: right;\n  position: relative; }\n.serch a {\n  display: inline-block;\n  cursor: pointer; }\n.serch a:hover {\n  color: #4caf50; }\n#search_ip {\n  width: 100%;\n  height: auto;\n  left: 0;\n  top: 100%;\n  position: absolute;\n  background: #f77221;\n  z-index: 99;\n  padding: 20px 0px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  display: none; }\n#search_ip input {\n  width: 100%;\n  margin: 0 auto;\n  border: none;\n  padding: 15px;\n  border-radius: 30px;\n  font-size: 18px;\n  position: relative;\n  -webkit-transition: 0.5s;\n  transition: 0.5s; }\n#search_ip .fa {\n  position: absolute;\n  right: 21px;\n  margin-top: -11px;\n  font-size: 23px;\n  color: #fa4; }\n.search_bx {\n  max-width: 900px;\n  position: relative;\n  height: 100%;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.press {\n  display: none;\n  position: absolute;\n  right: 10px;\n  top: 20px;\n  font-size: 30px; }\n.press span {\n  display: block;\n  margin: 6px;\n  width: 30px;\n  height: 3px;\n  background: #000; }\n.press:hover > span {\n  background: #876; }\n.menu li a:hover {\n  color: #f77221;\n  padding-bottom: 10px;\n  border-bottom: 3px solid #f77221; }\n.sticky {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100; }\n.sticky + .banner {\n  padding-top: 60px; }\n.hover_header_top {\n  display: none; }\nh1, h2, h3, h4, h5, h6, ul, ol {\n  margin: 0;\n  padding: 0; }\n.table-cell {\n  display: table-cell;\n  vertical-align: middle; }\n.banner {\n  background: -webkit-gradient(linear, left top, right top, color-stop(50%, rgba(255, 255, 255, 0.3)), to(rgba(255, 255, 255, 0.3))), url(" + escape(__webpack_require__("../../../../../src/assets/img/images/GettyImages-961308746.jpg")) + ");\n  background: linear-gradient(to right, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.3)), url(" + escape(__webpack_require__("../../../../../src/assets/img/images/GettyImages-961308746.jpg")) + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 100%;\n  background-position: center center;\n  position: relative; }\n.header_bottom_text {\n  position: relative;\n  min-height: 800px;\n  display: table;\n  color: #fff; }\n.banner_text {\n  position: relative;\n  max-width: 700px; }\n.banner_text h1 {\n  font-size: 40px;\n  color: #0b258a;\n  text-transform: uppercase;\n  font-weight: 600;\n  margin-bottom: 15px; }\n.full-banner {\n  width: 100%;\n  padding-top: 5px;\n  -webkit-transition: 0.5s all;\n  transition: 0.5s all; }\n.full-banner a:hover {\n  color: #fff;\n  background-color: #0b258a; }\n.full-banner a {\n  background-color: #f77221;\n  color: #fff;\n  font-size: 18px;\n  padding: 10px;\n  -webkit-transition: 0.5s all;\n  transition: 0.5s all;\n  display: block;\n  text-transform: uppercase;\n  text-align: center;\n  border-radius: 3px;\n  font-weight: 700;\n  margin: 2px; }\n.banner_btn {\n  min-width: 295px;\n  height: 60px;\n  line-height: 60px;\n  text-align: center;\n  background-color: #f77221;\n  color: #fff;\n  font-size: 18px;\n  border-radius: 5px;\n  border: none;\n  cursor: pointer;\n  -webkit-transition: 0.4s ease-out;\n  transition: 0.4s ease-out;\n  -webkit-box-shadow: inset 0 0 0 0 #0266ca;\n          box-shadow: inset 0 0 0 0 #0266ca;\n  -webkit-transition: ease-out 0.4s;\n  transition: ease-out 0.4s;\n  text-transform: uppercase;\n  font-weight: 500; }\n.banner_btn:hover {\n  -webkit-box-shadow: inset 0 100px 0 0 #0266ca;\n          box-shadow: inset 0 100px 0 0 #0266ca;\n  color: #fff; }\n.owl-next span {\n  color: #fff;\n  width: 50px;\n  height: 50px;\n  border: 1px solid #fff;\n  border-radius: 50%;\n  line-height: 40px;\n  font-size: 40px; }\n.about {\n  position: relative;\n  width: 100%;\n  height: auto; }\n.about .about_img {\n  width: 100%;\n  margin-top: -140px;\n  position: relative;\n  z-index: 1; }\n.about .about_studio_img_1 {\n  position: relative; }\n.about .about_studio_img_2 {\n  position: absolute;\n  top: 38px;\n  left: 30px; }\n.about_text {\n  position: relative;\n  color: #444;\n  padding: 97px 0px 65px; }\n.about_text h2 {\n  font-size: 30px;\n  font-weight: 600; }\n.about_text > h2 > span {\n  color: #f77221; }\n.about_text h5 {\n  font-size: 14px; }\n.about_text p {\n  margin: 30px 0px;\n  line-height: 1.8;\n  font-size: 14px; }\n.about_text .About_learn_btn {\n  width: 168px;\n  height: 45px;\n  display: inline-block;\n  text-align: center;\n  line-height: 43px;\n  color: #f77221;\n  border: 1px solid #f77221;\n  border-radius: 30px;\n  font-size: 16px;\n  -webkit-transition: 0.5s ease-out;\n  transition: 0.5s ease-out; }\n.about_text .About_learn_btn:hover {\n  background: #0266ca;\n  border: 1px solid #0266ca;\n  color: #fff; }\n.about-img img {\n  max-width: 100%;\n  padding: 97px 0px 65px; }\n.WeDo {\n  position: relative;\n  width: 100%;\n  height: auto;\n  background: #fafafa;\n  padding: 77px 0px 25px;\n  border-top: 2px solid #ededed;\n  border-bottom: 2px solid #ededed; }\n.WeDo_img {\n  width: 100%;\n  position: relative;\n  margin: 0 auto;\n  text-align: center; }\n.WeDo_img img {\n  -webkit-box-shadow: 10px 10px 10px #d0d0d0;\n          box-shadow: 10px 10px 10px #d0d0d0;\n  width: 100%; }\n.WeDo_img .WeDo_img_hover {\n  position: absolute;\n  top: 150px;\n  left: 170px; }\n.WeDo_text h5 {\n  font-size: 14px; }\n.WeDo_text h2 {\n  font-size: 30px;\n  font-weight: 600; }\n.WeDo_text > h2 > span {\n  color: #f77221; }\n.WeDo_text p {\n  margin: 37px 0px;\n  line-height: 1.8;\n  font-size: 14px; }\n.wed_process_bx {\n  width: 100%;\n  height: auto;\n  position: relative;\n  margin-bottom: 60px;\n  color: #444; }\n.wed_process_bx h4 {\n  margin: 30px 0px 16px;\n  font-weight: 600; }\n.wed_process_bx hr {\n  width: 27px;\n  height: 2px;\n  display: inline-block;\n  background: #f77221;\n  margin: 0; }\n.wed_process_bx p {\n  margin: 16px 0px 0px; }\n.chat_form {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAAFICAYAAAA72pBgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVCNUFCNDk1RTM3MTExRTlBMUZEODhFOTNGRjVDNzI0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVCNUFCNDk2RTM3MTExRTlBMUZEODhFOTNGRjVDNzI0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUI1QUI0OTNFMzcxMTFFOUExRkQ4OEU5M0ZGNUM3MjQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUI1QUI0OTRFMzcxMTFFOUExRkQ4OEU5M0ZGNUM3MjQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5eUZ2FAAAI80lEQVR42uzdjVIVRxqAYRD8W5fI4uISia4minsJuSuuxcvKHeyS+BNSGCoUBDf+boykO8xWTlGiIGe+6e553qrOYBQLvj7PmTmcI8zOSOq9xbX1fLh1zigG34i/mMI4sKW1DNzwfZE2ZNkY2seW3wCujG5B1z424MpDd90Y2sUGXHndTBu1YgxtYgOuzFahqxrbbDrceR824MpG97kxVIntdlpLx/0Z4MrtRtrAVWNoBxtw5bcCXTvYgKsH3RfdA3FVjA24evrHzOHTBiZRMTbg6moZuuKwfXUabMDVie6f3WZreGxXT/u+wNXX3/NlDHT1YQOu3pagqw8bcNApEBtwbaD7Cro6sAHXRleh6xVbNnJvGtiAaw+d/Zw+trtpLUzr77RBbaG7C1252IBrrwXoysUGXNvo5oyiLGzAtY3uHnRlYQOu7a5AdypseU5rfWIDDjr9ie1eN68Z4HRWdPfTjWreKIbFBtx4upwvl6AbFhtw0MEWiA24caL7V7qxXRg5tvkhsAE3zi52Z7oLI8a2NgQ24KC7MFJsl4f6GIAbN7p8eXkRNuAU0/mZw6cMLsIGnKBrChtwmkSXLy8vN4btfEnYgNNkf5wJWkHXfUHofknYgFOT6Dps+cxW3GUycHofuvyY7gpswCmmP172VBu60rEBp2bQ1YANOJ0EXX5Mt1A4tos1YANOJ72N3C0VXYftfg3YgFPV6Cawna9pkNJJbyv5Md0ibMAppvzt1L8cGl2t2IBTdehqxgaczopuKRjb5ZqxAaezorsTha7DtlYzNuA0jXpHN4Gt+m+ABJymhW4ZNuAU161po2sNG3AqFl2L2IBTX+hWzojtSovYgFNfrX4qug7bvRaxAaei0E1ga/an/QCnvtHdgA04xfV5wrQKG3CKa+U4dGPCBpyi0d1MaxLbwpiw5fysMEV2Pa3ZBG1z5vBnad8d250+cIouPzGeX4D82RivsIDTEC2O9RP3GE4CTgJOEnAScJKAk4CTgJMEnAScJOAk4CTgJAEnAScJOAk4ScBJwEnASQJOAk4ScBJwEnCSgJOAkwScBJwk4CTgJOAkAScBJwk4CTgJOEnAScBJAk4CThJwUmTzi2vrc8YwaLNGMCJwaV1P64ZRSP0393r3m+eXrn19kN7+zDiknsHl/0AnBYKbQPc2vXnVWKSewXXoXkInBYGDTuq3Y78kvbi2vpQOd4xosJ6n9fS4O8aJ/Tt30jvTrnMfeJ9zx9wmZnt4n9P+fSf9/bkqwUE3ePv7Gw8eGsP0SrfnD90JfOxOYvLPfCrqg9kTfJAZ3e0ZT9ACpzP30Zd2pU3fS4dHWadxST2D69DtQycFgZtAly9x3hmb1DO4Dt2zdPgOOikAXIfuF+ikIHAT6L5N6zcjlHoG16F7Dp0UBK5D9wI6KQjcBLqNtN4ap9QzuA7dS+ikIHAdulfQSUHgJtD9O61fjVbqGVyH7k06/Ac6KQDcEXT/M2KpZ3BH0L0xZqlncB26fIbbgE4KAHcE3WvjFnABdejy5eUrIxdwMejedmc66ARcMLqXRi/gYtG9MH4BF4Mu/+uCb6ETcPHofrENAi4O3XfQCbg4dO+gE3DDoHtmSwRcHLqH0Am4OHQH0Am4YdDt2R4BF4fuCXQCDjqpPXAT6B6ntWOrBFwMunzYhE7AxaP7yZap5uZq+UBf736T138vXfs630n8dQR78zp9vj+7iTrDDX2220qHbVsn4GLR/Wj7BFwcuqfpsGULBVwcum3oBFw8uh9spYCLQ5efLti0nQIuDt0OdAIuHt0T2yrg4tDtzhy+/lICLgjdHnQCLh5d/oesB7ZZwEnAtdPi2vpiOnyZ1qxtFnCwCTjYJOBgE3CwSadtvhFsf0uHO7AJuP6xLXXYJJeUsEkNgINNwMEmtQUONgEHm9QWONgEHGxSW+BgE3CwSZ/UfMHYrqXDbVsk4PrHtpwOt2yPXFLCJrUBDjYBB5vUFjjYBBxsUlvgYBNwsEltgYNNwMEmtQUONo29+UBsK+mwauRyhoNNagMcbFIQONikIHCwSUHgYJOCwMEmBYGDTQoCB5sUBA42KQgcbNLJmz8jtgxtxRilns9wsElB4GCTgsDBJgWBg00KAgebFAQONikIHGxSEDjYpCBwsEnTbxa2Ynub1itjaKY3+xsPvp8/Ai0fbqZ13XwGL+/NgjE0tZ9/vpayw5a/Z+Sy2Ug9PoaDTQoCB5sUe115Pq0X3VJcl2Z8YWp84PY3HvyajrtGEVu6slgAbqSP4SQBJwEnCTgJOEnAScBJwEkCTgJOEnAScBJwkoCTgJMEnAScJOAk4CTgJAEnAScJOAk4CThJwEnASQJOAk4ScBJwEnCSgJOAkwScBJwEnCTgJOAkAScBJwEnCTgJOEnAScBJAk6F9CytnbF90vP2XQNhe5jWQffrZWc4qUds+xsPDtLKv94c05kOOA2C7f//Y2zogNNg2MaIDjgNim1s6IBT3+1/DNuY0AGnPttL69FJsI0FHXDqE9uT02AbAzrgVBS296DbBk7qEdskurS2WkIHnIrEdgReM+iAU9HYWkMHnIrH1hI64FQFtlbQAadqsLWADjhVha12dMCpOmw1owNOpy2/+uPx0NhqRQecTotts3sVSDHVhA44VY3tCLqnwAm2OHQ/psMWcIItDt12yeiAUzPYakAHnJrCVjo64NQctpLRAacmsZWKDjg1i61EdMCpaWylofOzBZTb7p44brqMbnFtPb+56gwn2EZwpgMOtq2xfdIduh+AE2xx6H6aOfw2fMAJtiB0O9HogIMNukB0wMEGXSA64GBTIDrgYFMgOuBgUyA64GBTIDrg2m0LtvLQAdcutm1jKA8dcLDp4+ieACfY4tDtpsNj4ARbHLq9aaADDjYFogMONgWiAw42BaIDDjYFogMONgWiAw42BaIDrq42YasbHXB1YdsxhrrRAQebpovuUVoHwMGmGHQ/fwgdcLBp+uj2j0MHHGwKRAccbApEBxxsikH3DjjYFIfue+BgUxy6V8DBpuD8QMbhe9w9YaoR5Aw3XAewja/fBRgAPq/KD2i8V8QAAAAASUVORK5CYII=) 70% 20%, url(" + escape(__webpack_require__("../../../../../src/assets/img/images/form_bg_icon2.png")) + ") bottom center, #15387a;\n  padding: 78px 0px;\n  text-align: center;\n  background-repeat: no-repeat;\n  margin: 0 auto;\n  text-align: center;\n  position: relative; }\n.form_bg_icon1 {\n  position: absolute;\n  right: 0; }\n.form_bg_icon2 {\n  position: absolute;\n  bottom: 0;\n  left: 0; }\n.chat_form .form h2 {\n  margin-bottom: 55px;\n  color: #fff;\n  font-weight: 600;\n  font-size: 36px;\n  text-transform: uppercase; }\n.chat_form .form {\n  max-width: 685px;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  padding: 0px 10px; }\n.chat_form .form:after {\n  display: block;\n  clear: both;\n  content: \"\"; }\n.chat_form .form .fa {\n  position: absolute;\n  left: 0;\n  color: #fff;\n  width: 25px;\n  margin-left: 13px;\n  line-height: 50px; }\n.chat_form .form ::-webkit-input-placeholder {\n  color: #fff !important;\n  text-align: left; }\n.chat_form .form ::-moz-placeholder {\n  color: #fff !important;\n  text-align: left; }\n.chat_form .form ::-ms-input-placeholder {\n  color: #fff !important;\n  text-align: left; }\n.chat_form .form ::placeholder {\n  color: #fff !important;\n  text-align: left; }\n.form-groups {\n  width: 100%;\n  position: relative; }\n.chat_form .form .input {\n  width: 100%;\n  margin-bottom: 15px;\n  background: transparent;\n  color: #fff;\n  padding: 15px 0px 15px 40px;\n  border: 2px solid #506a9b;\n  font-size: 16px;\n  border-radius: 5px;\n  position: relative;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n.chat_form textarea {\n  width: 100%;\n  height: 155px !important;\n  padding: 20px !important;\n  resize: none; }\n.cheat_submit {\n  width: 216px;\n  height: 60px;\n  background-color: #f77221;\n  color: #fff;\n  margin-top: 40px;\n  line-height: 60px;\n  font-size: 18px;\n  -webkit-box-shadow: 0px 0px 10px #24345f;\n          box-shadow: 0px 0px 10px #24345f;\n  border-radius: 5px;\n  display: inline-block;\n  cursor: pointer;\n  -webkit-box-shadow: inset 0 0 0 0 #0266ca;\n          box-shadow: inset 0 0 0 0 #0266ca;\n  -webkit-transition: ease-out 0.4s;\n  transition: ease-out 0.4s; }\n.cheat_submit:hover {\n  -webkit-box-shadow: inset 0 100px 0 0 #0266ca;\n          box-shadow: inset 0 100px 0 0 #0266ca;\n  color: #fff; }\nfooter {\n  position: relative; }\n.footer_main {\n  position: relative;\n  display: grid;\n  grid-template-columns: auto auto auto auto;\n  grid-column-gap: 20px;\n  padding: 70px 0px 31px 0px; }\n.footer_main address {\n  font-size: 14.06px; }\n.mailto {\n  text-decoration: underline;\n  color: #15387a; }\n.call {\n  color: #15387a;\n  font-size: 19px;\n  margin: 15px 0px;\n  font-weight: bolder; }\n.footer_end {\n  position: relative;\n  display: grid;\n  grid-template-columns: auto auto;\n  padding: 0px 10px;\n  border-top: 1px solid #000; }\n.footer_main h3 {\n  margin-bottom: 20px; }\n.f_link li {\n  list-style: none;\n  padding: 10px 0px; }\n.f_link li a {\n  color: #000;\n  font-size: 16px;\n  -webkit-transition: 0.2s ease;\n  transition: 0.2s ease; }\n.f_link li a:hover {\n  color: #f77221; }\n.social span {\n  display: inline-block;\n  margin: 16px 9px; }\n.social span a img {\n  width: 30px; }\n.Recent_Blogs {\n  padding: 0; }\n.Recent_Blogs h3 {\n  margin-bottom: 29px; }\n.Recent_Blogs a {\n  color: #000;\n  text-decoration: underline;\n  display: inline-block; }\n.Recent_Blogs a:hover {\n  text-decoration: none; }\n.Recent_Blogs p {\n  font-size: 16px;\n  line-height: 1.6; }\n.color {\n  color: #15387a; }\n.copyright {\n  padding: 58px 0px 55px 0px; }\n.product {\n  padding: 25px 0px 25px 0px;\n  text-align: right; }\n.product li {\n  display: inline-block;\n  margin: 0px 10px; }\n.f_logo a {\n  font-size: 22px;\n  color: #15387a;\n  font-weight: 600;\n  display: inline-block; }\n.f_logo a span {\n  color: #f77221; }\n/* model start */\n.registor-choice {\n  max-width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #15387a;\n  border-radius: 10px;\n  color: #fff; }\n.registor-choice .one {\n  width: 50%;\n  padding: 20px;\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n  -webkit-transition: 0.5s all;\n  transition: 0.5s all;\n  text-transform: uppercase; }\n.registor-choice .one:hover {\n  background: #f77221; }\n.registor-choice .two {\n  width: 50%;\n  text-transform: uppercase;\n  padding: 20px;\n  border-left: 1px solid #fff;\n  border-right: 1px solid #fff; }\n.registor-choice .two:hover {\n  background: #f77221; }\n.registor-choice a {\n  text-align: center;\n  color: #fff; }\n/*  login start  */\n.flex-css {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%; }\n.login {\n  width: 400px;\n  position: relative;\n  background: #000;\n  margin: 50px auto;\n  padding: 40px;\n  left: 0;\n  right: 0;\n  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.7);\n  -moz-box-shadow: 0 15px 25px rgba(0, 0, 0, 0.7);\n  -webkit-box-shadow: 0 15px 25px rgba(0, 0, 0, 0.7);\n  border-radius: 10px; }\n.login h2 {\n  color: #fff;\n  margin: 0 0 30px;\n  text-align: center; }\n.register {\n  width: 100%;\n  min-width: 300px;\n  position: relative;\n  background: #000;\n  padding: 30px;\n  margin: 50px auto;\n  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.7);\n  -moz-box-shadow: 0 15px 25px rgba(0, 0, 0, 0.7);\n  -webkit-box-shadow: 0 15px 25px rgba(0, 0, 0, 0.7);\n  border-radius: 10px; }\n.register h2 {\n  color: #fff;\n  margin: 0 0 30px;\n  text-align: center; }\n.go_regster {\n  position: relative;\n  width: 100%;\n  text-align: center;\n  display: block;\n  font-weight: 500;\n  margin-top: 10px;\n  font-size: 17px;\n  color: #fff; }\n.go_regster a {\n  color: #03a9f4;\n  margin-left: 5px; }\n.inputBox {\n  position: relative;\n  margin-bottom: 30px; }\n.inputBox input {\n  width: 100%;\n  position: relative;\n  padding: 10px 0px;\n  font-size: 16px;\n  color: #fff;\n  letter-spacing: 1px;\n  border: none;\n  border-bottom: 1px solid #fff;\n  background: transparent;\n  margin-bottom: 10px; }\n.inputBox input:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ntextarea:-webkit-autofill,\ntextarea:-webkit-autofill:hover,\ntextarea:-webkit-autofill:focus,\nselect:-webkit-autofill,\nselect:-webkit-autofill:hover,\nselect:-webkit-autofill:focus {\n  -webkit-text-fill-color: #03a9f4;\n  -webkit-box-shadow: 0 0 0px 1000px transparent inset;\n  -webkit-transition: background-color 5000s ease-in-out 0s;\n  transition: background-color 5000s ease-in-out 0s; }\n.inputBox label {\n  color: #fff;\n  letter-spacing: 1px;\n  position: absolute;\n  top: -20px;\n  left: 0;\n  padding: 10px 0px;\n  pointer-events: none;\n  -webkit-transition: .5s;\n  transition: .5s; }\n.inputBox input:focus ~ label {\n  top: -20px;\n  left: 0;\n  color: #03a9f4;\n  font-size: 13px; }\n.select {\n  width: 100%;\n  border-radius: 5px;\n  padding: 5px;\n  color: #03a9f4;\n  background: transparent; }\n.inputBox #file {\n  margin-top: 10px; }\n#message, #messageCpass {\n  /* background: rgba(255,255,255,0.9); */\n  -webkit-box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.9);\n          box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.9);\n  position: absolute;\n  max-width: 400px;\n  width: 100%;\n  top: -4px;\n  right: 0;\n  overflow: auto;\n  height: auto;\n  bottom: auto;\n  color: #fff;\n  margin: 0 auto;\n  border-radius: 4px;\n  padding-left: 5px; }\n#messageCpass {\n  max-width: 150px;\n  top: 0; }\n#message::after, #messageCpass::after {\n  content: \"\";\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -15px;\n  border-width: 15px;\n  border-style: solid;\n  border-color: transparent transparent #fff transparent; }\n#message span, #messageCpass span {\n  display: inline-block;\n  font-size: 13px;\n  margin-left: 5px;\n  margin-bottom: 0; }\n.valid {\n  color: #61d861; }\n.valid:before {\n  position: relative;\n  left: -4px;\n  content: \"\\2714\"; }\n.invalid {\n  /* color: #dc3545; */\n  color: #fff; }\n.invalid:before {\n  position: relative;\n  left: -4px;\n  content: \"\\2716\"; }\n.facebook {\n  background: #3b5998; }\n.twitter {\n  background: #00aced; }\n.googleplus {\n  background: #dd4b39; }\n.boxing {\n  height: 500px;\n  background: #333;\n  width: 100%;\n  color: #fff;\n  padding: 0px 20px; }\n.pick {\n  width: 50px;\n  height: 50px; }\n.pickbig {\n  position: absolute;\n  width: 0px;\n  -webkit-transition: width 1s linear 0s;\n  transition: width 1s linear 0s;\n  z-index: 10; }\n.pick:hover + .pickbig {\n  width: 200px; }\n.forgot {\n  position: absolute;\n  right: 0;\n  top: -10px; }\n.forgot a {\n  color: #03a9f4; }\n@media (max-width: 1200) {\n  .banner_text h2 {\n    font-size: 35px;\n    margin-top: 120px; }\n  .chat_form .form .fa {\n    margin-left: 15px;\n    line-height: 50px; } }\n@media (max-width: 991px) {\n  .chat_form .form .fa {\n    line-height: 50px; }\n  .chat_form .form .input {\n    padding: 15px 0px 15px 47px; }\n  .product {\n    padding: 25px 0px 0px 0px; }\n  .product_view {\n    padding: 25px 10px; }\n  .product_view_img {\n    margin: 10px 10px 10px 0px; }\n  .product_view_btn {\n    margin: 0 auto;\n    line-height: 45px;\n    width: 180px;\n    height: 45px; }\n  .product_view_btn a {\n    padding: 10px 10px; }\n  .product li {\n    margin: 0px 0px; }\n  .call {\n    margin: 17px 0px; }\n  .footer_main {\n    grid-template-columns: 50% 50%;\n    text-align: center;\n    grid-row-gap: 20px;\n    grid-column-gap: 0; } }\n@media (max-width: 767px) {\n  .menuhover .closebtn {\n    display: block; }\n  .header-top-txt {\n    display: none; }\n  .m-header-top-left {\n    display: block;\n    font-size: 15px;\n    width: 100%;\n    text-align: center; }\n  .hover_header_top {\n    display: block;\n    color: #fff;\n    width: 100%;\n    background: #fa4;\n    padding: 10px 0px; }\n  .hover_header_top p {\n    font-size: 16px; }\n  .hover_header_top p a {\n    color: #fff; }\n  .hover_header_top ul {\n    list-style: none; }\n  .hover_header_top ul li {\n    display: inline-block;\n    margin: 0px 10px;\n    font-size: 20px; }\n  .hover_header_top ul li a {\n    color: #fff; }\n  .menu {\n    width: 100%;\n    right: 0;\n    position: relative;\n    margin: 20% 0px 0px; }\n  .menu li {\n    display: block; }\n  .menu li a {\n    display: block;\n    text-align: center;\n    padding: 10px;\n    margin: 0;\n    border-bottom: 2px solid #fff;\n    color: #fff; }\n  .menu li a:hover {\n    color: #000;\n    border-bottom: 2px solid #fff; }\n  .menu .active a {\n    color: #fff;\n    padding-bottom: 10px;\n    border-bottom: 2px solid #fff; }\n  .menuhover {\n    height: 0%;\n    width: 100%;\n    position: fixed;\n    z-index: 99;\n    top: 0;\n    left: 0;\n    background-color: #15387a;\n    overflow-y: hidden;\n    -webkit-transition: 0.5s;\n    transition: 0.5s; }\n  .press {\n    display: block;\n    cursor: pointer; }\n  .show {\n    display: block; }\n  .search {\n    position: absolute;\n    display: none;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%); }\n  .header_bottom_text {\n    min-height: 500px;\n    width: 100%;\n    text-align: center; }\n  .banner_text {\n    max-width: 100%;\n    padding: 0px 30px; }\n  .banner_text h2 {\n    margin-top: 65px;\n    font-size: 30px; }\n  .banner_text p {\n    padding: 40px 0px;\n    max-width: 600px; }\n  .banner_btn {\n    font-size: 15px;\n    min-width: 260px;\n    height: 50px;\n    line-height: 50px; }\n  .header_bottom_text {\n    min-height: 500px;\n    width: 100%;\n    text-align: center; }\n  .footer_main {\n    grid-template-columns: 100%;\n    text-align: center; }\n  .f_link li {\n    padding: 5px 0px; }\n  .footer_main h3 {\n    margin: 25px 0px 10px 0px; }\n  .Recent_Blogs p {\n    font-size: 17px; }\n  .product {\n    text-align: center;\n    padding: 10px 10px; }\n  .footer_col1 {\n    text-align: center; } }\n@media (max-width: 576px) {\n  .header-top-txt {\n    display: none; }\n  .search {\n    display: none;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 100px; }\n  .press {\n    top: 5px; }\n  .header_bottom_text {\n    min-height: 400px;\n    padding: 0 10px; }\n  .banner_text {\n    text-align: center; }\n  .banner_text p {\n    font-size: 16px;\n    padding: 25px 0px; }\n  .banner_text h2 {\n    margin-top: 0px;\n    font-size: 19px; }\n  .chat_form .form .fa {\n    margin-left: 14px;\n    line-height: 50px; }\n  .chat_form textarea {\n    height: 100px !important; }\n  .chat_form .form h2 {\n    margin-bottom: 40px;\n    font-size: 25px; }\n  .chat_form {\n    padding: 50px 0px; }\n  .footer_main {\n    padding-top: 50px;\n    text-align: center; }\n  .f_link li {\n    padding: 5px 0px; }\n  .footer_main h3 {\n    margin: 25px 0px 10px 0px; }\n  .Recent_Blogs {\n    padding: 0px 15px; }\n  .Recent_Blogs p {\n    font-size: 17px; }\n  .copyright {\n    padding: 15px 0px 30px 0px; }\n  .copyright p {\n    text-align: center;\n    color: #626262; }\n  .product {\n    text-align: center;\n    padding: 0px 0px; }\n  footer {\n    padding: 20px 0px 20px 0px; }\n  .footer_main {\n    grid-template-columns: 100%; }\n  .footer_end {\n    grid-template-columns: 100%; }\n  .product li {\n    margin: 10px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/pages/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent(elementRef) {
        this.elementRef = elementRef;
        // var s10 = document.createElement("script");
        // s10.type = "text/javascript";
        // s10.src = "assets/js/custom.js";
        // this.elementRef.nativeElement.appendChild(s10);
    }
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/pages/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/pages/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/pages/login.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<toaster-container [toasterconfig]=\"toasterconfig\"></toaster-container>\r\n<ng4-loading-spinner></ng4-loading-spinner>\r\n<form >\r\n<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-8\">\r\n        <div class=\"card-group mb-4\">\r\n          <div class=\"card p-4\">\r\n            <div class=\"card-body\">\r\n              <h1>Login</h1>\r\n              <p class=\"text-muted\">Sign In to your account</p>\r\n              <form name=\"form\" (ngSubmit)=\"f.form.valid && signin()\" #f=\"ngForm\" novalidate id=\"form_login\">\r\n                <div class=\"input-group mb-3\">\r\n                    <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\r\n                    </div>\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.EMAIL\" name=\"EMAIL\" #EMAIL=\"ngModel\" placeholder=\"Email\" autocomplete=\"off\" required>\r\n                </div>\r\n                <div class=\"input-group mb-4\">\r\n                    <div class=\"input-group-prepend\" (click)=\"togglePassword()\">\r\n                        <span class=\"input-group-text\"><i [class]=\"eyeIcon\" aria-hidden=\"true\"></i></span>\r\n                    </div>\r\n                    <input [type]=\"passwordType\" class=\"form-control\" [(ngModel)]=\"model.PASSWORD\" name=\"PASSWORD\" #PASSWORD=\"ngModel\" placeholder=\"Password\" required>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-6\">\r\n                        <button type=\"submit\" class=\"btn btn-primary px-4\" [disabled]= '!f.form.valid' >Login</button>\r\n                    </div>\r\n                    <div class=\"col-6 text-right\">\r\n                        <button type=\"button\" class=\"btn btn-link px-0\" routerLink=\"/pages/forgot-pasword\">Forgot password?</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n              <!-- <div class=\"input-group mb-3\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\r\n                </div>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"user.EMAIL\" name=\"EMAIL\" #EMAIL=\"ngModel\"  required>\r\n              </div>\r\n              <div class=\"input-group mb-4\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\r\n                </div>\r\n                <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" name=\"password\" placeholder=\"Password\" #password=\"ngModel\" required>\r\n              </div> -->\r\n              <!-- <div class=\"row\">\r\n                <div class=\"col-6\">\r\n                  <button type=\"submit\" (click)=\"doLogin()\" class=\"btn btn-primary px-4\">Login</button>\r\n                </div>\r\n                <div class=\"col-6 text-right\">\r\n                  <button type=\"button\" class=\"btn btn-link px-0\">Forgot password?</button>\r\n                </div>\r\n              </div> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"card text-white bg-primary py-5 d-md-down-none\" style=\"width:44%\">\r\n            <div class=\"card-body text-center\">\r\n              <div>\r\n                <h2>Sign up</h2>\r\n                <p>Welcome to Corporate Connections</p>\r\n                <button type=\"button\" routerLink=\"/pages/register\" class=\"btn btn-primary active mt-3\">Register Now!</button>\r\n                <button type=\"button\" routerLink=\"/pages/home\" class=\"btn btn-warning mt-3\">Back to Home</button>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/views/pages/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router, _route, authenticationService, spinnerService, userService, toasterService) {
        this._router = _router;
        this._route = _route;
        this.authenticationService = authenticationService;
        this.spinnerService = spinnerService;
        this.userService = userService;
        this.model = {};
        this.returnUrl = "";
        this.loading = false;
        this.passwordType = 'password';
        this.passwordShown = false;
        this.eyeIcon = 'fa fa-eye';
        this.user = {};
        this.toasterconfig = new __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["a" /* ToasterConfig */]({
            tapToDismiss: true,
            timeout: 5000
        });
        this.toasterService = toasterService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // this.authenticationService.isLogout();
        // this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
        // this._router.navigate([this.returnUrl]);
    };
    LoginComponent.prototype.togglePassword = function () {
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
    LoginComponent.prototype.signin = function () {
        var _this = this;
        this.spinnerService.show();
        this.loading = true;
        this.authenticationService.login(this.model.EMAIL, this.model.PASSWORD)
            .subscribe(function (data) {
            if (data.verify != 0) {
                _this.spinnerService.hide();
                _this.toasterService.pop('success', 'Login!', 'successfully!');
                _this._router.navigate([_this.returnUrl]);
            }
            else {
                _this.spinnerService.hide();
                _this.toasterService.pop('error', 'Login failed', 'Username or Password not match!');
            }
        }, function (error) {
            _this.spinnerService.hide();
            _this.toasterService.pop('error', 'Oppss..', 'Something went wrong!');
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/pages/login.component.html"),
            styles: [__webpack_require__("../../../../../src/scss/vendors/toastr/toastr.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2_app_services__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_2_app_services__["b" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["c" /* ToasterService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/pages/pages-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__404_component__ = __webpack_require__("../../../../../src/app/views/pages/404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__500_component__ = __webpack_require__("../../../../../src/app/views/pages/500.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_component__ = __webpack_require__("../../../../../src/app/views/pages/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_component__ = __webpack_require__("../../../../../src/app/views/pages/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_component__ = __webpack_require__("../../../../../src/app/views/pages/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forgotpassword_component__ = __webpack_require__("../../../../../src/app/views/pages/forgotpassword.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        data: {
            title: 'Example Pages'
        },
        children: [
            {
                path: 'home',
                component: __WEBPACK_IMPORTED_MODULE_6__home_component__["a" /* HomeComponent */],
                data: {
                    title: 'Home'
                }
            },
            {
                path: '404',
                component: __WEBPACK_IMPORTED_MODULE_2__404_component__["a" /* P404Component */],
                data: {
                    title: 'Page 404'
                }
            },
            {
                path: '500',
                component: __WEBPACK_IMPORTED_MODULE_3__500_component__["a" /* P500Component */],
                data: {
                    title: 'Page 500'
                }
            },
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* LoginComponent */],
                data: {
                    title: 'Login Page'
                }
            },
            {
                path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_5__register_component__["a" /* RegisterComponent */],
                data: {
                    title: 'Register Page'
                }
            },
            {
                path: 'forgot-pasword',
                component: __WEBPACK_IMPORTED_MODULE_7__forgotpassword_component__["a" /* ForgotPasswordComponent */],
                data: {
                    title: 'Forgot Password'
                }
            }
        ]
    }
];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__404_component__ = __webpack_require__("../../../../../src/app/views/pages/404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__500_component__ = __webpack_require__("../../../../../src/app/views/pages/500.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_component__ = __webpack_require__("../../../../../src/app/views/pages/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_component__ = __webpack_require__("../../../../../src/app/views/pages/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_routing_module__ = __webpack_require__("../../../../../src/app/views/pages/pages-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_component__ = __webpack_require__("../../../../../src/app/views/pages/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_select_ng_select__ = __webpack_require__("../../../../@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__forgotpassword_component__ = __webpack_require__("../../../../../src/app/views/pages/forgotpassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_services_pagesValidator__ = __webpack_require__("../../../../../src/app/services/pagesValidator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_6__pages_routing_module__["a" /* PagesRoutingModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_7_angular2_toaster__["b" /* ToasterModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ReactiveFormsModule"], __WEBPACK_IMPORTED_MODULE_8__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_12_ng4_loading_spinner__["Ng4LoadingSpinnerModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__ng_select_ng_select__["a" /* NgSelectModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__404_component__["a" /* P404Component */],
                __WEBPACK_IMPORTED_MODULE_2__500_component__["a" /* P500Component */],
                __WEBPACK_IMPORTED_MODULE_3__login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_4__register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__forgotpassword_component__["a" /* ForgotPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_13_app_services_pagesValidator__["a" /* PagesEqualValidator */]
            ],
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/pages/register.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <form #userRegiForm=\"ngForm\" name=\"updateUserForm\" novalidate>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Registration</h4>\r\n    <button type=\"button\" class=\"close\" (click)=\"successModal.hide()\" aria-label=\"Close\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <div class=\"form-group row\">\r\n\r\n            <div class=\"col-md-4\">\r\n\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-4\">\r\n\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-4\">\r\n\r\n            </div>\r\n            <div class=\"col-md-4\" *ngIf=\"user.ROLE != 1 && user.ROLE != 3\">\r\n\r\n            </div>\r\n            <div class=\"col-md-4\" *ngIf=\"user.ROLE != 1 && user.ROLE != 2\">\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-4\" *ngIf=\"user._id === undefined\">\r\n\r\n            </div>\r\n            <div class=\"col-md-4\" *ngIf=\"user._id === undefined\">\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"successModal.hide()\">Close</button>\r\n    <button type=\"button\" class=\"btn btn-primary px-4\" [disabled]=\"!userRegiForm.form.valid\"\r\n      *ngIf=\"user._id === undefined\" (click)=\"createUser(); successModal.hide()\">Save</button>\r\n    <button type=\"button\" class=\"btn btn-primary px-4\" [disabled]=\"!userRegiForm.form.valid\"\r\n      *ngIf=\"user._id != undefined\" (click)=\"updateUser(); successModal.hide()\">Update</button>\r\n  </div>\r\n</form> -->\r\n\r\n<toaster-container [toasterconfig]=\"toasterconfig\"></toaster-container>\r\n<ng4-loading-spinner></ng4-loading-spinner>\r\n<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <form #userRegiForm=\"ngForm\" name=\"updateUserForm\" novalidate>\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-md-8\">\r\n          <div class=\"card mx-4\">\r\n            <div class=\"card-body p-4\">\r\n              <h1>Register</h1>\r\n              <p class=\"text-muted\">Create your account</p>\r\n              <div class=\"form-group row\">\r\n                <div class=\"col-md-6\">\r\n                  <label for=\"fname\">First name :</label>\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Enter First name\" [(ngModel)]=\"user.FIRST_NAME\"\r\n                    name=\"FIRST_NAME\" #FIRST_NAME=\"ngModel\" required>\r\n                  <span class=\"help-block\" style=\"color: red;\"\r\n                    *ngIf=\"FIRST_NAME.errors && (FIRST_NAME.touched || userRegiForm.submitted)\">First Name is\r\n                    required</span>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <label for=\"lname\">Last name :</label>\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Enter Last name\" [(ngModel)]=\"user.LAST_NAME\"\r\n                    name=\"LAST_NAME\" #LAST_NAME=\"ngModel\" required>\r\n                  <span class=\"help-block\" style=\"color: red;\"\r\n                    *ngIf=\"LAST_NAME.errors && (LAST_NAME.touched || userRegiForm.submitted)\">Last Name is\r\n                    required</span>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row\">\r\n                <div class=\"col-md-6\">\r\n                  <label for=\"type\">User Role :\r\n                  </label>\r\n                  <ng-select [items]=\"userRoles\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select User Role\"\r\n                    [(ngModel)]=\"user.ROLE\" #ROLE=\"ngModel\" name=\"ROLE\" required>\r\n                  </ng-select>\r\n                  <span class=\"help-block\" style=\"color: red;\"\r\n                    *ngIf=\"ROLE.errors && (ROLE.touched || userRegiForm.submitted)\">User role is\r\n                    required</span>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <label for=\"email\">Email :</label>\r\n                  <input type=\"email\" class=\"form-control\" [(ngModel)]=\"user.EMAIL\" name=\"EMAIL\" #EMAIL=\"ngModel\"\r\n                    placeholder=\"Enter email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required>\r\n                  <span class=\"help-block\" style=\"color: red;\"\r\n                    *ngIf=\"EMAIL.errors && (EMAIL.valid || EMAIL.dirty || EMAIL.touched || userRegiForm.submitted)\">Email\r\n                    is required and format should be\r\n                    <i>john@doe.xyz</i></span>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <div class=\"col-md-6\">\r\n                  <label for=\"password\">Password :</label>\r\n                  <div class=\"input-group\">\r\n                    <input [type]=\"passwordType\" class=\"form-control\" [(ngModel)]=\"user.PASSWORD\" name=\"PASSWORD\"\r\n                      #PASSWORD=\"ngModel\" (change)=\"confirmPassword.control.updateValueAndValidity()\"\r\n                      placeholder=\"Enter password\" required>\r\n                    <div class=\"input-group-append\">\r\n                      <span class=\"input-group-text\" (click)=\"togglePassword()\"><i [class]=\"eyeIcon\"></i></span>\r\n                    </div>\r\n                  </div>\r\n                  <span class=\"help-block\" style=\"color: red;\"\r\n                    *ngIf=\"PASSWORD.errors && (PASSWORD.touched || PASSWORD.dirty && userRegiForm.submitted)\">Password\r\n                    is required</span>\r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                  <label for=\"password\">Repeat Password :</label>\r\n                  <div class=\"input-group\">\r\n                    <input [type]=\"passwordType2\" class=\"form-control\" [(ngModel)]=\"user.confirmPassword\"\r\n                      name=\"confirmPassword\" #confirmPassword=\"ngModel\" validateEqual=\"PASSWORD\"\r\n                      placeholder=\"Repeat password\" required>\r\n                    <div class=\"input-group-append\">\r\n                      <span class=\"input-group-text\" (click)=\"togglePassword2()\"><i [class]=\"eyeIcon2\"></i></span>\r\n                    </div>\r\n                  </div>\r\n                  <span class=\"help-block\" style=\"color: red;\"\r\n                    *ngIf=\"confirmPassword.errors && (confirmPassword.touched || confirmPassword.dirty && confirmPassword.errors?.required && userRegiForm.submitted)\">Password\r\n                    is required</span>\r\n                  <span class=\"help-block\" style=\"color: red;\"\r\n                    *ngIf=\"confirmPassword.errors && (confirmPassword.touched || confirmPassword.dirty && confirmPassword.errors?.notEqual && !confirmPassword.errors?.required)\">Password\r\n                    is not match</span>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row\">\r\n                <div class=\"col-md-6\">\r\n                  <label for=\"gender\">Gender :\r\n                  </label>\r\n                  <ng-select [items]=\"genders\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Gender\"\r\n                    [(ngModel)]=\"user.GENDER\" #GENDER=\"ngModel\" name=\"GENDER\" required>\r\n                  </ng-select>\r\n                  <span class=\"help-block\" style=\"color: red;\"\r\n                    *ngIf=\"GENDER.errors && (GENDER.touched || userRegiForm.submitted)\">Gender is\r\n                    required</span>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <label for=\"phone\">Phone :</label>\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.PHONE\" name=\"PHONE\" #PHONE=\"ngModel\"\r\n                    (keypress)=\"keyPress($event)\" minlength=10 maxlength=10 placeholder=\"Enter your phone\">\r\n                  <span class=\"help-block\" style=\"color: red;\"\r\n                    *ngIf=\"PHONE.errors && (PHONE.touched || userRegiForm.submitted)\">Phone is\r\n                    required. </span>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row\">\r\n                <div class=\"col-md-12\">\r\n                  <label for=\"address\">Address :</label>\r\n                  <textarea class=\"form-control\" placeholder=\"Enter Address\" [(ngModel)]=\"user.ADDRESS\" name=\"ADDRESS\"\r\n                    #ADDRESS=\"ngModel\" required></textarea>\r\n                  <span class=\"help-block\" style=\"color: red;\"\r\n                    *ngIf=\"ADDRESS.errors && (ADDRESS.touched || userRegiForm.submitted)\">Address is required</span>\r\n                </div>\r\n\r\n              </div>\r\n\r\n              <div class=\"form-group row\">\r\n                <div class=\"col-md-6\" *ngIf=\"user.ROLE != 1 && user.ROLE != 2\">\r\n                  <label for=\"address\">Qualification:</label>\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Enter Qaulification\"\r\n                    [(ngModel)]=\"user.QUALIFICATION\" name=\"QUALIFICATION\" #QUALIFICATION=\"ngModel\" required>\r\n                  <span class=\"help-block\" style=\"color: red;\"\r\n                    *ngIf=\"QUALIFICATION.errors && (QUALIFICATION.touched || userRegiForm.submitted)\">Qaulification is\r\n                    required</span>\r\n                </div>\r\n                <div class=\"col-md-6\" *ngIf=\"user.ROLE != 1 && user.ROLE != 3\">\r\n                  <label for=\"address\">Company Name :</label>\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Enter Company Name\" [(ngModel)]=\"user.COMP_NAME\"\r\n                    name=\"COMP_NAME\" #COMP_NAME=\"ngModel\" required>\r\n                  <span class=\"help-block\" style=\"color: red;\"\r\n                    *ngIf=\"COMP_NAME.errors && (COMP_NAME.touched || userRegiForm.submitted)\">Company Name is\r\n                    required</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-footer p-4\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                <button type=\"button\" [disabled]=\"!userRegiForm.form.valid\" (click)=\"createUser(); \"\r\n                  class=\"btn btn-block btn-success\">Create Account</button>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 text-center\">\r\n                  <span class=\"text-muted\">Already have an Account?</span>\r\n                  <p><a routerLink=\"/pages/login\" >Go to Login</a></p>\r\n                </div>\r\n                \r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/pages/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
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






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(spinnerService, modalService, toasterService, _user_service, _router) {
        this.spinnerService = spinnerService;
        this.modalService = modalService;
        this.toasterService = toasterService;
        this._user_service = _user_service;
        this._router = _router;
        this.passwordType = 'password';
        this.passwordShown = false;
        this.eyeIcon = 'fa fa-eye';
        this.passwordType2 = 'password';
        this.passwordShown2 = false;
        this.eyeIcon2 = 'fa fa-eye';
        this.toasterconfig = new __WEBPACK_IMPORTED_MODULE_1_angular2_toaster__["a" /* ToasterConfig */]({
            tapToDismiss: true,
            timeout: 5000
        });
        this.user = {};
        this.userlist = [];
        this.userRoles = [
            { label: "Venue Provider", value: 2 },
            { label: "User", value: 3 }
        ];
        this.genders = [
            { label: "Male", value: "male" },
            { label: "Female", value: "female" }
        ];
    }
    RegisterComponent.prototype.ngOnInit = function () {
        // this.getAllRegisterdUsers();
    };
    RegisterComponent.prototype.togglePassword = function () {
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
    RegisterComponent.prototype.togglePassword2 = function () {
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
    RegisterComponent.prototype.openAddUserModal = function () {
        this.user = {};
    };
    RegisterComponent.prototype.openEditUserModal = function (user) {
        this.user = user;
    };
    RegisterComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode !== 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    RegisterComponent.prototype.createUser = function () {
        var _this = this;
        this.spinnerService.show();
        this.loading = true;
        this._user_service.createUser(this.user)
            .subscribe(function (data) {
            if (data.verify == '1') {
                _this.spinnerService.hide();
                _this._router.navigate(['/pages/login']);
                _this.toasterService.pop('success', 'Done', 'Registration Done');
            }
            else {
                _this.spinnerService.hide();
                _this.toasterService.pop('error', 'Oopps..', 'Something went wrong');
            }
        }, function (error) {
            _this.spinnerService.hide();
            _this.toasterService.pop('error', 'Oppss..', 'Something went wrong!');
            // this.showError(error.statusText);
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/pages/register.component.html"),
            styles: [__webpack_require__("../../../../../src/scss/vendors/toastr/toastr.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner__["Ng4LoadingSpinnerService"], __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["b" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_1_angular2_toaster__["c" /* ToasterService */], __WEBPACK_IMPORTED_MODULE_3_app_services__["b" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/img/images/GettyImages-961308746.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "GettyImages-961308746.efd3e990a79c3fc5d8e2.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/images/form_bg_icon2.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "form_bg_icon2.4b9189f5e7058835953f.png";

/***/ }),

/***/ "../../../../css-loader/lib/url/escape.js":
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ })

});
//# sourceMappingURL=pages.module.chunk.js.map