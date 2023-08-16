import { Test, TestingModule } from '@nestjs/testing';
import { AlternativeCatService } from './alternative-cat.service';

describe('AlternativeCatService', () => {
  let service: AlternativeCatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlternativeCatService],
    }).compile();

    service = module.get<AlternativeCatService>(AlternativeCatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
