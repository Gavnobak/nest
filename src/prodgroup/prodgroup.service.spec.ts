import { Test, TestingModule } from '@nestjs/testing';
import { ProdgroupService } from './prodgroup.service';

describe('ProdgroupService', () => {
  let service: ProdgroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProdgroupService],
    }).compile();

    service = module.get<ProdgroupService>(ProdgroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
