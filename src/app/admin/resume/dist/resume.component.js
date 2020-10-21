"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ResumeComponent = void 0;
var core_1 = require("@angular/core");
var ResumeComponent = /** @class */ (function () {
    function ResumeComponent(adminService) {
        this.adminService = adminService;
    }
    ResumeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.getAllUsers().subscribe(function (data) {
            return _this.resumeList = data;
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
