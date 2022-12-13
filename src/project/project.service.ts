import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { IProject } from './interfaces/project.interface';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './schemas/project.schema';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name) private readonly projectModel: Model<Project>,
  ) {}

  public async findAll(): Promise<Project[]> {
    return await this.projectModel.find().exec();
  }

  public async findOne(projectId: string): Promise<Project> {
    const project = await this.projectModel
      .findById({ _id: projectId })
      .populate('project')
      .exec();

    if (!project) {
      throw new NotFoundException(`Project #${projectId} not found`);
    }

    return project;
  }

  public async create(createProjectDto: CreateProjectDto): Promise<any> {
    const newProject = await this.projectModel.create(createProjectDto);

    return newProject;
  }

  public async update(
    projectId: string,
    updateProjectDto: UpdateProjectDto,
  ): Promise<any> {
    const existingProject = await this.projectModel.findByIdAndUpdate(
      { _id: projectId },
      updateProjectDto,
    );

    if (!existingProject) {
      throw new NotFoundException(`Project #${projectId} not found`);
    }

    return existingProject;
  }

  public async remove(projectId: string): Promise<any> {
    const deletedProject = await this.projectModel.findByIdAndRemove(projectId);
    return deletedProject;
  }
}
