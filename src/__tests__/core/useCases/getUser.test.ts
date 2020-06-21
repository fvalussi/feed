import {instance, mock, when} from 'ts-mockito'
import {UserService} from '../../../core/domain/users/UserService'
import {GetUser} from '../../../core/useCases/User/GetUser'
import {UserMother} from '../../testing/UserMother'

describe('GetUser', () => {
    it('retrieve a User with the given ID', async () => {
        when(userServicesMock.get(someUserId)).thenResolve(userResponse)

        const response = await getUser().execute(someUserId)

        expect(response.user).toEqual(aUserWithSameId)

    })

    beforeEach(() => {
        userServicesMock = mock<UserService>()
    })

    let userServicesMock: UserService
    const someUserId = 'userId'
    const aUserWithSameId = UserMother.createUserWithID(someUserId)
    const userResponse = { user: aUserWithSameId }

    function getUser(): GetUser {
        return new GetUser(instance(userServicesMock))
    }
})
