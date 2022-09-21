import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { IEmployee } from './interfaces/employee.interface';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './schemas/employee.schema';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name) private readonly employeeModel: Model<Employee>,
  ) {}

  public async findAll(): Promise<Employee[]> {
    return await this.employeeModel.find().exec();
  }

  public async findOne(employeeId: string): Promise<Employee> {
    const employee = await this.employeeModel
      .findById({ _id: employeeId })
      .populate('employee')
      .exec();

    if (!employee) {
      throw new NotFoundException(`Employee #${employeeId} not found`);
    }

    return employee;
  }

  public async create(
    createEmployeeDto: CreateEmployeeDto,
  ): Promise<IEmployee> {
    const newEmployee = await this.employeeModel.create(createEmployeeDto);
    return newEmployee;
  }

  public async update(
    employeeId: string,
    updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<IEmployee> {
    const existingEmployee = await this.employeeModel.findByIdAndUpdate(
      { _id: employeeId },
      updateEmployeeDto,
    );

    if (!existingEmployee) {
      throw new NotFoundException(`Employee #${employeeId} not found`);
    }

    return existingEmployee;
  }

  public async remove(employeeId: string): Promise<any> {
    const deletedEmployee = await this.employeeModel.findByIdAndRemove(
      employeeId,
    );
    return deletedEmployee;
  }
}
