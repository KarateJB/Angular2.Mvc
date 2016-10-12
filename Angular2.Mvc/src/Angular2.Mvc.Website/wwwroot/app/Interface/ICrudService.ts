export interface ICrudService {
    getAll(): Promise<any[]>;
    create(item: any): void;
    update(item: any): void;
    delete(item:any): void;
}