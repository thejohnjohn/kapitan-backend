import { Document } from 'mongoose';

export class IEmployee extends Document {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly phone: string;
  readonly position: string;
  readonly photo: string;
  readonly payment: string;
}
