"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const Product_dto_1 = require("./dtos/Product.dto");
const Product_controller_1 = require("./Product.controller");
const Product_service_1 = require("./Product.service");
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
describe('ProductController', () => {
    let controller;
    let spyService;
    beforeEach(async () => {
        const ApiServiceProvider = {
            provide: Product_service_1.ProductService,
            useFactory: () => ({
                createOne: jest.fn(() => []),
                getOne: jest.fn(() => { }),
            }),
        };
        const module = await testing_1.Test.createTestingModule({
            controllers: [Product_controller_1.ProductController],
            providers: [Product_service_1.ProductService, ApiServiceProvider],
        }).compile();
        controller = module.get(Product_controller_1.ProductController);
        spyService = module.get(Product_service_1.ProductService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    it('should call ProductController get method', () => {
        const req = Object.assign({}, baseRequest);
        expect(controller.get(req)).not.toEqual(null);
        expect(spyService.getOne).toHaveBeenCalled();
    });
    it('should call ProductController create method', () => {
        const req = Object.assign({}, baseRequest);
        const dto = new Product_dto_1.Product();
        controller.create(req, dto);
        expect(controller.create(req, dto)).not.toEqual(null);
        expect(spyService.createOne).toHaveBeenCalled();
    });
});
//# sourceMappingURL=Product.controller.spec.js.map