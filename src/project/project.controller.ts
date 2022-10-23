import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

import { ClientService } from 'src/client/client.service';
import { EmployeeService } from 'src/employee/employee.service';

@ApiTags('Project')
@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectService.create(createProjectDto);
  }

  @Get()
  findAll() {
    return this.projectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') clientId: string) {
    return this.projectService.findOne(clientId);
  }

  @Patch(':id')
  update(
    @Param('id') clientId: string,
    @Body() updateProjectDto: UpdateProjectDto,
  ) {
    return this.projectService.update(clientId, updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') clientId: string) {
    return this.projectService.remove(clientId);
  }
}
