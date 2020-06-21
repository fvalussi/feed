import {instance, mock, verify} from 'ts-mockito'
import {GetUsers} from '../../../core/useCases/User/GetUsers'
import {UsersPresenter, UsersView} from '../../../ui/Users/UsersPresenter'

describe('User presenter', () => {
    it('should show loading before fetching users', async () => {
        await presenter.start()

        verify(view.showLoading()).calledBefore(getUsersUseCase.execute())
    })

    it('should show loading before fetching users', async () => {
        await presenter.start()

        verify(view.hideLoading()).calledAfter(getUsersUseCase.execute())
    })

    beforeEach(() => {
        view = mock<UsersView>()
        getUsersUseCase = mock<GetUsers>()
        presenter = createPresenter()
    })

    let presenter: UsersPresenter
    let view: UsersView
    let getUsersUseCase: GetUsers

    function createPresenter(): UsersPresenter {
        return new UsersPresenter(instance(view), instance(getUsersUseCase))
    }
})
