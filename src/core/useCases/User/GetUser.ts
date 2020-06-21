import {UserResponse} from '../../domain/users/UserResponse'
import {UserService} from '../../domain/users/UserService'

export class GetUser {
    private userService: UserService

    constructor(userService: UserService) {
        this.userService = userService
    }

    public execute(id: string): Promise<UserResponse> {
        return this.userService.get(id)
    }
}
