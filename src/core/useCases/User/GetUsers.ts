import {UsersResponse} from '../../domain/users/UsersResponse'
import {UsersService} from '../../domain/users/UsersService'

export class GetUsers {
    private readonly userServices: UsersService

    constructor(userServices: UsersService) {
        this.userServices = userServices
    }

    public async execute(): Promise<UsersResponse> {
        return this.userServices.getUsers()
    }
}
