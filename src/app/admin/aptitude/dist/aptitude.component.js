"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AptitudeComponent = void 0;
var core_1 = require("@angular/core");
var sweetalert2_1 = require("sweetalert2");
var App_json_1 = require("../../user/App.json");
var AptitudeComponent = /** @class */ (function () {
    function AptitudeComponent(adminService, statusService) {
        this.adminService = adminService;
        this.statusService = statusService;
        this.appJsons = App_json_1["default"];
    }
    AptitudeComponent.prototype.ngOnInit = function () {
        this.load();
    };
    AptitudeComponent.prototype.load = function () {
        var _this = this;
        this.adminService.getAllApps().subscribe(function (data) {
            return _this.appList = data;
        });
    };
    AptitudeComponent.prototype.select = function (resume) {
        var _this = this;
        var userStatus = resume.userStatus;
        userStatus = __assign(__assign({}, userStatus), { appsStatus: true });
        var data = {
            id: userStatus.user.id,
            email: userStatus.user.email
        };
        this.adminService.selectEmail(data).subscribe(function (data) { });
        this.statusService.updateStatus(userStatus).subscribe(function (data) {
            sweetalert2_1["default"].fire('Submitted', 'E-mail will be sent to the user', 'success').then(function (result) {
                return _this.load();
            });
        });
    };
    AptitudeComponent.prototype.reject = function (resume) {
        var _this = this;
        var userStatus = resume.userStatus;
        userStatus = __assign(__assign({}, userStatus), { rejected: true });
        this.adminService.rejectEmail(userStatus.user.email).subscribe(function (ele) { });
        this.statusService.updateStatus(userStatus).subscribe(function (data) {
            _this.adminService.deleteApps(resume.id).subscribe(function (data) { });
            sweetalert2_1["default"].fire('Submitted', 'E-mail will be sent to the user', 'success').then(function (result) {
                _this.load();
            });
        });
    };
    AptitudeComponent = __decorate([
        core_1.Component({
            selector: 'app-aptitude',
            templateUrl: './aptitude.component.html',
            styleUrls: ['./aptitude.component.scss']
        })
    ], AptitudeComponent);
    return AptitudeComponent;
}());
exports.AptitudeComponent = AptitudeComponent;
