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
exports.ContactController = void 0;
const common_1 = require("@nestjs/common");
const contact_service_1 = require("./contact.service");
const swagger_1 = require("@nestjs/swagger");
const http_exception_filter_1 = require("../helper/http-exception.filter");
const create_contact_dto_1 = require("./dto/create-contact.dto");
const update_contact_dto_1 = require("./dto/update-contact.dto");
let ContactController = class ContactController {
    constructor(ContactService) {
        this.ContactService = ContactService;
    }
    async getHealthCheck() {
        const message = await this.ContactService.healthCheck();
        let result = {
            status: common_1.HttpStatus.OK,
            data: {
                state: true,
                message: message,
                description: ["Health Check Success"],
            },
        };
        return result;
    }
    async createweb(createContactDto) {
        let response = await this.ContactService.create(createContactDto);
        const result = {
            status: common_1.HttpStatus.OK,
            data: response,
        };
        return result;
    }
    async index(query) {
        let results = await this.ContactService.findAll(query);
        let result = {
            status: common_1.HttpStatus.OK,
            data: {
                results: results,
            },
        };
        return result;
    }
    async find(id) {
        let profile = await this.ContactService.findOne(id);
        let result = {
            status: common_1.HttpStatus.OK,
            data: {
                profile: profile,
            },
        };
        if (profile == null || Object.keys(profile).length == 0) {
            let msg = "Data not available";
            let error = "Bad Request";
            result = {
                status: common_1.HttpStatus.NOT_FOUND,
                data: {
                    message: error,
                    description: [msg],
                },
            };
        }
        return result;
    }
    async update(id, updateContactDto) {
        let profile = await this.ContactService.update(id, updateContactDto);
        let result = {
            status: common_1.HttpStatus.OK,
            data: {
                message: "Success",
                description: ["Successfully updated!"],
            },
        };
        if (profile == null) {
            result = {
                status: common_1.HttpStatus.BAD_REQUEST,
                data: {
                    message: "Bad Request",
                    description: ["Bad Request"],
                },
            };
        }
        return result;
    }
    async delete(id) {
        let profile = await this.ContactService.delete(id);
        let result = {
            status: common_1.HttpStatus.BAD_REQUEST,
            data: {
                message: "Bad Request",
                description: ["Record not available."],
            },
        };
        if (profile != null) {
            result = {
                status: common_1.HttpStatus.OK,
                data: {
                    message: "Success",
                    description: ["Successfuly deleted!"],
                },
            };
        }
        return result;
    }
};
__decorate([
    (0, common_1.Get)("health-check"),
    (0, common_1.UseFilters)(new http_exception_filter_1.HttpExceptionFilter()),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: "Success" }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.BAD_REQUEST, description: "Bad Request" }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
        description: "Internal Server Error",
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "getHealthCheck", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseFilters)(new http_exception_filter_1.HttpExceptionFilter()),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: "Success" }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.BAD_REQUEST, description: "Bad Request" }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
        description: "Internal Server Error",
    }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_contact_dto_1.CreateContactDto]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "createweb", null);
__decorate([
    (0, common_1.Get)("all"),
    (0, common_1.UseFilters)(new http_exception_filter_1.HttpExceptionFilter()),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: "Success" }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.BAD_REQUEST, description: "Bad Request" }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
        description: "Internal Server Error",
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "index", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, common_1.UseFilters)(new http_exception_filter_1.HttpExceptionFilter()),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: "Success" }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.BAD_REQUEST, description: "Bad Request" }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: "Data Not Available",
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
        description: "Internal Server Error",
    }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "find", null);
__decorate([
    (0, common_1.Put)(":id"),
    (0, common_1.UseFilters)(new http_exception_filter_1.HttpExceptionFilter()),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: "Success" }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.BAD_REQUEST, description: "Bad Request" }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
        description: "Internal Server Error",
    }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_contact_dto_1.UpdateContactDto]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, common_1.UseFilters)(new http_exception_filter_1.HttpExceptionFilter()),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: "Success" }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.BAD_REQUEST, description: "Bad Request" }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: "Not Available" }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
        description: "Internal Server Error",
    }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "delete", null);
ContactController = __decorate([
    (0, common_1.Controller)("contact"),
    __metadata("design:paramtypes", [contact_service_1.ContactService])
], ContactController);
exports.ContactController = ContactController;
//# sourceMappingURL=contact.controller.js.map