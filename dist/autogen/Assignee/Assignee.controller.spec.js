"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const Assignee_dto_1 = require("./dtos/Assignee.dto");
const Assignee_controller_1 = require("./Assignee.controller");
const Assignee_service_1 = require("./Assignee.service");
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
describe('AssigneeController', () => {
    let controller;
    let spyService;
    beforeEach(async () => {
        const ApiServiceProvider = {
            provide: Assignee_service_1.AssigneeService,
            useFactory: () => ({
                createOne: jest.fn(() => []),
                getOne: jest.fn(() => { }),
            }),
        };
        const module = await testing_1.Test.createTestingModule({
            controllers: [Assignee_controller_1.AssigneeController],
            providers: [Assignee_service_1.AssigneeService, ApiServiceProvider],
        }).compile();
        controller = module.get(Assignee_controller_1.AssigneeController);
        spyService = module.get(Assignee_service_1.AssigneeService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    it('should call AssigneeController get method', () => {
        const req = Object.assign({}, baseRequest);
        expect(controller.get(req)).not.toEqual(null);
        expect(spyService.getOne).toHaveBeenCalled();
    });
    it('should call AssigneeController create method', () => {
        const req = Object.assign({}, baseRequest);
        const dto = new Assignee_dto_1.Assignee();
        controller.create(req, dto);
        expect(controller.create(req, dto)).not.toEqual(null);
        expect(spyService.createOne).toHaveBeenCalled();
    });
});
//# sourceMappingURL=Assignee.controller.spec.js.map