import { Injectable } from '@nestjs/common';
import { GetChatCompletionAnswerInputDTO } from "../chat-completion-api/model/chat-completion-input.dto";
import { ChatHistoryManager } from "../chat-completion-api/model/chat-history-manager";
import { ChatOpenAI } from "langchain/chat_models/openai";
import OpenAI from "openai";

@Injectable()
export class ImageApiService {
  private readonly chatHistory: ChatHistoryManager;
  private readonly chat: ChatOpenAI;

  client = new OpenAI()


  // create(createImageApiDto: CreateImageApiDto) {
  //   return 'This action adds a new imageApi';
  // }

  findAll() {
    return `This action returns all imageApi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imageApi`;
  }

  // update(id: number, updateImageApiDto: UpdateImageApiDto) {
  //   return `This action updates a #${id} imageApi`;
  // }

  remove(id: number) {
    return `This action removes a #${id} imageApi`;
  }

  async getImageAnswer(data: GetChatCompletionAnswerInputDTO) {
    const response = await this.client.images.generate({
      model: "dall-e-2",
      prompt: data.message,
      n: 1,
      size: "512x512",
      quality: "hd",
      style: "natural",
      response_format: "url"
    });

    console.log(`🔵 getImageAnswer`, response.data);
    return response.data;
  }
}
