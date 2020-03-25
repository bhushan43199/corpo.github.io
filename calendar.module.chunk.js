webpackJsonp(["calendar.module"],{

/***/ "../../../../../src/app/views/plugins/calendar/calendar-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendar_component__ = __webpack_require__("../../../../../src/app/views/plugins/calendar/calendar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__calendar_component__["a" /* CalendarComponent */],
        data: {
            title: 'Calendar'
        }
    }
];
var CalendarRoutingModule = /** @class */ (function () {
    function CalendarRoutingModule() {
    }
    CalendarRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], CalendarRoutingModule);
    return CalendarRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/plugins/calendar/calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">Calendar</div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row text-center\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"btn-group\">\r\n            <div class=\"btn btn-outline-secondary\" (click)=\"decrement()\">\r\n              Previous\r\n            </div>\r\n            <div class=\"btn btn-primary\" (click)=\"today()\">\r\n              Today\r\n            </div>\r\n            <div class=\"btn btn-outline-secondary\" (click)=\"increment()\">\r\n              Next\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 text-center\">\r\n          <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"btn-group float-right\">\r\n            <div class=\"btn btn-primary\" (click)=\"view = 'month'\" [class.active]=\"view === 'month'\">Month</div>\r\n            <div class=\"btn btn-primary\" (click)=\"view = 'week'\" [class.active]=\"view === 'week'\">Week</div>\r\n            <div class=\"btn btn-primary\" (click)=\"view = 'day'\" [class.active]=\"view === 'day'\">Day</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <div [ngSwitch]=\"view\">\r\n        <mwl-calendar-month-view\r\n          *ngSwitchCase=\"'month'\"\r\n          [viewDate]=\"viewDate\"\r\n          [events]=\"events\"\r\n          [activeDayIsOpen]=\"activeDayIsOpen\"\r\n          (dayClicked)=\"dayClicked($event.day)\">\r\n        </mwl-calendar-month-view>\r\n        <mwl-calendar-week-view\r\n          *ngSwitchCase=\"'week'\"\r\n          [viewDate]=\"viewDate\"\r\n          [events]=\"events\">\r\n        </mwl-calendar-week-view>\r\n        <mwl-calendar-day-view\r\n          *ngSwitchCase=\"'day'\"\r\n          [viewDate]=\"viewDate\"\r\n          [events]=\"events\">\r\n        </mwl-calendar-day-view>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/plugins/calendar/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent() {
        var _this = this;
        this.view = 'month';
        this.viewDate = new Date();
        this.actions = [{
                label: '<i class="fa fa-fw fa-pencil"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    console.log('Edit event', event);
                }
            }, {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                }
            }];
        this.events = [{
                start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["subDays"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(new Date()), 1),
                end: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addDays"])(new Date(), 1),
                title: 'A 3 day event',
                color: colors.red,
                actions: this.actions
            }, {
                start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(new Date()),
                title: 'An event with no end date',
                color: colors.yellow,
                actions: this.actions
            }, {
                start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["subDays"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["endOfMonth"])(new Date()), 3),
                end: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addDays"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["endOfMonth"])(new Date()), 3),
                title: 'A long event that spans 2 months',
                color: colors.blue
            }];
        this.activeDayIsOpen = true;
    }
    CalendarComponent.prototype.increment = function () {
        var addFn = {
            day: __WEBPACK_IMPORTED_MODULE_1_date_fns__["addDays"],
            week: __WEBPACK_IMPORTED_MODULE_1_date_fns__["addWeeks"],
            month: __WEBPACK_IMPORTED_MODULE_1_date_fns__["addMonths"]
        }[this.view];
        this.viewDate = addFn(this.viewDate, 1);
    };
    CalendarComponent.prototype.decrement = function () {
        var subFn = {
            day: __WEBPACK_IMPORTED_MODULE_1_date_fns__["subDays"],
            week: __WEBPACK_IMPORTED_MODULE_1_date_fns__["subWeeks"],
            month: __WEBPACK_IMPORTED_MODULE_1_date_fns__["subMonths"]
        }[this.view];
        this.viewDate = subFn(this.viewDate, 1);
    };
    CalendarComponent.prototype.today = function () {
        this.viewDate = new Date();
    };
    CalendarComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    };
    CalendarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/plugins/calendar/calendar.component.html"),
            styles: [__webpack_require__("../../../../../src/scss/vendors/angular-calendar/angular-calendar.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        })
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/plugins/calendar/calendar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarInitModule", function() { return CalendarInitModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_calendar__ = __webpack_require__("../../../../angular-calendar/esm5/angular-calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendar_component__ = __webpack_require__("../../../../../src/app/views/plugins/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calendar_routing_module__ = __webpack_require__("../../../../../src/app/views/plugins/calendar/calendar-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Calendar


//Routing

//
var CalendarInitModule = /** @class */ (function () {
    function CalendarInitModule() {
    }
    CalendarInitModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__calendar_routing_module__["a" /* CalendarRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2_angular_calendar__["a" /* CalendarModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__calendar_component__["a" /* CalendarComponent */]
            ]
        })
    ], CalendarInitModule);
    return CalendarInitModule;
}());



/***/ })

});
//# sourceMappingURL=calendar.module.chunk.js.map