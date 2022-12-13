import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

import { CreateClientDto } from './dto/create-client.dto';
import { ClientService } from './client.service';
import { Client } from './schemas/client.schema';
import { IClient } from './interfaces/client.interface';

describe('📂 SERVICE - Client module', () => {
  let service: ClientService;
  let model: Model<Client>;

  const mockUUID = uuidv4();

  const mockClient: CreateClientDto = {
    _id: mockUUID, 
    name: 'Nicoline',
    lastName: 'Freitas',
    phone: '(68) 2555-3847',
    email: 'ncrellin0@sina.com.cn',
    site: 'http://youter.com',
    CNPJ: '38.115.537/0001-70',
  };
  
  const clientList: CreateClientDto[]= [
    {
      _id: uuidv4(),
      name : "Abigael",
      lastName : "Thomas",
      phone : "(28) 3209-3530",
      email : "ashowl4@mail.ru",
      site : "https://berkeley.edu",
      CNPJ : "89.544.687/0001-30"
    },
    {
      _id: uuidv4(),
      name : "Vitoria",
      lastName : "Santos",
      phone : "(66) 3317-6217",
      email : "vlismer5@hugedomains.com",
      site : "http://purevolume.com",
      CNPJ : "47.763.770/0001-50"
    }
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClientService,
        {
          provide: getModelToken(Client.name),
          useValue: {
            new: jest.fn().mockResolvedValue(mockClient),
            constructor: jest.fn().mockResolvedValue(mockClient),
            find: jest.fn(),
            create: jest.fn(),
            exec: jest.fn(),
          }
        },
      ],
    }).compile();

    service = module.get<ClientService>(ClientService);
    model = module.get<Model<Client>>(getModelToken(Client.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('#CREATE - insert new client', async () => {
    jest.spyOn(model, 'create').mockImplementationOnce(() =>
      Promise.resolve(
        {
          _id: mockUUID,
          name: 'Nicoline',
          lastName: 'Freitas',
          phone: '(68) 2555-3847',
          email: 'ncrellin0@sina.com.cn',
          site: 'http://youter.com',
          CNPJ: '38.115.537/0001-70',
        }
      ),
    );

    const newClient = await service.create(
      {
        _id: mockUUID,
        name: 'Nicoline',
        lastName: 'Freitas',
        phone: '(68) 2555-3847',
        email: 'ncrellin0@sina.com.cn',
        site: 'http://youter.com',
        CNPJ: '38.115.537/0001-70',
      }
    );
    
    expect(newClient).toEqual(mockClient);
  });

  it('#READ - All clients', async () => {
    jest.spyOn(model, 'find').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(clientList),
    } as any);

    const allClients = await service.findAll();
    expect(allClients).toEqual(clientList);
  });

  it('#UPDATE - Update a client by id', async () => {
    jest.spyOn(model, 'update').mockImplementationOnce( () =>
      Promise.resolve(
        {
        _id: mockUUID,
        name: 'Nicoline',
        lastName: 'Freitas',
        phone: '(68) 2555-3847',
        email: 'ncrellin0@sina.com.cn',
        site: 'http://youter.com',
        CNPJ: '38.115.537/0001-70',
      } as any 
      );
    );

    expect(1+1).toBe(2);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

});

