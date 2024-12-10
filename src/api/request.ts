import axios, { AxiosError, AxiosResponse, HttpStatusCode } from 'axios';

export interface ResponseData<T> {
  data: T;
  code: number;
  success: boolean;
  message?: string;
}

const request = axios.create({
  baseURL: '/api',
});

request.interceptors.request.use((request) => {
  // const { access_token } = localStorage;
  // if (access_token) {
  //   request.headers.Authorization = `Bearer ${access_token}`;
  // }

  return request;
});

// Use more beautiful tips, like `message` in ant-design-vue
const message = {
  success: (msg: string) => {
    alert(msg);
  },
  error: (msg: string) => {
    console.log(msg);
  },
};

// Todo implement this.
const serverCodeMessageMap: Record<number, string> = {};
// Todo implement this.
const httpCodeMessgeMap: Record<number, string> = {};

request.interceptors.response.use(
  (response: AxiosResponse<ResponseData<any>>) => {
    // if (response.config.responseType === "blob") {
    //   return response.data;
    // }
    // const { message: msg, code } = response.data as ResponseData<unknown>;
    // if (code >= 200 && code < 300) {
    //   msg && message.success(msg);
    // } else {
    //   message.error(serverCodeMessageMap[code]);
    // }

    return response.data.data;
  },
);

export function get<T>(...params: Parameters<typeof request.get>) {
  return request.get.call(null, ...params) as Promise<T | undefined>;
}

export function post<T>(...params: Parameters<typeof request.post>) {
  return request.post.call(null, ...params) as Promise<T | undefined>;
}

export function patch<T>(...params: Parameters<typeof request.patch>) {
  return request.patch.call(null, ...params) as Promise<T | undefined>;
}

export function put<T>(...params: Parameters<typeof request.put>) {
  return request.put.call(null, ...params) as Promise<T | undefined>;
}

export function del<T>(...params: Parameters<typeof request.delete>) {
  return request.delete.call(null, ...params) as Promise<T | undefined>;
}

export interface PaginateData<T> {
  records: T[];
  page: number;
  size: number;
  total: number;
}
