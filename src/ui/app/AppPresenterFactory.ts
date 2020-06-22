import {Provider} from '../../core/Provider'
import {UsersPresenter, UsersView} from '../users/UsersPresenter'

export class AppPresenterFactory {
    users(usersView: UsersView): UsersPresenter {
        return new UsersPresenter(usersView, Provider.getUsers())
    }
}
