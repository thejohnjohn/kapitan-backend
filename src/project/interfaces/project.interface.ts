import { Document } from 'mongoose';

export interface IProject extends Document {
  readonly projectName: string;
  readonly projectOwner: string;
  readonly techHoursQuantity: string;
  readonly deadline: string;
  readonly projectPriority: string;
  readonly projectBriefing: string;
  readonly projectLeader: string;
  readonly techHourValue: string;
  readonly projectTeam: string[];
}
