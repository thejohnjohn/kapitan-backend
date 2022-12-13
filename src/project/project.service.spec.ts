import { Test, TestingModule } from '@nestjs/testing';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import mockData from '../../mocks/data/project.json';

describe('ProjectService', () => {
  let service: ProjectService;

  beforeEach(async () => {
    /*const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectService],
    }).compile();

    service = module.get<ProjectService>(ProjectService);*/
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  /*it('sample create test', () => {
    console.log(mockData[0]);
    expect(service).toBeDefined();
  });*/
});
