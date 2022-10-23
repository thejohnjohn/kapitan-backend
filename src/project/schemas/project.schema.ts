import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

interface IPeople {
  firstName: string;
  lastName: string;
  position: string;
}
@Schema()
export class Project extends Document {
  @Prop()
  projectName: string;

  @Prop()
  projectOwner: IPeople;

  @Prop()
  techHoursQuantity: string;

  @Prop()
  deadline: string;

  @Prop()
  projectPriority: string;

  @Prop()
  projectBriefing: string;

  @Prop()
  projectLeader: IPeople;

  @Prop()
  techHourValue: string;

  @Prop()
  projectTeam: [IPeople];
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
