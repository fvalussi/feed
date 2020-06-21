import {User} from './entities/User'
import {UsersResponse} from './UsersResponse'

export interface  UsersService {
    getUsers(): Promise<UsersResponse>
}
