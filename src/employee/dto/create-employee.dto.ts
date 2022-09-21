import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ required: true })
  phone: string;

  @ApiProperty({ required: true })
  position: string;

  @ApiProperty({ required: false })
  photo: string;

  @ApiProperty({ required: true })
  payment: string;
}
