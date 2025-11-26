"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const Priority_dto_1 = require("./dtos/Priority.dto");
const Priority_controller_1 = require("./Priority.controller");
const Priority_service_1 = require("./Priority.service");
const baseRequest = {
    parsed: {
        fields: [],
        paramsFilter: [],
        search: {},
        filter: [],
        or: [],
        join: [],
        sort: [],
        authPersist: undefined,
        limit: 10,
        offset: 0,
        page: 1,
        cache: undefined,
    },
    options: {},
};
describe('PriorityController', () => {
    let controller;
    let spyService;
    beforeEach(async () => {
        const ApiServiceProvider = {
            provide: Priority_service_1.PriorityService,
            useFactory: () => ({
                createOne: jest.fn(() => []),
                getOne: jest.fn(() => { }),
            }),
        };
        const module = await testing_1.Test.createTestingModule({
            controllers: [Priority_controller_1.PriorityController],
            providers: [Priority_service_1.PriorityService, ApiServiceProvider],
        }).compile();
        controller = module.get(Priority_controller_1.PriorityController);
        spyService = module.get(Priority_service_1.PriorityService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    it('should call PriorityController get method', () => {
        const req = Object.assign({}, baseRequest);
        expect(controller.get(req)).not.toEqual(null);
        expect(spyService.getOne).toHaveBeenCalled();
    });
    it('should call PriorityController create method', () => {
        const req = Object.assign({}, baseRequest);
        const dto = new Priority_dto_1.Priority();
        controller.create(req, dto);
        expect(controller.create(req, dto)).not.toEqual(null);
        expect(spyService.createOne).toHaveBeenCalled();
    });
});
//# sourceMappingURL=Priority.controller.spec.js.map