import { CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { Product } from './dtos/Product.dto';
import { ProductService } from './Product.service';
export declare class ProductController implements CrudController<Product> {
    service: ProductService;
    constructor(service: ProductService);
    get base(): CrudController<Product>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<Product> | Product[]>;
    get(req: CrudRequest): Promise<Product>;
    create(req: CrudRequest, dto: Product): Promise<Product>;
    createMany(req: CrudRequest, dto: CreateManyDto<Product>): Promise<Product[]>;
    update(req: CrudRequest, dto: Product): Promise<Product>;
    replace(req: CrudRequest, dto: Product): Promise<Product>;
    delete(req: CrudRequest): Promise<void | Product>;
}
