"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssigneeModule = void 0;
const common_1 = require("@nestjs/common");
const Assignee_entity_1 = require("./Assignee.entity");
const typeorm_1 = require("@nestjs/typeorm");
const Assignee_service_1 = require("./Assignee.service");
const Assignee_controller_1 = require("./Assignee.controller");
let AssigneeModule = class AssigneeModule {
};
exports.AssigneeModule = AssigneeModule;
exports.AssigneeModule = AssigneeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Assignee_entity_1.Assignee])],
        providers: [Assignee_service_1.AssigneeService],
        exports: [Assignee_service_1.AssigneeService],
        controllers: [Assignee_controller_1.AssigneeController],
    })
], AssigneeModule);
//# sourceMappingURL=Assignee.module.js.map