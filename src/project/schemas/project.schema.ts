import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Project extends Document {
  @Prop()
  projectName: string;

  @Prop()
  projectOwner: string;

  @Prop()
  techHoursQuantity: string;

  @Prop()
  deadline: string;

  @Prop()
  projectPriority: string;

  @Prop()
  projectBriefing: string;

  @Prop()
  projectLeader: string;

  @Prop()
  techHourValue: string;

  @Prop()
  projectTeam: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
