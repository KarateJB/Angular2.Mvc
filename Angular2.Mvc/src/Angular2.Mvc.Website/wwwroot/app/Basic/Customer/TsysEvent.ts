export class SysEvent {
    Title: string;
    Msg: string;
    CreateBy: string;
    CreateOn: Date = new Date();
    
    constructor(fields?: {
        Title?: string,
        Msg?: string,
        CreateBy?: string,
        CreateOn?: Date;
    }) {
        if (fields) Object.assign(this, fields);
    }
}