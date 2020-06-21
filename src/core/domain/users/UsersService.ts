import {User} from './entities/User'
import {UsersResponse} from './UsersResponse'

export interface  UsersService {
    getUsers(): Promise<UsersResponse>

    get(someUserId: string): Promise<User>
}
