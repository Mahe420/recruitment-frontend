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
exports.ResumeComponent = void 0;
var core_1 = require("@angular/core");
var sweetalert2_1 = require("sweetalert2");
var resume_modal_component_1 = require("../resume-modal/resume-modal.component");
var ResumeComponent = /** @class */ (function () {
    function ResumeComponent(adminService, statusService, dialog) {
        this.adminService = adminService;
        this.statusService = statusService;
        this.dialog = dialog;
    }
    ResumeComponent.prototype.ngOnInit = function () {
        this.load();
    };
    ResumeComponent.prototype.open = function (resume) {
        var _this = this;
        var dialogRef = this.dialog.open(resume_modal_component_1.ResumeModalComponent, { data: resume, panelClass: 'dialog-class', autoFocus: false });
        dialogRef.afterClosed().subscribe(function (data) {
            if (data) {
                _this.select(resume);
            }
            else if (typeof data === 'boolean' && !data) {
                _this.reject(resume);
            }
        });
    };
    ResumeComponent.prototype.load = function () {
        var _this = this;
        this.adminService.getAllUsers().subscribe(function (data) {
            return _this.resumeList = data;
        });
    };
    ResumeComponent.prototype.select = function (resume) {
        var _this = this;
        resume = __assign(__assign({}, resume), { resumeStatus: true });
        var data = {
            id: resume.user.id,
            email: resume.user.email
        };
        this.adminService.selectEmail(data).subscribe(function (data) { });
        this.statusService.updateStatus(resume).subscribe(function (data) {
            console.log(data);
            sweetalert2_1["default"].fire('Submitted', 'E-mail will be sent to the user', 'success').then(function (result) {
                return _this.load();
            });
        });
    };
    ResumeComponent.prototype.reject = function (resume) {
        var _this = this;
        resume = __assign(__assign({}, resume), { rejected: true });
        this.adminService.rejectEmail(resume.user.email).subscribe(function (ele) { });
        this.statusService.updateStatus(resume).subscribe(function (data) {
            sweetalert2_1["default"].fire('Submitted', 'E-mail will be sent to the user', 'success').then(function (result) {
                return _this.load();
            });
        });
    };
    ResumeComponent = __decorate([
        core_1.Component({
            selector: 'app-resume',
            templateUrl: './resume.component.html',
            styleUrls: ['./resume.component.scss']
        })
    ], ResumeComponent);
    return ResumeComponent;
}());
exports.ResumeComponent = ResumeComponent;
