import { Model, QueryOptions } from "mongoose";
import { Injectable, Inject } from "@nestjs/common";
import { Profile } from "./interfaces/profile.interface";
import { CreateProfileDto } from "./dto/create-profile.dto";
import { UpdateProfileDto } from "./dto/update-profile.dto";
import { QueryOptionsType, Util } from "../utils/Util";

let util: Util;
@Injectable()
export class ProfileService {
  constructor(
    @Inject("PROFILE_MODEL")
    private model: Model<Profile>,
  ) {
    util = new Util();
  }

  async create(createProfileDto: CreateProfileDto): Promise<Profile> {
    const profile: Profile = await this.model.create(createProfileDto);
    return profile;
  }

  async findAll(query: QueryOptions) {
    const pageOptions: QueryOptionsType = util.getPageOptions(query);
    const result = await this.model.find().skip(pageOptions.offset).limit(pageOptions.limit).sort({ timestamp: -1 }).exec();

    if(!result) {
      return null;
    }
    return {
      data: result,
      offset: pageOptions.offset,
      limit: pageOptions.limit
    }
  }

  async findOne(id: string): Promise<Profile> {
    let profile = await this.model
        .findById(id)
        .exec();

    return profile;
  }

  async getProfileById(id: string, _id: string = null): Promise<Profile> {
      return await this.model.findById(id).exec();
  }

  async update(id: string, updateProfileDto: UpdateProfileDto): Promise<Profile> {
    let profile: any = null;

    profile = await this.model.findByIdAndUpdate(id, updateProfileDto, {new: true}).exec();
    return profile;
  }

  async delete(id: string): Promise<Profile> {
    const isDelete = await this.model.findByIdAndDelete(id).exec();
    return isDelete;
  }
  
  }

  