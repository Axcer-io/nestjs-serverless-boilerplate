import { ApiProperty } from "@nestjs/swagger";

export class UpdateProfileDto {
  @ApiProperty({ description: "First Name" })
  first_name?: string;

  @ApiProperty({ description: "Last Name" })
  last_name?: string;

  @ApiProperty({ description: "Email" })
  email?: string;

  @ApiProperty({ description: "Mobile" })
  mobile?: string;

}
