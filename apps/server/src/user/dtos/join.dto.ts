import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class JoinDto {
  @ApiProperty()
  @IsString()
  name: string;
}
