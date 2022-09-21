import { ApiProperty } from '@nestjs/swagger';
export class CreateClientDto {
  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  lastName: string;

  @ApiProperty({ required: true })
  phone: string;

  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ required: false })
  site: string;

  @ApiProperty({ required: true })
  CNPJ: string;
}
