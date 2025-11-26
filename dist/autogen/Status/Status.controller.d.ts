import { CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { Status } from './dtos/Status.dto';
import { StatusService } from './Status.service';
export declare class StatusController implements CrudController<Status> {
    service: StatusService;
    constructor(service: StatusService);
    get base(): CrudController<Status>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<Status> | Status[]>;
    get(req: CrudRequest): Promise<Status>;
    create(req: CrudRequest, dto: Status): Promise<Status>;
    createMany(req: CrudRequest, dto: CreateManyDto<Status>): Promise<Status[]>;
    update(req: CrudRequest, dto: Status): Promise<Status>;
    replace(req: CrudRequest, dto: Status): Promise<Status>;
    delete(req: CrudRequest): Promise<void | Status>;
}
