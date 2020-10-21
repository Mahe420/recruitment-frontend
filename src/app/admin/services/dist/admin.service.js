"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminService = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("src/environments/environment");
var APPS_API = '/apps';
var TECHAPPS_API = '/techapps';
var USER_API = '/user';
var AdminService = /** @class */ (function () {
    function AdminService(httpClient) {
        this.httpClient = httpClient;
    }
    AdminService.prototype.getAllApps = function () {
        return this.httpClient.get(environment_1.environment.BASE_URL + APPS_API);
    };
    AdminService.prototype.getAllTechApps = function () {
        return this.httpClient.get(environment_1.environment.BASE_URL + TECHAPPS_API);
    };
    AdminService.prototype.getAllUsers = function () {
        return this.httpClient.get(environment_1.environment.BASE_URL + USER_API);
    };
    AdminService.prototype.deleteApps = function (id) {
        return this.httpClient["delete"](environment_1.environment.BASE_URL + APPS_API + '/' + id);
    };
    AdminService.prototype.deleteTechApps = function (id) {
        return this.httpClient["delete"](environment_1.environment.BASE_URL + TECHAPPS_API + '/' + id);
    };
    AdminService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AdminService);
    return AdminService;
}());
exports.AdminService = AdminService;
