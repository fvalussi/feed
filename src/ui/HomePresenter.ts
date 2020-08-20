import { SearchPosts } from '../core/useCases/SearchPosts'

export class HomePresenter {
    private view: HomeView
    private searchPosts: SearchPosts

    constructor(view: HomeView, searchPosts: SearchPosts) {
        this.view = view
        this.searchPosts = searchPosts
    }

    async search(searchText: string) {
        this.view.showLoading()
        const posts = await this.searchPosts.execute(searchText)
        this.view.renderPosts(posts)
        this.view.hideLoading()
    }

    start() {
        throw Error('Not implemented')
    }
}

export interface HomeView {
    showLoading(): void

    renderPosts(posts: string[]): void

    hideLoading(): void
}
