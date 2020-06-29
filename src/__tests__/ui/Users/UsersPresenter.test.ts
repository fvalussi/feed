import {anything, instance, mock, verify, when} from 'ts-mockito'
import {GetUsers} from '../../../core/useCases/User/GetUsers'
import {UsersPresenter, UsersView} from '../../../ui/users/UsersPresenter'

describe('User presenter', () => {
    test('should show loading before fetching users', async () => {
        await presenter.start()

        verify(view.showLoading()).calledBefore(getUsersUseCase.execute())
    })

    test('should show loading before fetching users', async () => {
        await presenter.start()

        verify(view.hideLoading()).calledAfter(getUsersUseCase.execute())
    })

    beforeEach(() => {
        view = mock<UsersView>()
        getUsersUseCase = mock<GetUsers>()
        presenter = createPresenter()
        when(getUsersUseCase.execute()).thenResolve(usersResponse)
    })

    let presenter: UsersPresenter
    let view: UsersView
    let getUsersUseCase: GetUsers
    const usersResponse = { users: [] }
    function createPresenter(): UsersPresenter {
        return new UsersPresenter(instance(view), instance(getUsersUseCase))
    }
})
