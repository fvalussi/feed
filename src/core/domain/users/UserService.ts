import {UserResponse} from './UserResponse'

export interface UserService {
    get(someUserId: string): Promise<UserResponse>
}
