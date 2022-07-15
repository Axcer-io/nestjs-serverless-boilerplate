import { ContactService } from "./contact.service";
import { CreateContactDto } from "./dto/create-contact.dto";
import { UpdateContactDto } from "./dto/update-contact.dto";
export declare class ContactController {
    private readonly ContactService;
    constructor(ContactService: ContactService);
    getHealthCheck(): Promise<object>;
    createweb(createContactDto: CreateContactDto): Promise<object>;
    index(query: any): Promise<object>;
    find(id: string): Promise<object>;
    update(id: string, updateContactDto: UpdateContactDto): Promise<object>;
    delete(id: string): Promise<object>;
}
