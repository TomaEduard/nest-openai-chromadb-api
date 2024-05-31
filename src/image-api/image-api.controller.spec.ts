import { Test, TestingModule } from '@nestjs/testing';
import { ImageApiController } from './image-api.controller';
import { ImageApiService } from './image-api.service';

describe('ImageApiController', () => {
  let controller: ImageApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImageApiController],
      providers: [ImageApiService],
    }).compile();

    controller = module.get<ImageApiController>(ImageApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
