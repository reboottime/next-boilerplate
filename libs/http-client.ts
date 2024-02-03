import axios, { type AxiosError, type AxiosInstance, type AxiosRequestConfig } from "axios"

// This requires backend has well crafted APIs contract
export default class HttpClient {
  private readonly instance: AxiosInstance

  constructor(baseURL: string) {
    this.instance = axios.create({ baseURL })
    // here you can config your default settings, for example, http request header
    this.setupInteceptor()
  }

  private setupInteceptor() {
    this.instance.interceptors.response.use(
      (res) => res.data,
      (error: AxiosError) => {
        // Here, you can incorporate custom error response logic,
        // such as automatically logging out the user if the HTTP status indicates an expired authentication token.
        return Promise.reject(error)
      }
    )
  }

  delete = (url: string): Promise<void> => {
    return this.instance.delete(url)
  }

  get = <T>(url: string, params?: DictionaryType) => {
    return this.instance.get<T>(url, { params }) as Promise<T>
  }

  patch = <T>(url: string, data: DictionaryType, conf?: AxiosRequestConfig) => {
    return this.instance.patch<T>(url, data, conf ?? {}) as Promise<T>
  }

  post = <T>(url: string, data: DictionaryType, conf?: AxiosRequestConfig) => {
    return this.instance.post<T>(url, data, conf ?? {}) as Promise<T>
  }

  put = <T>(url: string, data: DictionaryType, conf?: AxiosRequestConfig) => {
    return this.instance.put<T>(url, data, conf ?? {}) as Promise<T>
  }
}
