export class Post {
    title: string
    content: string
    date: Date
    author: string

    constructor(title: string, content: string, date: Date, author: string) {
        this.title = title
        this.content = content
        this.date = date
        this.author = author
    }
}
