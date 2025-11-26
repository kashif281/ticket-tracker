"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const Status_dto_1 = require("./dtos/Status.dto");
const Status_controller_1 = require("./Status.controller");
const Status_service_1 = require("./Status.service");
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
describe('StatusController', () => {
    let controller;
    let spyService;
    beforeEach(async () => {
        const ApiServiceProvider = {
            provide: Status_service_1.StatusService,
            useFactory: () => ({
                createOne: jest.fn(() => []),
                getOne: jest.fn(() => { }),
            }),
        };
        const module = await testing_1.Test.createTestingModule({
            controllers: [Status_controller_1.StatusController],
            providers: [Status_service_1.StatusService, ApiServiceProvider],
        }).compile();
        controller = module.get(Status_controller_1.StatusController);
        spyService = module.get(Status_service_1.StatusService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    it('should call StatusController get method', () => {
        const req = Object.assign({}, baseRequest);
        expect(controller.get(req)).not.toEqual(null);
        expect(spyService.getOne).toHaveBeenCalled();
    });
    it('should call StatusController create method', () => {
        const req = Object.assign({}, baseRequest);
        const dto = new Status_dto_1.Status();
        controller.create(req, dto);
        expect(controller.create(req, dto)).not.toEqual(null);
        expect(spyService.createOne).toHaveBeenCalled();
    });
});
//# sourceMappingURL=Status.controller.spec.js.map