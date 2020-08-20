import {HttpClient} from './infraestructure/http/HttpClient'
import {HttpUsersServices} from './infraestructure/http/HttpUsersServices'
import {SearchPosts} from './useCases/SearchPosts'

export class Provider {
    static searchPosts() { return new SearchPosts()}
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
