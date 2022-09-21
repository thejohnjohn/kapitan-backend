import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Client extends Document {
  @Prop({ required: true })
  name: string;

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
