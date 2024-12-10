import { post } from './request';

const prefix = '/bailian-gpt';

export const gptApi = {
  bailianGPT(prompt: string) {
    return post<string>(prefix, { prompt });
  },
};
