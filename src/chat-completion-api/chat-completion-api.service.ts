import { Injectable } from "@nestjs/common";
import { ChatHistoryManager } from "./model/chat-history-manager";
import { ChatOpenAI } from "langchain/chat_models/openai";
import OpenAI from "openai";

import { GetChatCompletionAnswerOutputDTO } from "./model/chat-completion-answer.dto";
import { GetChatCompletionAnswerInputDTO } from "./model/chat-completion-input.dto";

const DEFAULT_TEMPERATURE = 1;
const DEFAULT_MODEL = "gpt-3.5-turbo";

@Injectable()
export class ChatCompletionApiService {
  private readonly chatHistory: ChatHistoryManager;
  private readonly chat: ChatOpenAI;

  client = new OpenAI()

  constructor() {
    this.chatHistory = new ChatHistoryManager();
    this.chat = new ChatOpenAI({
      temperature: DEFAULT_TEMPERATURE,
      openAIApiKey: process.env.OPENAI_API_KEY,
      modelName: DEFAULT_MODEL
    });
  }

  async getAiModelAnswer(data: GetChatCompletionAnswerInputDTO) {
    this.chatHistory.addHumanMessage(data.message);
    const result = await this.chat.predictMessages(
      this.chatHistory.chatHistory
    );

    const aiMessage: any = result.content;
    this.chatHistory.addAiMessage(aiMessage);

    return GetChatCompletionAnswerOutputDTO.getInstance(aiMessage);
  }

  async getChatHistory() {
    return this.chatHistory;
  }

}
