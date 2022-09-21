import { Document } from 'mongoose';

export class IClient extends Document {
  readonly name: string;
  readonly phone: string;
  readonly email: string;
  readonly site: string;
  readonly CNPJ: string;
}
