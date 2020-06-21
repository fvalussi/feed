import {instance, mock, when} from 'ts-mockito'
import {UsersService} from '../../../core/domain/users/UsersService'
import {GetUsers} from '../../../core/useCases/User/GetUsers'
import {UserMother} from '../../testing/UserMother'

describe('GetUsers', () => {
    it('should return user list', async () => {
        when(usersServicesMock.getUsers()).thenResolve(usersResponse)

        const response = await getUsers().execute()

        expect(response.users).toEqual([aUser])
    })

    beforeEach(() => {
        usersServicesMock = mock<UsersService>()
    })

    let usersServicesMock: UsersService
    const aUser = UserMother.createUser()
    const usersResponse = { users: [aUser] }

    function getUsers(): GetUsers {
        return new GetUsers(instance(usersServicesMock))
    }
})
