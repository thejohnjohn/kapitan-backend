import { MaxLength, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

interface IPeople {
  firstName: string;
  lastName: string;
}

export class CreateProjectDto {
  // @ApiProperty()()
  @IsString()
  @IsNotEmpty()
  readonly projectName: string;

  // @ApiProperty()()
  readonly projectOwner: IPeople;

  // @ApiProperty()()
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly techHoursQuantity: string;

  // @ApiProperty()()
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly deadline: string;

  // @ApiProperty()()
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly projectPriority: string;

  // @ApiProperty()()
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly projectBriefing: string;

  // @ApiProperty()()
  readonly projectLeader: IPeople;

  // @ApiProperty()()
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly techHourValue: string;

  // @ApiProperty()()
  readonly projectTeam: [IPeople];
}
