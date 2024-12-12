import { post } from './request';

const prefix = '/ali-bailian';

export const gptApi = {
  bailianGPT(prompt: string) {
    return post<string>(`${prefix}/translator`, { prompt });
  },

  /* 接入 Open AI 的大模型 */
  openAIGpt(prompt: string) {
    return post<string>(`${prefix}/translator`, { prompt });
  },
};
