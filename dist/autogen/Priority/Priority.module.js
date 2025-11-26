"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityModule = void 0;
const common_1 = require("@nestjs/common");
const Priority_entity_1 = require("./Priority.entity");
const typeorm_1 = require("@nestjs/typeorm");
const Priority_service_1 = require("./Priority.service");
const Priority_controller_1 = require("./Priority.controller");
let PriorityModule = class PriorityModule {
};
exports.PriorityModule = PriorityModule;
exports.PriorityModule = PriorityModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Priority_entity_1.Priority])],
        providers: [Priority_service_1.PriorityService],
        exports: [Priority_service_1.PriorityService],
        controllers: [Priority_controller_1.PriorityController],
    })
], PriorityModule);
//# sourceMappingURL=Priority.module.js.map