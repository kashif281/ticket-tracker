"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const Customer_dto_1 = require("./dtos/Customer.dto");
const Customer_controller_1 = require("./Customer.controller");
const Customer_service_1 = require("./Customer.service");
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
describe('CustomerController', () => {
    let controller;
    let spyService;
    beforeEach(async () => {
        const ApiServiceProvider = {
            provide: Customer_service_1.CustomerService,
            useFactory: () => ({
                createOne: jest.fn(() => []),
                getOne: jest.fn(() => { }),
            }),
        };
        const module = await testing_1.Test.createTestingModule({
            controllers: [Customer_controller_1.CustomerController],
            providers: [Customer_service_1.CustomerService, ApiServiceProvider],
        }).compile();
        controller = module.get(Customer_controller_1.CustomerController);
        spyService = module.get(Customer_service_1.CustomerService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    it('should call CustomerController get method', () => {
        const req = Object.assign({}, baseRequest);
        expect(controller.get(req)).not.toEqual(null);
        expect(spyService.getOne).toHaveBeenCalled();
    });
    it('should call CustomerController create method', () => {
        const req = Object.assign({}, baseRequest);
        const dto = new Customer_dto_1.Customer();
        controller.create(req, dto);
        expect(controller.create(req, dto)).not.toEqual(null);
        expect(spyService.createOne).toHaveBeenCalled();
    });
});
//# sourceMappingURL=Customer.controller.spec.js.map