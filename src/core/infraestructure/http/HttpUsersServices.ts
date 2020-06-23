import {UsersResponse} from '../../domain/users/UsersResponse'
import {UsersService} from '../../domain/users/UsersService'
import {HttpClient} from './HttpClient'

export class HttpUsersServices implements UsersService {
    private httpClient: HttpClient

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient
    }

    async getUsers(): Promise<UsersResponse> {
        const response = await this.httpClient.get('api/?page=1&results=2&seed=abc')
        return {
            users: response,
        }
    }
}