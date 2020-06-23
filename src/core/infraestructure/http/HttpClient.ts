import axios, {AxiosInstance, AxiosResponse} from 'axios'
import {HttpJsonError} from './HttpJsonError'
import {NetworkError} from './NetworkError'

export class HttpClient {
    private http: AxiosInstance

    constructor(serverBaseUrl: string) {
        this.http = axios.create({
            baseURL: serverBaseUrl,
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }

    async get(url: string): Promise<any> {
        try {
            const response: AxiosResponse = await this.http.get(url)
            const { data, status, statusText } = response
            const hasError = !(status === 200)
            return new Response(data, status, statusText, hasError)
        } catch (error) {
            // this.handleError(error)
            const { data, status, statusText } = error.response
            return new Response(data, status, statusText, true)
        }
    }

    async post(url: string, jsonBody: object = {}): Promise<any> {
        try {
            const response = await this.http.post(url, JSON.stringify(jsonBody))
            return response
        } catch (e) {
            this.handleError(e)
        }
    }

    private handleError(error: any) {
        if (error.message === 'Network Error') { return new NetworkError() }
        throw new HttpJsonError(error.response.status, error.response.data)
    }
}

export class Response {
    data: string
    status: number
    statusText: string
    hasError: boolean

    constructor(data: string, status: number, statusText: string, hasError: boolean) {
        this.data = data
        this.status = status
        this.statusText = statusText
        this.hasError = hasError
    }
}
