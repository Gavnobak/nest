import { Test, TestingModule } from '@nestjs/testing';
import { ProdgroupController } from './prodgroup.controller';
import { ProdgroupService } from './prodgroup.service';

describe('ProdgroupController', () => {
  let controller: ProdgroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProdgroupController],
      providers: [ProdgroupService],
    }).compile();

    controller = module.get<ProdgroupController>(ProdgroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
