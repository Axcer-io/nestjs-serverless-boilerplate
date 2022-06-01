import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty } from "class-validator";

export class CreateProfileDto {
  @ApiProperty({ description: "First Name" })
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @ApiProperty({ description: "Last Name" })
  @IsString()
  @IsNotEmpty()
  last_name: string;

  @ApiProperty({ description: "Email" })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: "Mobile" })
  @IsString()
  @IsNotEmpty()
  mobile: string;

}


