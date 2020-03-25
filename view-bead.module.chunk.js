webpackJsonp(["view-bead.module"],{

/***/ "../../../../../src/app/views/beading-inbox-mail/view-bead/view-bead.component.html":
/***/ (function(module, exports) {

module.exports = "<toaster-container [toasterconfig]=\"toasterconfig\"></toaster-container>\r\n<ng4-loading-spinner></ng4-loading-spinner>\r\n<div class=\"animated fadeIn\">\r\n  <div class=\"row clearfix\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"d-flex\">\r\n        <div class=\"inbox right w-100\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-8 title\">{{email.SUBJECT}}</div>\r\n                <div class=\"col-md-4 text-right\">\r\n                  <button class=\"btn btn-danger\" routerLink=\"/beading-inbox-mail\"><i class=\"fa fa-arrow-left\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-body mb-2\">\r\n              <div class=\"card-body \">\r\n                <ul class=\"list-unstyled d-flex justify-content-md-start mb-0\">\r\n                  <li><img class=\"rounded w40\" src=\"assets/img/xs/avatar1.jpg\" alt=\"\"></li>\r\n                  <li class=\"ml-3\">\r\n                    <p class=\"mb-0\"><span class=\"text-muted\">From:</span> <a\r\n                        href=\"javascript:void(0);\">{{email.FROM}}</a></p>\r\n                    <p class=\"mb-0\" *ngIf=\"user.EMAIL != email.TO\"><span class=\"text-muted\">To:</span> {{email.TO}}\r\n                    </p>\r\n                    <p class=\"mb-0\" *ngIf=\"user.EMAIL === email.TO\"><span class=\"text-muted\">To:</span> Me</p>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n              <div class=\"header mb-2 text-info border-bottom\">\r\n                <span>Place : <span style=\"color: #000;\"> {{email.PLACE | titlecase}} </span> </span>\r\n\r\n              </div>\r\n              <div class=\"header mb-2 text-info border-bottom\">\r\n                <span>Venue Price : <span style=\"color: #000;\"> {{email.PRICE}}</span> </span>\r\n              </div>\r\n              <div class=\"card-body mb-2\">\r\n                <h6 *ngIf=\"user.EMAIL === email.TO\">Hello {{user.FIRST_NAME}} {{user.LAST_NAME}},</h6>\r\n                <br>\r\n                <!-- <p>{{email.SUBJECT}}</p> -->\r\n                <ul>\r\n                  <li>\r\n                    <div [innerHTML]=\"email.MESSAGE\"></div>\r\n                  </li>\r\n                </ul>\r\n           \r\n              </div>\r\n              <div class=\"row\" *ngIf=\"user.ROLE === 3\">\r\n                <div class=\"col-md-12\">\r\n                  <button class=\"btn btn-success text-white accept\" *ngIf=\"email.ISACCEPT != true\"\r\n                    (click)=\"isAccept()\"><i class=\"fa fa-check\"></i>\r\n                    <span>Accept</span></button>\r\n                  <button class=\"btn btn-success text-white accept\" *ngIf=\"email.ISACCEPT === true\"><i\r\n                      class=\"fa fa-check\"></i>\r\n                    <span>Accepted</span></button>\r\n                  <button *ngIf=\"email.ISACCEPT != true\" class=\"btn btn-danger text-white reject\"\r\n                    (click)=\"editorClose()\"><i class=\"fa fa-close\"></i>\r\n                    <span>No Thanks</span></button>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"card\" *ngIf=\"editorFlag==true\">\r\n            <div class=\"card-body accept-reply\">\r\n              <app-ngx-editor [placeholder]=\"'Enter text here...'\" [spellcheck]=\"true\" [(ngModel)]=\"replyObj.MESSAGE\"\r\n                name=\"MESSAGE\" #MESSAGE=\"ngModel\">\r\n              </app-ngx-editor>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n              <button class=\"btn btn-primary waves-effect m-t-20\" (click)=\"reply()\"> <i class=\"fa fa-paper-plane\"\r\n                  aria-hidden=\"true\"></i> Reply</button>\r\n              <button type=\"button\" class=\"btn btn-primary waves-effect m-t-20 accept-close\"\r\n                (click)=\"editorClose()\">Close</button>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Reply Email Data -->\r\n          <!-- {{replyEmail | json}} -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<div class=\"animated fadeIn\" *ngIf=\"replyEmail != undefined && replyEmail != null\">\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <div class=\"email-app mb-4\">\r\n        <main class=\"inbox\">\r\n          <ul class=\"messages\">\r\n            <li class=\"message unread\">\r\n              <a>\r\n                <div class=\"actions\">\r\n                  <span class=\"action\"><i class=\"fa fa-square-o\"></i></span>\r\n                  <span class=\"action\"><i class=\"fa fa-star-o\"></i></span>\r\n                </div>\r\n                <div class=\"header\">\r\n                  <span class=\"from\">{{replyEmail.FROM}}</span>\r\n                  <span class=\"date\"><span class=\"fa fa-paper-clip\"></span> {{replyEmail.CREATED_DATE}}</span>\r\n                </div>\r\n                <div class=\"title\">\r\n                  {{replyEmail.SUBJECT}}\r\n                </div>\r\n                <div class=\"description\">\r\n                  <div [innerHTML]=\"replyEmail.MESSAGE\"></div>\r\n                </div>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </main>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<toaster-container [toasterconfig]=\"toasterconfig\"></toaster-container>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/beading-inbox-mail/view-bead/view-bead.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/beading-inbox-mail/view-bead/view-bead.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewBeadComponent; });
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





var ViewBeadComponent = /** @class */ (function () {
    function ViewBeadComponent(route, router, spinnerService, toasterService, user_service) {
        this.route = route;
        this.router = router;
        this.spinnerService = spinnerService;
        this.toasterService = toasterService;
        this.user_service = user_service;
        this.editorFlag = false;
        this.email = {};
        this.replyObj = {};
        this.user = {};
        this.toasterconfig = new __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["a" /* ToasterConfig */]({
            tapToDismiss: true,
            timeout: 5000
        });
    }
    ViewBeadComponent.prototype.ngOnInit = function () {
        this.htmlContent = 'Hello there,  <br/> <p>The toolbar can be customized and it also supports various callbacks such as <code>oninit</code>, <code>onfocus</code>, <code>onpaste</code> and many more.</p> <p>Please try <b>paste some texts</b> here</p>';
        this.emailId = this.router.snapshot.paramMap.get('id');
        // console.log(this.emailId)
        this.user = JSON.parse(localStorage.getItem("user"));
        this.getEmailDataById(this.emailId);
        this.statusChange();
    };
    ViewBeadComponent.prototype.editorOpen = function () {
        this.editorFlag = true;
    };
    ViewBeadComponent.prototype.editorClose = function () {
        this.editorFlag = false;
    };
    ViewBeadComponent.prototype.statusChange = function () {
        var data = {
            _id: this.emailId
        };
        this.user_service.emailReadStatus(data)
            .subscribe(function (data) {
        }, function (error) {
            console.log(error);
        });
    };
    ViewBeadComponent.prototype.getEmailDataById = function (id) {
        var _this = this;
        this.user_service.getEmailDataById(id)
            .subscribe(function (data) {
            // console.log(data);
            _this.email = data.data;
            console.log(_this.email);
            if (_this.email.ISACCEPT === true) {
                _this.getReplyEmailById();
            }
        }, function (error) {
            console.log(error);
        });
    };
    ViewBeadComponent.prototype.isAccept = function () {
        var _this = this;
        this.spinnerService.show();
        this.user_service.isAccept(this.email)
            .subscribe(function (data) {
            if (data.verify == '1') {
                // this.usersList = data.data;
                _this.editorFlag = true;
                _this.toasterService.pop('success', 'Done', 'You have accepted this job..!!');
                _this.spinnerService.hide();
            }
            else {
                _this.toasterService.pop('error', 'ooops..', 'Something went wrong !');
                _this.spinnerService.hide();
            }
        }, function (error) {
            _this.toasterService.pop('error', 'Server Error', 'Something went wrong !');
            _this.spinnerService.hide();
            // this.loading = false;
        });
    };
    ViewBeadComponent.prototype.reply = function () {
        var _this = this;
        this.spinnerService.show();
        this.replyObj.TO = this.email.FROM,
            this.replyObj.FROM = this.email.TO;
        this.replyObj.SUBJECT = this.email.SUBJECT;
        this.replyObj.EMAIL_ID = this.email._id;
        this.user_service.replyEmail(this.replyObj)
            .subscribe(function (data) {
            if (data.verify == '1') {
                _this.spinnerService.hide();
                _this.toasterService.pop('success', 'Done', 'Email send...');
            }
            else {
                _this.spinnerService.hide();
                _this.toasterService.pop('error', 'ooops..', 'Something went wrong !');
            }
        }, function (error) {
            _this.toasterService.pop('error', 'Server Error', 'Something went wrong !');
        });
    };
    ViewBeadComponent.prototype.getReplyEmailById = function () {
        var _this = this;
        this.user_service.getReplyEmailById(this.email._id)
            .subscribe(function (data) {
            _this.replyEmail = data.data;
            console.log(_this.replyEmail);
        }, function (error) {
            console.log(error);
        });
    };
    ViewBeadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-bead',
            template: __webpack_require__("../../../../../src/app/views/beading-inbox-mail/view-bead/view-bead.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/beading-inbox-mail/view-bead/view-bead.component.scss"), __webpack_require__("../../../../../src/scss/vendors/toastr/toastr.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["c" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_2_app_services__["b" /* UserService */]])
    ], ViewBeadComponent);
    return ViewBeadComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/beading-inbox-mail/view-bead/view-bead.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBeadModule", function() { return ViewBeadModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_buttons__ = __webpack_require__("../../../../ngx-bootstrap/buttons/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_ace_editor__ = __webpack_require__("../../../../ng2-ace-editor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_select_ng_select__ = __webpack_require__("../../../../@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__view_bead_component__ = __webpack_require__("../../../../../src/app/views/beading-inbox-mail/view-bead/view-bead.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__view_bead_routing__ = __webpack_require__("../../../../../src/app/views/beading-inbox-mail/view-bead/view-bead.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_editor__ = __webpack_require__("../../../../ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var ViewBeadModule = /** @class */ (function () {
    function ViewBeadModule() {
    }
    ViewBeadModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_12__view_bead_routing__["a" /* ViewBeadRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_buttons__["a" /* ButtonsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ng2_ace_editor__["a" /* AceEditorModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_7_angular2_datatable__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__["c" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_angular2_toaster__["b" /* ToasterModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__["g" /* TooltipModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__ng_select_ng_select__["a" /* NgSelectModule */],
                __WEBPACK_IMPORTED_MODULE_13_ngx_editor__["a" /* NgxEditorModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_15_ng4_loading_spinner__["Ng4LoadingSpinnerModule"].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_11__view_bead_component__["a" /* ViewBeadComponent */]]
        })
    ], ViewBeadModule);
    return ViewBeadModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/beading-inbox-mail/view-bead/view-bead.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewBeadRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_bead_component__ = __webpack_require__("../../../../../src/app/views/beading-inbox-mail/view-bead/view-bead.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__view_bead_component__["a" /* ViewBeadComponent */],
        data: {
            title: ''
        }
    }
];
var ViewBeadRoutingModule = /** @class */ (function () {
    function ViewBeadRoutingModule() {
    }
    ViewBeadRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ViewBeadRoutingModule);
    return ViewBeadRoutingModule;
}());



/***/ })

});
//# sourceMappingURL=view-bead.module.chunk.js.map