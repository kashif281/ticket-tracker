import { CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { Assignee } from './dtos/Assignee.dto';
import { AssigneeService } from './Assignee.service';
export declare class AssigneeController implements CrudController<Assignee> {
    service: AssigneeService;
    constructor(service: AssigneeService);
    get base(): CrudController<Assignee>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<Assignee> | Assignee[]>;
    get(req: CrudRequest): Promise<Assignee>;
    create(req: CrudRequest, dto: Assignee): Promise<Assignee>;
    createMany(req: CrudRequest, dto: CreateManyDto<Assignee>): Promise<Assignee[]>;
    update(req: CrudRequest, dto: Assignee): Promise<Assignee>;
    replace(req: CrudRequest, dto: Assignee): Promise<Assignee>;
    delete(req: CrudRequest): Promise<void | Assignee>;
}
