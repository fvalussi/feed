export class SearchPosts {
    execute(searchText: string): Promise<string[]> {
        return Promise.resolve([searchText])
    }
}
