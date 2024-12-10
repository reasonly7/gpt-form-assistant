import { post } from './request';

const prefix = '/ali-bailian';

export const gptApi = {
  bailianGPT(prompt: string) {
    return post<string>(`${prefix}/translator`, { prompt });
  },
};
