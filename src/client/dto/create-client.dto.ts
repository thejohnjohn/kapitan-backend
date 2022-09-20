import { IsEmail, IsNotEmpty } from 'class-validator';
export class CreateClientDto {
  clientName: string;
  phone: string;
  email: string;
  site: string;
  CNPJ: string;
}
