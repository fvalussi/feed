import axios, { AxiosInstance } from 'axios'

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
            return await this.http.get(url)
        } catch (e) {
            // tslint:disable-next-line:no-console
            console.log('Debug error get', e.message)
        }
    }

    async post(url: string, jsonBody: object = {}): Promise<any> {
        try {
            return await this.http.post(url, JSON.stringify(jsonBody))
        } catch (e) {
            // tslint:disable-next-line:no-console
            console.log('Debug error post', e.message)
        }
    }
}
