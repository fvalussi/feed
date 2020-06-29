import {User} from '../../core/domain/users/entities/User'
import {UserVM} from '../../core/domain/users/UserVM'
import {GetUsers} from '../../core/useCases/User/GetUsers'

export interface UsersView {
    showLoading(): void

    hideLoading(): void

    showUser(users: UserVM[]): void
}

export class UsersPresenter {
    private view: UsersView
    private getUsers: GetUsers

    constructor(usersView: UsersView, getUsers: GetUsers) {
        this.view = usersView
        this.getUsers = getUsers
    }

    async start() {
        this.view.showLoading()
        const usersResponse = await this.getUsers.execute()
        const users = this.usersToViewModels(usersResponse.users)
        this.view.showUser(users)
        this.view.hideLoading()
    }

    private usersToViewModels(users: User[]): UserVM[] {
        return users.map((user) => user)
    }
}
