import { Document } from 'mongoose';

interface IPeople extends Document {
  firstName: string;
  lastName: string;
  position: string;
}

export interface IProject extends Document {
  readonly projectName: string;
  readonly projectOwner: IPeople;
  readonly techHoursQuantity: string;
  readonly deadline: string;
  readonly projectPriority: string;
  readonly projectBriefing: string;
  readonly projectLeader: IPeople;
  readonly techHourValue: string;
  readonly projectTeam: [IPeople];
}
