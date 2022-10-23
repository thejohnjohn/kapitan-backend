import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Employee extends Document {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  position: string;

  @Prop()
  photo: string;

  @Prop()
  payment: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
