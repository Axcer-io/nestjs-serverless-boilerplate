import { Model } from "mongoose";
import { Contact } from "./interfaces/contact.interface";
import { QueryOptions } from "../utils/Util";
import { UpdateContactDto } from "./dto/update-contact.dto";
import { CreateContactDto } from "./dto/create-contact.dto";
export declare class ContactService {
    private model;
    constructor(model: Model<Contact>);
    healthCheck(): Promise<string>;
    create(createContactDto: CreateContactDto): Promise<Contact>;
    findAll(query: QueryOptions): Promise<{
        data: Contact[];
        offset: number;
        limit: number;
    }>;
    findOne(id: string): Promise<Contact>;
    getContactById(id: string, _id?: string): Promise<Contact>;
    update(id: string, updateContactDto: UpdateContactDto): Promise<Contact>;
    delete(id: string): Promise<Contact>;
}
