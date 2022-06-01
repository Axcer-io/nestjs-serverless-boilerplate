import { ValidatorConstraint, ValidatorConstraintInterface, ValidationOptions, registerDecorator, ValidationArguments } from "class-validator";
import { ProfileService } from "../profile/profile.service";
import {Injectable} from '@nestjs/common';

let profileObject:ProfileService;
@ValidatorConstraint({ name: 'IsProfileIdAvailable', async: true })
@Injectable()
export class Validator implements ValidatorConstraintInterface {

    constructor(private readonly deviceService: ProfileService) {
      if (!profileObject) {
        profileObject = this.deviceService;
      }
    }

    async validate(id: string) {
      try {
        let profile = await profileObject.getProfileById(id);
        return !profile;
      } catch (e) {
        return false;
      }
    }
  
    defaultMessage(args: ValidationArguments) {
      return 'Profile id allready exits';
    }
}

export function IsProfileIdAvailable( options?: ValidationOptions) {
    return(o: Object, propertyName: string)=>{
      registerDecorator({
        name: 'IsProfileIdAvailable',
        target: o.constructor,
        propertyName: propertyName,
        options: options,
        validator: Validator,
      });
    }
}