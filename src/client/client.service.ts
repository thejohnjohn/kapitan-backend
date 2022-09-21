import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { IClient } from './interfaces/client.interface';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './schemas/client.schema';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel(Client.name) private readonly clientModel: Model<Client>,
  ) {}

  public async findAll(): Promise<Client[]> {
    return await this.clientModel.find().exec();
  }

  public async findOne(clientId: string): Promise<Client> {
    const client = await this.clientModel
      .findById({ _id: clientId })
      .populate('client')
      .exec();

    if (!client) {
      throw new NotFoundException(`Client #${clientId} not found`);
    }

    return client;
  }

  public async create(createClientDto: CreateClientDto): Promise<IClient> {
    const newClient = await this.clientModel.create(createClientDto);
    return newClient;
  }

  public async update(
    clientId: string,
    updateClientDto: UpdateClientDto,
  ): Promise<IClient> {
    const existingClient = await this.clientModel.findByIdAndUpdate(
      { _id: clientId },
      updateClientDto,
    );

    if (!existingClient) {
      throw new NotFoundException(`Client #${clientId} not found`);
    }

    return existingClient;
  }

  public async remove(clientId: string): Promise<any> {
    const deletedClient = await this.clientModel.findByIdAndRemove(clientId);
    return deletedClient;
  }
}
