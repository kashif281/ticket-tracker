import { CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { Priority } from './dtos/Priority.dto';
import { PriorityService } from './Priority.service';
export declare class PriorityController implements CrudController<Priority> {
    service: PriorityService;
    constructor(service: PriorityService);
    get base(): CrudController<Priority>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<Priority> | Priority[]>;
    get(req: CrudRequest): Promise<Priority>;
    create(req: CrudRequest, dto: Priority): Promise<Priority>;
    createMany(req: CrudRequest, dto: CreateManyDto<Priority>): Promise<Priority[]>;
    update(req: CrudRequest, dto: Priority): Promise<Priority>;
    replace(req: CrudRequest, dto: Priority): Promise<Priority>;
    delete(req: CrudRequest): Promise<void | Priority>;
}
