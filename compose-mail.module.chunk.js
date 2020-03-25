webpackJsonp(["compose-mail.module"],{

/***/ "../../../../../src/app/views/compose-mail/compose-mail-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComposeMailRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compose_mail_component__ = __webpack_require__("../../../../../src/app/views/compose-mail/compose-mail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__compose_mail_component__["a" /* ComposeMailComponent */],
        data: {
            title: 'Compose'
        }
    }
];
var ComposeMailRoutingModule = /** @class */ (function () {
    function ComposeMailRoutingModule() {
    }
    ComposeMailRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ComposeMailRoutingModule);
    return ComposeMailRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/compose-mail/compose-mail.component.html":
/***/ (function(module, exports) {

module.exports = "<toaster-container [toasterconfig]=\"toasterconfig\"></toaster-container>\r\n<ng4-loading-spinner></ng4-loading-spinner>\r\n<div class=\"animated fadeIn\">\r\n    <div class=\"email-app\">\r\n        <main>\r\n            <h4 class=\"text-center\">New Message</h4>\r\n            <form>\r\n                <div class=\"form-row mb-3\">\r\n                    <label for=\"to\" class=\"col-2 col-sm-1 col-form-label\">UserType:</label>\r\n                    <div class=\"col-10 col-sm-11\">\r\n                        <ng-select [items]=\"userType\" bindLabel=\"label\" bindValue=\"value\" (change)=\"filterUsers($event)\"\r\n                            placeholder=\"Select Users\" required>\r\n                        </ng-select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-row mb-3\">\r\n                    <label for=\"to\" class=\"col-2 col-sm-1 col-form-label\">To:</label>\r\n                    <div class=\"col-10 col-sm-11\">\r\n                        <ng-select [items]=\"usersFilterList\" [(ngModel)]=\"composeObj.TO\" name=\"TO\" #TO=\"ngModel\"\r\n                            bindLabel=\"label\" bindValue=\"value\" multiple=\"true\" placeholder=\"Select mails\" required>\r\n                        </ng-select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-row mb-3\">\r\n                    <label for=\"cc\" class=\"col-2 col-sm-1 col-form-label\">Subject:</label>\r\n                    <div class=\"col-10 col-sm-11\">\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"composeObj.SUBJECT\" name=\"SUBJECT\"\r\n                            #SUBJECT=\"ngModel\" placeholder=\"Subject\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-row mb-3\">\r\n                    <label for=\"cc\" class=\"col-2 col-sm-1 col-form-label\">Price(₹):</label>\r\n                    <div class=\"col-10 col-sm-11\">\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"composeObj.PRICE\" name=\"PRICE\"\r\n                            #PRICE=\"ngModel\" placeholder=\"Price in Rs.\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-row mb-3\">\r\n                    <label for=\"cc\" class=\"col-2 col-sm-1 col-form-label\">Start Date:</label>\r\n                    <div class=\"col-10 col-sm-5\">\r\n                        <input type=\"text\" class=\"form-control\" [disabled]='toggleButton'\r\n                            [(ngModel)]=\"composeObj.START_DATE\" name=\"START_DATE\" #START_DATE=\"ngModel\"\r\n                            #dp=\"bsDatepicker\" bsDatepicker>\r\n                        <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"composeObj.START_DATE\" name=\"START_DATE\" #START_DATE=\"ngModel\"  placeholder=\"Price in Rs.\"> -->\r\n                    </div>\r\n\r\n                    <label for=\"cc\" class=\"col-2 col-sm-1 col-form-label\">End Date:</label>\r\n                    <div class=\"col-10 col-sm-5\">\r\n                        <input type=\"text\" class=\"form-control\" [disabled]='toggleButton'\r\n                            [(ngModel)]=\"composeObj.END_DATE\" name=\"END_DATE\" #END_DATE=\"ngModel\" #dp=\"bsDatepicker\"\r\n                            bsDatepicker>\r\n                        <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"composeObj.END_DATE\" name=\"PRICE\" #START_DATE=\"ngModel\"  placeholder=\"Price in Rs.\"> -->\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-row mb-3\">\r\n                    <label for=\"cc\" class=\"col-2 col-sm-1 col-form-label\">Place</label>\r\n                    <div class=\"col-10 col-sm-11\">\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"composeObj.PLACE\" name=\"PLACE\"\r\n                            #PLACE=\"ngModel\" placeholder=\"Add Place\">\r\n                    </div>\r\n                </div>\r\n            </form>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-11 ml-auto\">\r\n                    <!-- <div class=\"toolbar\" role=\"toolbar\">\r\n                        <div class=\"btn-group\">\r\n                            <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-bold\"></span></button>\r\n                            <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-italic\"></span></button>\r\n                            <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-underline\"></span></button>\r\n                        </div>\r\n                        <div class=\"btn-group\">\r\n                            <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-align-left\"></span></button>\r\n                            <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-align-right\"></span></button>\r\n                            <button type=\"button\" class=\"btn btn-light\"><span\r\n                                    class=\"fa fa-align-center\"></span></button>\r\n                            <button type=\"button\" class=\"btn btn-light\"><span\r\n                                    class=\"fa fa-align-justify\"></span></button>\r\n                        </div>\r\n                        <div class=\"btn-group\">\r\n                            <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-indent\"></span></button>\r\n                            <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-outdent\"></span></button>\r\n                        </div>\r\n                        <div class=\"btn-group\">\r\n                            <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-list-ul\"></span></button>\r\n                            <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-list-ol\"></span></button>\r\n                        </div>\r\n                        <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-trash-o\"></span></button>\r\n                        <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-paperclip\"></span></button>\r\n                        <div class=\"btn-group\" dropdown placement=\"bottom right\">\r\n                            <button type=\"button\" class=\"btn btn-light dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\"\r\n                                role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle (click)=\"false\">\r\n                                <span class=\"fa fa-tags\"></span> <span class=\"caret\"></span>\r\n                            </button>\r\n                            <div class=\"dropdown-menu\" *dropdownMenu>\r\n                                <a class=\"dropdown-item\" href=\"#\">add label <span class=\"badge badge-danger\">\r\n                                        Home</span></a>\r\n                                <a class=\"dropdown-item\" href=\"#\">add label <span class=\"badge badge-info\">\r\n                                        Job</span></a>\r\n                                <a class=\"dropdown-item\" href=\"#\">add label <span class=\"badge badge-success\">\r\n                                        Clients</span></a>\r\n                                <a class=\"dropdown-item\" href=\"#\">add label <span class=\"badge badge-warning\">\r\n                                        News</span></a>\r\n                            </div>\r\n                        </div>\r\n                    </div> -->\r\n                    <div class=\"form-group mt-4\">\r\n                        <!-- <textarea class=\"form-control\" id=\"message\" name=\"body\" rows=\"12\"\r\n                            [(ngModel)]=\"composeObj.MESSAGE\" name=\"MESSAGE\" #MESSAGE=\"ngModel\"\r\n                            placeholder=\"Click here to reply\"></textarea> -->\r\n                            <app-ngx-editor [placeholder]=\"'Enter text here...'\" rows=\"12\" [spellcheck]=\"true\" [(ngModel)]=\"composeObj.MESSAGE\"\r\n                            name=\"MESSAGE\" #MESSAGE=\"ngModel\">\r\n                          </app-ngx-editor>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <button type=\"button\" class=\"btn btn-success\" (click)=\"sendMail()\">Send</button>\r\n                        <!-- <button type=\"submit\" class=\"btn btn-light\">Draft</button> -->\r\n                        <button type=\"button\" class=\"btn btn-danger\">Discard</button>\r\n                        <!-- <button type=\"submit\" class=\"btn btn-light\">Draft</button>\r\n                        <button type=\"submit\" class=\"btn btn-danger\">Discard</button> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </main>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/compose-mail/compose-mail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/compose-mail/compose-mail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComposeMailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ComposeMailComponent = /** @class */ (function () {
    function ComposeMailComponent(_user_service, toasterService, spinnerService) {
        this._user_service = _user_service;
        this.toasterService = toasterService;
        this.spinnerService = spinnerService;
        this.composeObj = {};
        this.user = {};
        this.selected = 1;
        this.toasterconfig = new __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["a" /* ToasterConfig */]({
            tapToDismiss: true,
            timeout: 5000
        });
        this.userType = [
            { label: "User", value: 1 },
            { label: "Venue Provider", value: 2 },
        ];
        this.radioChecku = "true";
        this.radioCheckv = "false";
        this.users = [];
        this.usersList = [];
        this.usersFilterList = [];
        this.getAllRegisterdUsers();
        this.loggedInUser = JSON.parse(localStorage.getItem('user'));
        this.composeObj.START_DATE = new Date();
        this.composeObj.END_DATE = new Date();
    }
    ComposeMailComponent.prototype.ngOnInit = function () {
        // this.usersList = [
        //   {
        //     value: "1",
        //     label: "Abc",
        //     type: "u"
        //   },
        //   {
        //     value: "2",
        //     label: "Xyz",
        //     type: "v"
        //   },
        //   {
        //     value: "3",
        //     label: "Pqr",
        //     type: "u"
        //   },
        //   {
        //     value: "4",
        //     label: "Qwe",
        //     type: "v"
        //   },
        //   {
        //     value: "5",
        //     label: "Yui",
        //     type: "u"
        //   },
        // ]
    };
    ComposeMailComponent.prototype.sendMail = function () {
        var _this = this;
        this.spinnerService.show();
        this.composeObj.FROM = this.loggedInUser.EMAIL;
        this._user_service.sendMail(this.composeObj)
            .subscribe(function (data) {
            if (data.verify == '1') {
                // this.usersList = data.data;
                _this.toasterService.pop('success', 'Done', 'Email send...');
                _this.clearData();
                _this.spinnerService.hide();
            }
            else {
                _this.toasterService.pop('error', 'ooops..', 'Something went wrong !');
                _this.spinnerService.hide();
            }
        }, function (error) {
            _this.toasterService.pop('error', 'Server Error', 'Something went wrong !');
            _this.spinnerService.hide();
            _this.loading = false;
        });
    };
    ComposeMailComponent.prototype.clearData = function () {
        this.userType = [];
        this.composeObj.TO = [];
        this.composeObj.SUBJECT = "";
        this.composeObj.PRICE = "";
        this.composeObj.MESSAGE = "";
        this.composeObj.PLACE = "";
        this.composeObj.START_DATE = new Date();
        this.composeObj.END_DATE = new Date();
    };
    ComposeMailComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode !== 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    ComposeMailComponent.prototype.filterUsers = function (data) {
        if (data.value == 1) {
            var temp = this.usersList.filter(function (x) { return x.ROLE === 3; });
            var tempList = [];
            temp.forEach(function (element) {
                tempList.push({ label: element.EMAIL, value: element.EMAIL });
            });
            this.usersFilterList = tempList;
        }
        else {
            var temp = this.usersList.filter(function (x) { return x.ROLE === 2; });
            var tempList = [];
            temp.forEach(function (element) {
                tempList.push({ label: element.EMAIL, value: element.EMAIL });
            });
            this.usersFilterList = tempList;
        }
    };
    ComposeMailComponent.prototype.getAllRegisterdUsers = function () {
        var _this = this;
        this.loading = true;
        this._user_service.getAllRegisterdUsers()
            .subscribe(function (data) {
            if (data.verify == '1') {
                _this.usersList = data.data;
            }
            else {
                _this.toasterService.pop('error', 'ooops..', 'Something went wrong !');
            }
        }, function (error) {
            _this.toasterService.pop('error', 'Server Error', 'Something went wrong !');
            _this.loading = false;
        });
    };
    ComposeMailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-compose-mail',
            template: __webpack_require__("../../../../../src/app/views/compose-mail/compose-mail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/compose-mail/compose-mail.component.scss"), __webpack_require__("../../../../../src/scss/vendors/toastr/toastr.scss"), __webpack_require__("../../../../../src/scss/vendors/bs-datepicker/bs-datepicker.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services__["b" /* UserService */], __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["c" /* ToasterService */], __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], ComposeMailComponent);
    return ComposeMailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/compose-mail/compose-mail.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComposeMailModule", function() { return ComposeMailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compose_mail_routing_module__ = __webpack_require__("../../../../../src/app/views/compose-mail/compose-mail-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__compose_mail_component__ = __webpack_require__("../../../../../src/app/views/compose-mail/compose-mail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_select_ng_select__ = __webpack_require__("../../../../@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_editor__ = __webpack_require__("../../../../ngx-editor/fesm5/ngx-editor.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ComposeMailModule = /** @class */ (function () {
    function ComposeMailModule() {
    }
    ComposeMailModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__compose_mail_routing_module__["a" /* ComposeMailRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_select_ng_select__["a" /* NgSelectModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["b" /* ToasterModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["a" /* BsDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_ng4_loading_spinner__["Ng4LoadingSpinnerModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_ngx_editor__["a" /* NgxEditorModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__compose_mail_component__["a" /* ComposeMailComponent */]]
        })
    ], ComposeMailModule);
    return ComposeMailModule;
}());



/***/ })

});
//# sourceMappingURL=compose-mail.module.chunk.js.map