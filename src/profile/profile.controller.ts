import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Put,
  Delete,
  Body,
  ValidationPipe,
  UsePipes,
  HttpStatus,
  UseFilters,
} from "@nestjs/common";
import { ProfileService } from "./profile.service";
import { CreateProfileDto } from "./dto/create-profile.dto";
import { UpdateProfileDto } from "./dto/update-profile.dto";

import { ApiResponse, ApiQuery } from "@nestjs/swagger";
import { HttpExceptionFilter } from "../helper/http-exception.filter";

@Controller("profile")
export class ProfileController {
  constructor(private readonly ProfileService: ProfileService) {}

  @Post()
  @UseFilters(new HttpExceptionFilter())
  @ApiResponse({ status: HttpStatus.OK, description: "Success" })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: "Internal Server Error",
  })
  @UsePipes(new ValidationPipe({ transform: true }))
  async createweb(@Body() createProfileDto: CreateProfileDto) {
    let response: any = await this.ProfileService.create(createProfileDto);
    const result: object = {
      status: HttpStatus.OK,
      data: response,
    };
    return result;
  }

  @Get("all")
  @UseFilters(new HttpExceptionFilter())
  @ApiResponse({ status: HttpStatus.OK, description: "Success" })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: "Internal Server Error",
  })
  public async index(@Query() query) {
    let results: any = await this.ProfileService.findAll(query);
    let result: object = {
      status: HttpStatus.OK,
      data: {
        results: results,
      },
    };
    return result;
  }

  @Get(":id")
  @UseFilters(new HttpExceptionFilter())
  @ApiResponse({ status: HttpStatus.OK, description: "Success" })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: "Data Not Available",
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: "Internal Server Error",
  })
  async find(@Param("id") id: string) {
    let profile: any = await this.ProfileService.findOne(id);
    let result: object = {
      status: HttpStatus.OK,
      data: {
        profile: profile,
      },
    };

    if (profile == null || Object.keys(profile).length == 0) {
      let msg: string = "Data not available";
      let error: string = "Bad Request";
      result = {
        status: HttpStatus.NOT_FOUND,
        data: {
          message: error,
          description: [msg],
        },
      };
    }

    return result;
  }

  @Put(":id")
  @UseFilters(new HttpExceptionFilter())
  @ApiResponse({ status: HttpStatus.OK, description: "Success" })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: "Internal Server Error",
  })
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(
    @Param("id") id: string,
    @Body() updateProfileDto: UpdateProfileDto
  ) {
    let profile: any = await this.ProfileService.update(id, updateProfileDto);
    let result: object = {
      status: HttpStatus.OK,
      data: {
        message: "Success",
        description: ["Successfully updated!"],
      },
    };
    if (profile == null) {
      result = {
        status: HttpStatus.BAD_REQUEST,
        data: {
          message: "Bad Request",
          description: ["Bad Request"],
        },
      };
    }
    return result;
  }

  @Delete(":id")
  @UseFilters(new HttpExceptionFilter())
  @ApiResponse({ status: HttpStatus.OK, description: "Success" })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: "Not Available" })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: "Internal Server Error",
  })
  async delete(@Param("id") id: string) {
    let profile: any = await this.ProfileService.delete(id);
    let result: object = {
      status: HttpStatus.BAD_REQUEST,
      data: {
        message: "Bad Request",
        description: ["Record not available."],
      },
    };

    if (profile != null) {
      result = {
        status: HttpStatus.OK,
        data: {
          message: "Success",
          description: ["Successfuly deleted!"],
        },
      };
    }
    return result;
  }

}
