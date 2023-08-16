import { Test, TestingModule } from '@nestjs/testing';
import { AlternativeCatController } from './alternative-cat.controller';
import { AlternativeCatService } from './alternative-cat.service';

describe('AlternativeCatController', () => {
  let controller: AlternativeCatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlternativeCatController],
      providers: [AlternativeCatService],
    }).compile();

    controller = module.get<AlternativeCatController>(AlternativeCatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
