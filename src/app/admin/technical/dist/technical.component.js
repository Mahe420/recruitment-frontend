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
exports.TechnicalComponent = void 0;
var core_1 = require("@angular/core");
var Tech_json_1 = require("../../user/Tech.json");
var sweetalert2_1 = require("sweetalert2");
var TechnicalComponent = /** @class */ (function () {
    function TechnicalComponent(adminService, statusService) {
        this.adminService = adminService;
        this.statusService = statusService;
        this.techJsons = Tech_json_1["default"];
    }
    TechnicalComponent.prototype.ngOnInit = function () {
        this.load();
    };
    TechnicalComponent.prototype.load = function () {
        var _this = this;
        this.adminService.getAllTechApps().subscribe(function (data) {
            return _this.techList = data;
        });
    };
    TechnicalComponent.prototype.select = function (resume) {
        var _this = this;
        var userStatus = resume.userStatus;
        userStatus = __assign(__assign({}, userStatus), { techAppsStatus: true });
        this.statusService.updateStatus(userStatus).subscribe(function (data) {
            sweetalert2_1["default"].fire('Submitted', 'E-mail will be sent to the user', 'success').then(function (result) {
                return _this.load();
            });
        });
    };
    TechnicalComponent.prototype.reject = function (resume) {
        var _this = this;
        var userStatus = resume.userStatus;
        userStatus = __assign(__assign({}, userStatus), { rejected: true });
        this.adminService.deleteTechApps(resume.id).subscribe(function (data) { });
        this.statusService.updateStatus(userStatus).subscribe(function (data) {
            sweetalert2_1["default"].fire('Submitted', 'E-mail will be sent to the user', 'success').then(function (result) {
                _this.load();
            });
        });
    };
    TechnicalComponent = __decorate([
        core_1.Component({
            selector: 'app-technical',
            templateUrl: './technical.component.html',
            styleUrls: ['./technical.component.scss']
        })
    ], TechnicalComponent);
    return TechnicalComponent;
}());
exports.TechnicalComponent = TechnicalComponent;
