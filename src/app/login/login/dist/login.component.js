"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, statusService, loginService, router) {
        this.fb = fb;
        this.statusService = statusService;
        this.loginService = loginService;
        this.router = router;
        this.hide = false;
        this.loginForm = fb.group({
            username: [null, forms_1.Validators.required],
            password: [null, forms_1.Validators.required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        var userData;
        this.loginForm.markAllAsTouched();
        if (this.loginForm.status === 'VALID') {
            if (this.loginForm.value.username === 'admin' && this.loginForm.value.password === 'admin') {
                this.router.navigateByUrl('/admin/resume');
                console.log('redirect to admin');
            }
            else {
                this.loginService.login(this.loginForm.value).subscribe(function (data) {
                    if (data == null) {
                        _this.router.navigateByUrl('/');
                        console.log("errors");
                    }
                    else {
                        _this.statusService.getStatusByUser(data.user.id).subscribe(function (statusDetails) {
                            _this.statusService.changeStatus(statusDetails);
                            userData = statusDetails;
                            if (userData.resumeStatus) {
                                if (!userData.appTaken) {
                                    console.log("redirect to apps");
                                    _this.router.navigateByUrl('user/apps');
                                }
                                else if (!userData.techTaken && userData.appsStatus) {
                                    console.log("redirect tp tech");
                                    _this.router.navigateByUrl('user/techapps');
                                }
                                else {
                                    console.log("wait for result");
                                    _this.router.navigateByUrl('user/info');
                                }
                            }
                        });
                    }
                });
            }
        }
    };
    LoginComponent.prototype.newUser = function () {
        this.router.navigateByUrl('/register');
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
