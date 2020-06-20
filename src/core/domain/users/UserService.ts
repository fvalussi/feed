import {UsersResponse} from './UserResponse'

export interface  UserServices {
    getUsers(): Promise<UsersResponse>
}
