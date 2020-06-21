import {v4 as uuidv4} from 'uuid'
import {User} from '../../core/domain/users/entities/User'

export class UserMother {

    public static createNewUser(id: string, name: string, email: string): User {
        return new User(id, name, email)
    }

    public static createUser(): User {
        return this.createNewUser(this.getUserId(), 'User name', 'email@email.com')
    }

    public static createUserWithID(userId: string): User {
        return this.createNewUser(userId, 'name', 'email')
    }

    private static getUserId() {
        return uuidv4()
    }
}
