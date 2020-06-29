export class User {
    id: string
    name: string
    email: string

    constructor(id: string, email: string, name: string) {
        this.id = id
        this.email = email
        this.name = name
    }
}
