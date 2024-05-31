import { Module } from '@nestjs/common';
import { ImageApiService } from './image-api.service';
import { ImageApiController } from './image-api.controller';

@Module({
  controllers: [ImageApiController],
  providers: [ImageApiService],
})
export class ImageApiModule {}
