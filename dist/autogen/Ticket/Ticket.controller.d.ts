import { CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { Ticket } from './dtos/Ticket.dto';
import { TicketService } from './Ticket.service';
export declare class TicketController implements CrudController<Ticket> {
    service: TicketService;
    constructor(service: TicketService);
    get base(): CrudController<Ticket>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<Ticket> | Ticket[]>;
    get(req: CrudRequest): Promise<Ticket>;
    create(req: CrudRequest, dto: Ticket): Promise<Ticket>;
    createMany(req: CrudRequest, dto: CreateManyDto<Ticket>): Promise<Ticket[]>;
    update(req: CrudRequest, dto: Ticket): Promise<Ticket>;
    replace(req: CrudRequest, dto: Ticket): Promise<Ticket>;
    delete(req: CrudRequest): Promise<void | Ticket>;
}
