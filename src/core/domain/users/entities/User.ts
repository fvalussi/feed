export class User {
    private id: string
    private name: string
    private email: string

    constructor(id: string, email: string, name: string) {
        this.id = id
        this.email = email
        this.name = name
    }
}
