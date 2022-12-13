import { ApiProperty } from '@nestjs/swagger';
import {
  Length,
  IsEmail,
  IsFQDN,
  IsPhoneNumber,
  Matches,
  IsUUID,
} from 'class-validator';

export class CreateClientDto {
  @IsUUID('4')
  _id?: string;

  @Length(5, 15)
  @ApiProperty({ required: true })
  name: string;

  @Length(5, 35)
  @ApiProperty({ required: true })
  lastName: string;

  @IsPhoneNumber('BR')
  @ApiProperty({ required: true })
  phone: string;

  @IsEmail()
  @ApiProperty({ required: true })
  email: string;

  @IsFQDN()
  @ApiProperty({ required: false })
  site: string;

  @Matches(
    /([0-9]{2}\.?[0-9]{3}\.[0-9]{3}(\/)?[0-9]{4}\-?[0-9]{2})|([0-9]{14})/,
  )
  @ApiProperty({ required: true })
  CNPJ: string;
}
