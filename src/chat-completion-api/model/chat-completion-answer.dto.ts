import { IsNotEmpty, IsString } from "class-validator";

export class GetChatCompletionAnswerInputDto {
  @IsString()
  @IsNotEmpty()
  message: string;
}

export class GetChatCompletionAnswerOutputDTO {
  @IsString()
  @IsNotEmpty()
  aiMessage: string;

  constructor(aiMessage: any) {
    this.aiMessage = aiMessage.toString();
  }

  static getInstance(aiMessage: string): GetChatCompletionAnswerOutputDTO {
    return new GetChatCompletionAnswerOutputDTO(aiMessage);
  }
}
