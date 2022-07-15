"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const Util_1 = require("../utils/Util");
let util;
let ContactService = class ContactService {
    constructor(model) {
        this.model = model;
        util = new Util_1.Util();
    }
    async healthCheck() {
        return "Success";
    }
    async create(createContactDto) {
        const profile = await this.model.create(createContactDto);
        return profile;
    }
    async findAll(query) {
        const pageOptions = util.getPageOptions(query);
        const result = await this.model.find().skip(pageOptions.offset).limit(pageOptions.limit).sort({ timestamp: -1 }).exec();
        if (!result) {
            return null;
        }
        return {
            data: result,
            offset: pageOptions.offset,
            limit: pageOptions.limit
        };
    }
    async findOne(id) {
        let profile = await this.model
            .findById(id)
            .exec();
        return profile;
    }
    async getContactById(id, _id = null) {
        return await this.model.findById(id).exec();
    }
    async update(id, updateContactDto) {
        let profile = null;
        profile = await this.model.findByIdAndUpdate(id, updateContactDto, { new: true }).exec();
        return profile;
    }
    async delete(id) {
        const isDelete = await this.model.findByIdAndDelete(id).exec();
        return isDelete;
    }
};
ContactService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("CONTACT_MODEL")),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ContactService);
exports.ContactService = ContactService;
//# sourceMappingURL=contact.service.js.map