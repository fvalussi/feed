import {User} from '../../domain/users/entities/User'
import {UsersResponse} from '../../domain/users/UsersResponse'
import {UsersService} from '../../domain/users/UsersService'

export class GetUsers {
    private readonly userServices: UsersService

    constructor(userServices: UsersService) {
        this.userServices = userServices
    }

    public async execute(): Promise<UsersResponse> {
        const response = await this.userServices.getUsers()
        const  { users } = response
        return {
            users: users.map(this.usersFromJson),
        }
    }

    private usersFromJson = (json: any): User => (
        new User(json.id, json.email, json.name)
    )
}
