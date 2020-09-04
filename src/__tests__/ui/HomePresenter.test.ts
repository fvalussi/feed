import { HomePresenter, HomeView } from '../../ui/home/HomePresenter'
import { instance, mock, verify, when } from 'ts-mockito'
import { SearchPosts } from '../../core/useCases/SearchPosts'
import { Post } from '../../core/domain/post/Post'

describe('HomePresenter', () => {
    it('should load posts given a search text', async () => {
        when(searchPosts.execute(SEARCH_TEXT)).thenResolve(POSTS)

        await presenter.search(SEARCH_TEXT)

        verify(view.showLoading()).called()
        verify(searchPosts.execute(SEARCH_TEXT)).called()
        verify(view.renderPosts(POSTS))
        verify(view.hideLoading()).called()
    })

    const POSTS = [
        new Post('', '', new Date(), ''),
    ]
    const SEARCH_TEXT = ''

    const view = mock<HomeView>()
    const searchPosts = mock<SearchPosts>()
    const presenter = new HomePresenter(instance(view), instance(searchPosts))
})
