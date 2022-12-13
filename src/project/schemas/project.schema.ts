import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// eslint-disable-next-line prettier/prettier
interface IPeople {
  firstName: string;
  lastName: string;
  position: string;
}
@Schema()
export class Project extends Document {
  @Prop()
  projectName: string;

  @Prop({ type: Object })
  projectOwner: any;

  @Prop()
  techHoursQuantity: string;

  @Prop()
  deadline: string;

  @Prop()
  projectPriority: string;

  @Prop()
  projectBriefing: string;

  @Prop({ type: Object })
  projectLeader: any;

  @Prop()
  techHourValue: string;

  @Prop({ type: Array })
  projectTeam: any;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
