import {instance, mock, when} from 'ts-mockito'
import {User} from '../core/domain/users/entities/User'
import {UserServices} from '../core/domain/users/UserService'
import {GetUsers} from '../core/useCases/User/GetUsers'

describe('GetUser', () => {
    it('should return user list', async () => {
        when(userServiceMock.getUsers()).thenResolve(usersResponse)

        const response = await getUsers().execute()

        expect(response.users).toEqual([aUser])
    })

    beforeEach(() => {
        userServiceMock = mock<UserServices>()
    })

    let userServiceMock: UserServices
    const aUser = new User('name', 'email@email.com')
    const usersResponse = {
        users: [aUser],
    }

    function getUsers(): GetUsers {
        return new GetUsers(instance(userServiceMock))
    }
})
