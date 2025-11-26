import { CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { Customer } from './dtos/Customer.dto';
import { CustomerService } from './Customer.service';
export declare class CustomerController implements CrudController<Customer> {
    service: CustomerService;
    constructor(service: CustomerService);
    get base(): CrudController<Customer>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<Customer> | Customer[]>;
    get(req: CrudRequest): Promise<Customer>;
    create(req: CrudRequest, dto: Customer): Promise<Customer>;
    createMany(req: CrudRequest, dto: CreateManyDto<Customer>): Promise<Customer[]>;
    update(req: CrudRequest, dto: Customer): Promise<Customer>;
    replace(req: CrudRequest, dto: Customer): Promise<Customer>;
    delete(req: CrudRequest): Promise<void | Customer>;
}
