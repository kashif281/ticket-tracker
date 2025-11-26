"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const Ticket_dto_1 = require("./dtos/Ticket.dto");
const Ticket_controller_1 = require("./Ticket.controller");
const Ticket_service_1 = require("./Ticket.service");
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
describe('TicketController', () => {
    let controller;
    let spyService;
    beforeEach(async () => {
        const ApiServiceProvider = {
            provide: Ticket_service_1.TicketService,
            useFactory: () => ({
                createOne: jest.fn(() => []),
                getOne: jest.fn(() => { }),
            }),
        };
        const module = await testing_1.Test.createTestingModule({
            controllers: [Ticket_controller_1.TicketController],
            providers: [Ticket_service_1.TicketService, ApiServiceProvider],
        }).compile();
        controller = module.get(Ticket_controller_1.TicketController);
        spyService = module.get(Ticket_service_1.TicketService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    it('should call TicketController get method', () => {
        const req = Object.assign({}, baseRequest);
        expect(controller.get(req)).not.toEqual(null);
        expect(spyService.getOne).toHaveBeenCalled();
    });
    it('should call TicketController create method', () => {
        const req = Object.assign({}, baseRequest);
        const dto = new Ticket_dto_1.Ticket();
        controller.create(req, dto);
        expect(controller.create(req, dto)).not.toEqual(null);
        expect(spyService.createOne).toHaveBeenCalled();
    });
});
//# sourceMappingURL=Ticket.controller.spec.js.map