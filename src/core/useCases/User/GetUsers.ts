import {UsersResponse} from '../../domain/users/UserResponse'
import {UserServices} from '../../domain/users/UserService'

export class GetUsers {
    private readonly userServices: UserServices

    constructor(userServices: UserServices) {
        this.userServices = userServices;
    }

    public async execute(): Promise<UsersResponse> {
        return await this.userServices.getUsers()
    }
}
