import { PartialType } from '@nestjs/mapped-types';
import { CreateImageApiDto } from './create-image-api.dto';

export class UpdateImageApiDto extends PartialType(CreateImageApiDto) {}
