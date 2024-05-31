import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { ImageApiService } from "./image-api.service";
import { GetChatCompletionAnswerInputDTO } from "../chat-completion-api/model/chat-completion-input.dto";

@Controller("image-api")
export class ImageApiController {
  constructor(private readonly imageApiService: ImageApiService) {
  }

  // @Post()
  // create(@Body() createImageApiDto: CreateImageApiDto) {
  //   return this.imageApiService.create(createImageApiDto);
  // }

  @Post()
  getImage(
    @Body(new ValidationPipe({ transform: true }))
      data: GetChatCompletionAnswerInputDTO
  ) {
    console.log(`🔵 POST - image-api`);
    return this.imageApiService.getImageAnswer(data);
  }

  // @Get()
  // findAll() {
  //   return this.imageApiService.findAll();
  // }
  //
  // @Get(":id")
  // findOne(@Param("id") id: string) {
  //   return this.imageApiService.findOne(+id);
  // }

  // @Patch(":id")
  // update(@Param("id") id: string, @Body() updateImageApiDto: UpdateImageApiDto) {
  //   return this.imageApiService.update(+id, updateImageApiDto);
  // }

  // @Delete(":id")
  // remove(@Param("id") id: string) {
  //   return this.imageApiService.remove(+id);
  // }
}
