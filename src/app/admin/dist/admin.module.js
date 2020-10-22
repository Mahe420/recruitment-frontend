"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var admin_routing_module_1 = require("./admin-routing.module");
var admin_component_1 = require("./admin/admin.component");
var forms_1 = require("@angular/forms");
var material_module_1 = require("../material.module");
var flex_layout_1 = require("@angular/flex-layout");
var aptitude_component_1 = require("./aptitude/aptitude.component");
var resume_component_1 = require("./resume/resume.component");
var technical_component_1 = require("./technical/technical.component");
var admin_service_1 = require("./services/admin.service");
var resume_modal_component_1 = require("./resume-modal/resume-modal.component");
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            declarations: [admin_component_1.AdminComponent, aptitude_component_1.AptitudeComponent, resume_component_1.ResumeComponent, technical_component_1.TechnicalComponent, resume_modal_component_1.ResumeModalComponent],
            imports: [
                common_1.CommonModule,
                admin_routing_module_1.AdminRoutingModule,
                material_module_1.MaterialModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                flex_layout_1.FlexLayoutModule
            ],
            entryComponents: [resume_modal_component_1.ResumeModalComponent],
            providers: [admin_service_1.AdminService]
        })
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;
