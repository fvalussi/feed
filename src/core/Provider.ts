import {HttpClient} from './infraestructure/http/HttpClient'
import {HttpUsersServices} from './infraestructure/http/HttpUsersServices'
import {GetUsers} from './useCases/User/GetUsers'

export class Provider {
    static getUsers() { return new GetUsers(D.usersServices())}
}

class Dependencies {

    static httpClient() { return new HttpClient('https://jsonplaceholder.typicode.com/')}

    static usersServices() { return this.singleton('usersService', () => new HttpUsersServices(this.httpClient())) }

    static singleton<T>(name: string, build: () => T): T {
        if (!this._singleInstances[name]) {
            this._singleInstances[name] = build()
        }
        return this._singleInstances[name]

    }
    static _singleInstances: {[key: string]: any } = {}
}

const D = Dependencies
