import { IsNotEmpty, IsString } from "class-validator";

export class GetChatCompletionAnswerInputDTO {
  @IsString()
  @IsNotEmpty()
  message: string;
}
