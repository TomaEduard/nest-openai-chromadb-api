import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { ChatCompletionApiService } from './chat-completion-api.service';
import { GetChatCompletionAnswerInputDTO } from "./model/chat-completion-input.dto";

@Controller('chat-completion-api')
export class ChatCompletionApiController {
  constructor(private readonly service: ChatCompletionApiService) {}

  @Post()
  getChatCompletionMessage(
    @Body(new ValidationPipe({ transform: true }))
      data: GetChatCompletionAnswerInputDTO,
  ) {
    console.log(`🔵 chat-completion-api - message:`, data.message);
    return this.service.getAiModelAnswer(data);
  }

  // @Get()
  // getChatHistory() {
  //   console.log(`🔵 getChatHistory`);
  //   return this.service.getChatHistory();
  // }

}
