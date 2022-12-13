import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type ClientDocument = HydratedDocument<Client>;

@Schema()
export class Client extends Document {
  @Prop({ type: String, default: () => {
      return uuidv4();
    }
  })
  _id: string; 

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  phone: string;

  @Prop()
  email: string;

  @Prop()
  site: string;

  @Prop({ required: true })
  CNPJ: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);

