import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type ClientDocument = HydratedDocument<Client>;
@Schema()
export class Client extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  lastName: string;

  @Prop()
  phone: string;

  @Prop()
  email: string;

  @Prop()
  site: string;

  @Prop()
  CNPJ: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
