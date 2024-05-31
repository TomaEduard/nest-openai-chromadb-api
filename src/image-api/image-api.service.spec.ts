import { Test, TestingModule } from '@nestjs/testing';
import { ImageApiService } from './image-api.service';

describe('ImageApiService', () => {
  let service: ImageApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImageApiService],
    }).compile();

    service = module.get<ImageApiService>(ImageApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
