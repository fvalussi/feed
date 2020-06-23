import {GetUsers} from '../../core/useCases/User/GetUsers'

export interface UsersView {
    showLoading(): void

    hideLoading(): void
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
        const users = await this.getUsers.execute()
        this.view.hideLoading()
    }
}
