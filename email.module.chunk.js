webpackJsonp(["email.module"],{

/***/ "../../../../../src/app/views/uikits/email/compose.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"email-app\">\r\n    <nav>\r\n      <a href=\"#\" class=\"btn btn-danger btn-block\">New Email</a>\r\n      <ul class=\"nav\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-inbox\"></i> Inbox <span class=\"badge badge-danger\">4</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-star\"></i> Stared</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-rocket\"></i> Sent</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-trash-o\"></i> Trash</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-bookmark\"></i> Important<span class=\"badge badge-info\">5</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-inbox\"></i> Inbox <span class=\"badge badge-danger\">4</span></a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n    <main>\r\n      <p class=\"text-center\">New Message</p>\r\n      <form>\r\n        <div class=\"form-row mb-3\">\r\n          <label for=\"to\" class=\"col-2 col-sm-1 col-form-label\">To:</label>\r\n          <div class=\"col-10 col-sm-11\">\r\n            <input type=\"email\" class=\"form-control\" id=\"to\" placeholder=\"Type email\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row mb-3\">\r\n          <label for=\"cc\" class=\"col-2 col-sm-1 col-form-label\">CC:</label>\r\n          <div class=\"col-10 col-sm-11\">\r\n            <input type=\"email\" class=\"form-control\" id=\"cc\" placeholder=\"Type email\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row mb-3\">\r\n          <label for=\"bcc\" class=\"col-2 col-sm-1 col-form-label\">BCC:</label>\r\n          <div class=\"col-10 col-sm-11\">\r\n            <input type=\"email\" class=\"form-control\" id=\"bcc\" placeholder=\"Type email\">\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-11 ml-auto\">\r\n          <div class=\"toolbar\" role=\"toolbar\">\r\n            <div class=\"btn-group\">\r\n              <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-bold\"></span></button>\r\n              <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-italic\"></span></button>\r\n              <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-underline\"></span></button>\r\n            </div>\r\n            <div class=\"btn-group\">\r\n              <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-align-left\"></span></button>\r\n              <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-align-right\"></span></button>\r\n              <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-align-center\"></span></button>\r\n              <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-align-justify\"></span></button>\r\n            </div>\r\n            <div class=\"btn-group\">\r\n              <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-indent\"></span></button>\r\n              <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-outdent\"></span></button>\r\n            </div>\r\n            <div class=\"btn-group\">\r\n              <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-list-ul\"></span></button>\r\n              <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-list-ol\"></span></button>\r\n            </div>\r\n            <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-trash-o\"></span></button>\r\n            <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-paperclip\"></span></button>\r\n            <div class=\"btn-group\" dropdown placement=\"bottom right\">\r\n              <button type=\"button\" class=\"btn btn-light dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle (click)=\"false\">\r\n                <span class=\"fa fa-tags\"></span> <span class=\"caret\"></span>\r\n              </button>\r\n              <div class=\"dropdown-menu\" *dropdownMenu>\r\n                <a class=\"dropdown-item\" href=\"#\">add label <span class=\"badge badge-danger\"> Home</span></a>\r\n                <a class=\"dropdown-item\" href=\"#\">add label <span class=\"badge badge-info\"> Job</span></a>\r\n                <a class=\"dropdown-item\" href=\"#\">add label <span class=\"badge badge-success\"> Clients</span></a>\r\n                <a class=\"dropdown-item\" href=\"#\">add label <span class=\"badge badge-warning\"> News</span></a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group mt-4\">\r\n            <textarea class=\"form-control\" id=\"message\" name=\"body\" rows=\"12\" placeholder=\"Click here to reply\"></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <button type=\"submit\" class=\"btn btn-success\">Send</button>\r\n            <button type=\"submit\" class=\"btn btn-light\">Draft</button>\r\n            <button type=\"submit\" class=\"btn btn-danger\">Discard</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </main>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/uikits/email/compose.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComposeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComposeComponent = /** @class */ (function () {
    function ComposeComponent() {
    }
    ComposeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/uikits/email/compose.component.html")
        })
    ], ComposeComponent);
    return ComposeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/uikits/email/email-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compose_component__ = __webpack_require__("../../../../../src/app/views/uikits/email/compose.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inbox_component__ = __webpack_require__("../../../../../src/app/views/uikits/email/inbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_component__ = __webpack_require__("../../../../../src/app/views/uikits/email/message.component.ts");
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
            title: 'Email App'
        },
        children: [
            {
                path: 'compose',
                component: __WEBPACK_IMPORTED_MODULE_2__compose_component__["a" /* ComposeComponent */],
                data: {
                    title: 'Compose'
                }
            },
            {
                path: 'inbox',
                component: __WEBPACK_IMPORTED_MODULE_3__inbox_component__["a" /* InboxComponent */],
                data: {
                    title: 'Inbox'
                }
            },
            {
                path: 'message',
                component: __WEBPACK_IMPORTED_MODULE_4__message_component__["a" /* MessageComponent */],
                data: {
                    title: 'Message'
                }
            }
        ]
    }
];
var EmailRoutingModule = /** @class */ (function () {
    function EmailRoutingModule() {
    }
    EmailRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], EmailRoutingModule);
    return EmailRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/uikits/email/email.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailModule", function() { return EmailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__compose_component__ = __webpack_require__("../../../../../src/app/views/uikits/email/compose.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inbox_component__ = __webpack_require__("../../../../../src/app/views/uikits/email/inbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__message_component__ = __webpack_require__("../../../../../src/app/views/uikits/email/message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__email_routing_module__ = __webpack_require__("../../../../../src/app/views/uikits/email/email-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Email



// Routing

var EmailModule = /** @class */ (function () {
    function EmailModule() {
    }
    EmailModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__email_routing_module__["a" /* EmailRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__compose_component__["a" /* ComposeComponent */],
                __WEBPACK_IMPORTED_MODULE_4__inbox_component__["a" /* InboxComponent */],
                __WEBPACK_IMPORTED_MODULE_5__message_component__["a" /* MessageComponent */],
            ]
        })
    ], EmailModule);
    return EmailModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/uikits/email/inbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"email-app mb-4\">\r\n    <nav>\r\n      <a href=\"page-inbox-compose.html\" class=\"btn btn-danger btn-block\">New Email</a>\r\n      <ul class=\"nav\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-inbox\"></i> Inbox <span class=\"badge badge-danger\">4</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-star\"></i> Stared</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-rocket\"></i> Sent</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-trash-o\"></i> Trash</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-bookmark\"></i> Important<span class=\"badge badge-info\">5</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-inbox\"></i> Inbox <span class=\"badge badge-danger\">4</span></a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n    <main class=\"inbox\">\r\n      <div class=\"toolbar\">\r\n        <div class=\"btn-group\">\r\n          <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-envelope\"></span></button>\r\n          <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-star\"></span></button>\r\n          <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-star-o\"></span></button>\r\n          <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-bookmark-o\"></span></button>\r\n        </div>\r\n        <div class=\"btn-group\">\r\n          <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-mail-reply\"></span></button>\r\n          <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-mail-reply-all\"></span></button>\r\n          <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-mail-forward\"></span></button>\r\n        </div>\r\n        <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-trash-o\"></span></button>\r\n        <div class=\"btn-group\" dropdown placement=\"bottom right\">\r\n          <button type=\"button\" class=\"btn btn-light dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle (click)=\"false\">\r\n            <span class=\"fa fa-tags\"></span> <span class=\"caret\"></span>\r\n          </button>\r\n          <div class=\"dropdown-menu\" *dropdownMenu>\r\n            <a class=\"dropdown-item\" href=\"#\">add label <span class=\"badge badge-danger\"> Home</span></a>\r\n            <a class=\"dropdown-item\" href=\"#\">add label <span class=\"badge badge-info\"> Job</span></a>\r\n            <a class=\"dropdown-item\" href=\"#\">add label <span class=\"badge badge-success\"> Clients</span></a>\r\n            <a class=\"dropdown-item\" href=\"#\">add label <span class=\"badge badge-warning\"> News</span></a>\r\n          </div>\r\n        </div>\r\n        <div class=\"btn-group float-right\">\r\n          <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-chevron-left\"></span></button>\r\n          <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-chevron-right\"></span></button>\r\n        </div>\r\n      </div>\r\n\r\n      <ul class=\"messages\">\r\n        <li class=\"message unread\">\r\n          <a href=\"#\">\r\n            <div class=\"actions\">\r\n              <span class=\"action\"><i class=\"fa fa-square-o\"></i></span>\r\n              <span class=\"action\"><i class=\"fa fa-star-o\"></i></span>\r\n            </div>\r\n            <div class=\"header\">\r\n              <span class=\"from\">Lukasz Holeczek</span>\r\n              <span class=\"date\"><span class=\"fa fa-paper-clip\"></span> Today, 3:47 PM</span>\r\n            </div>\r\n            <div class=\"title\">\r\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n            </div>\r\n            <div class=\"description\">\r\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n            </div>\r\n          </a>\r\n        </li>\r\n        <li class=\"message\">\r\n          <a href=\"#\">\r\n            <div class=\"actions\">\r\n              <span class=\"action\"><i class=\"fa fa-square-o\"></i></span>\r\n              <span class=\"action\"><i class=\"fa fa-star-o\"></i></span>\r\n            </div>\r\n            <div class=\"header\">\r\n              <span class=\"from\">Lukasz Holeczek</span>\r\n              <span class=\"date\"><span class=\"fa fa-paper-clip\"></span> Today, 3:47 PM</span>\r\n            </div>\r\n            <div class=\"title\">\r\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n            </div>\r\n            <div class=\"description\">\r\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n            </div>\r\n          </a>\r\n        </li>\r\n        <li class=\"message\">\r\n          <a href=\"#\">\r\n            <div class=\"actions\">\r\n              <span class=\"action\"><i class=\"fa fa-square-o\"></i></span>\r\n              <span class=\"action\"><i class=\"fa fa-star-o\"></i></span>\r\n            </div>\r\n            <div class=\"header\">\r\n              <span class=\"from\">Lukasz Holeczek</span>\r\n              <span class=\"date\">Today, 3:47 PM</span>\r\n            </div>\r\n            <div class=\"title\">\r\n              Lorem ipsum dolor sit amet.\r\n            </div>\r\n            <div class=\"description\">\r\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n            </div>\r\n          </a>\r\n        </li>\r\n        <li class=\"message unread\">\r\n          <a href=\"#\">\r\n            <div class=\"actions\">\r\n              <span class=\"action\"><i class=\"fa fa-square-o\"></i></span>\r\n              <span class=\"action\"><i class=\"fa fa-star-o\"></i></span>\r\n            </div>\r\n            <div class=\"header\">\r\n              <span class=\"from\">Lukasz Holeczek</span>\r\n              <span class=\"date\">Today, 3:47 PM</span>\r\n            </div>\r\n            <div class=\"title\">\r\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n            </div>\r\n            <div class=\"description\">\r\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n            </div>\r\n          </a>\r\n        </li>\r\n        <li class=\"message\">\r\n          <a href=\"#\">\r\n            <div class=\"actions\">\r\n              <span class=\"action\"><i class=\"fa fa-square-o\"></i></span>\r\n              <span class=\"action\"><i class=\"fa fa-star-o\"></i></span>\r\n            </div>\r\n            <div class=\"header\">\r\n              <span class=\"from\">Lukasz Holeczek</span>\r\n              <span class=\"date\">Today, 3:47 PM</span>\r\n            </div>\r\n            <div class=\"title\">\r\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n            </div>\r\n            <div class=\"description\">\r\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n            </div>\r\n\r\n          </a>\r\n        </li>\r\n        <li class=\"message\">\r\n          <a href=\"#\">\r\n            <div class=\"actions\">\r\n              <span class=\"action\"><i class=\"fa fa-square-o\"></i></span>\r\n              <span class=\"action\"><i class=\"fa fa-star-o\"></i></span>\r\n            </div>\r\n            <div class=\"header\">\r\n              <span class=\"from\">Lukasz Holeczek</span>\r\n              <span class=\"date\">Today, 3:47 PM</span>\r\n            </div>\r\n            <div class=\"title\">\r\n              Lorem ipsum dolor sit amet.\r\n            </div>\r\n            <div class=\"description\">\r\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n            </div>\r\n          </a>\r\n        </li>\r\n        <li class=\"message unread\">\r\n          <a href=\"#\">\r\n            <div class=\"actions\">\r\n              <span class=\"action\"><i class=\"fa fa-square-o\"></i></span>\r\n              <span class=\"action\"><i class=\"fa fa-star-o\"></i></span>\r\n            </div>\r\n            <div class=\"header\">\r\n              <span class=\"from\">Lukasz Holeczek</span>\r\n              <span class=\"date\">Today, 3:47 PM</span>\r\n            </div>\r\n            <div class=\"title\">\r\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit.\r\n            </div>\r\n            <div class=\"description\">\r\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n            </div>\r\n          </a>\r\n        </li>\r\n        <li class=\"message\">\r\n          <a href=\"#\">\r\n            <div class=\"actions\">\r\n              <span class=\"action\"><i class=\"fa fa-square-o\"></i></span>\r\n              <span class=\"action\"><i class=\"fa fa-star-o\"></i></span>\r\n            </div>\r\n            <div class=\"header\">\r\n              <span class=\"from\">Lukasz Holeczek</span>\r\n              <span class=\"date\">Today, 3:47 PM</span>\r\n            </div>\r\n            <div class=\"title\">\r\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n            </div>\r\n            <div class=\"description\">\r\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n            </div>\r\n          </a>\r\n        </li>\r\n        <li class=\"message\">\r\n          <a href=\"#\">\r\n            <div class=\"actions\">\r\n              <span class=\"action\"><i class=\"fa fa-square-o\"></i></span>\r\n              <span class=\"action\"><i class=\"fa fa-star-o\"></i></span>\r\n            </div>\r\n            <div class=\"header\">\r\n              <span class=\"from\">Lukasz Holeczek</span>\r\n              <span class=\"date\">Today, 3:47 PM</span>\r\n            </div>\r\n            <div class=\"title\">\r\n              Lorem ipsum dolor sit amet.\r\n            </div>\r\n            <div class=\"description\">\r\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n            </div>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </main>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/uikits/email/inbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InboxComponent = /** @class */ (function () {
    function InboxComponent() {
    }
    InboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/uikits/email/inbox.component.html")
        })
    ], InboxComponent);
    return InboxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/uikits/email/message.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"email-app mb-4\">\r\n    <nav>\r\n      <a href=\"#\" class=\"btn btn-danger btn-block\">New Email</a>\r\n      <ul class=\"nav\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-inbox\"></i> Inbox <span class=\"badge badge-danger\">4</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-star\"></i> Stared</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-rocket\"></i> Sent</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-trash-o\"></i> Trash</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-bookmark\"></i> Important<span class=\"badge badge-info\">5</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-inbox\"></i> Inbox <span class=\"badge badge-danger\">4</span></a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n    <main class=\"message\">\r\n      <div class=\"toolbar\">\r\n        <div class=\"btn-group\">\r\n          <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-star\"></span></button>\r\n          <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-star-o\"></span></button>\r\n          <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-bookmark-o\"></span></button>\r\n        </div>\r\n        <div class=\"btn-group\">\r\n          <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-mail-reply\"></span></button>\r\n          <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-mail-reply-all\"></span></button>\r\n          <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-mail-forward\"></span></button>\r\n        </div>\r\n        <button type=\"button\" class=\"btn btn-light\"><span class=\"fa fa-trash-o\"></span></button>\r\n        <div class=\"btn-group\" dropdown placement=\"bottom right\">\r\n          <button type=\"button\" class=\"btn btn-light dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle (click)=\"false\">\r\n            <span class=\"fa fa-tags\"></span> <span class=\"caret\"></span>\r\n          </button>\r\n          <div class=\"dropdown-menu\" *dropdownMenu>\r\n            <a class=\"dropdown-item\" href=\"#\">add label <span class=\"badge badge-danger\"> Home</span></a>\r\n            <a class=\"dropdown-item\" href=\"#\">add label <span class=\"badge badge-info\"> Job</span></a>\r\n            <a class=\"dropdown-item\" href=\"#\">add label <span class=\"badge badge-success\"> Clients</span></a>\r\n            <a class=\"dropdown-item\" href=\"#\">add label <span class=\"badge badge-warning\"> News</span></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"details\">\r\n        <div class=\"title\">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</div>\r\n        <div class=\"header\">\r\n          <img class=\"avatar\" src=\"assets/img/avatars/7.jpg\">\r\n          <div class=\"from\">\r\n            <span>Lukasz Holeczek</span>\r\n            lukasz@bootstrapmaster.com\r\n          </div>\r\n          <div class=\"date\">Today, <b>3:47 PM</b></div>\r\n        </div>\r\n        <div class=\"content\">\r\n          <p>\r\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n          </p>\r\n          <blockquote>\r\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n          </blockquote>\r\n        </div>\r\n        <div class=\"attachments\">\r\n          <div class=\"attachment\">\r\n            <span class=\"badge badge-danger\">zip</span> <b>bootstrap.zip</b> <i>(2,5MB)</i>\r\n            <span class=\"menu\">\r\n              <a href=\"#\" class=\"fa fa-search\"></a>\r\n              <a href=\"#\" class=\"fa fa-share\"></a>\r\n              <a href=\"#\" class=\"fa fa-cloud-download\"></a>\r\n            </span>\r\n          </div>\r\n          <div class=\"attachment\">\r\n            <span class=\"badge badge-info\">txt</span> <b>readme.txt</b> <i>(7KB)</i>\r\n            <span class=\"menu\">\r\n              <a href=\"#\" class=\"fa fa-search\"></a>\r\n              <a href=\"#\" class=\"fa fa-share\"></a>\r\n              <a href=\"#\" class=\"fa fa-cloud-download\"></a>\r\n            </span>\r\n          </div>\r\n          <div class=\"attachment\">\r\n            <span class=\"badge badge-success\">xls</span> <b>spreadsheet.xls</b> <i>(984KB)</i>\r\n            <span class=\"menu\">\r\n              <a href=\"#\" class=\"fa fa-search\"></a>\r\n              <a href=\"#\" class=\"fa fa-share\"></a>\r\n              <a href=\"#\" class=\"fa fa-cloud-download\"></a>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <form method=\"post\" action=\"\">\r\n          <div class=\"form-group\">\r\n            <textarea class=\"form-control\" id=\"message\" name=\"body\" rows=\"12\" placeholder=\"Click here to reply\"></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <button tabindex=\"3\" type=\"submit\" class=\"btn btn-success\">Send message</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </main>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/uikits/email/message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageComponent = /** @class */ (function () {
    function MessageComponent() {
    }
    MessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/uikits/email/message.component.html")
        })
    ], MessageComponent);
    return MessageComponent;
}());



/***/ })

});
//# sourceMappingURL=email.module.chunk.js.map