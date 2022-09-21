import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectDto {
  @ApiProperty()
  private projectName: string;

  @ApiProperty()
  private projectOwner: string;

  @ApiProperty()
  private techHoursQuantity: string;

  @ApiProperty()
  private deadline: string;

  @ApiProperty()
  private projectPriority: string;

  @ApiProperty()
  private projectBriefing: string;

  @ApiProperty()
  private projectLeader: string;

  @ApiProperty()
  private techHourValue: string;

  @ApiProperty()
  private projectTeam: string[];
}
