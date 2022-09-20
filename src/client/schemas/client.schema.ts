import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Client extends Document {
  @Prop({ required: true })
  clientName: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  site: string;

  @Prop()
  CNPJ: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
