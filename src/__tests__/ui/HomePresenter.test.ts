import { HomePresenter, HomeView } from '../../ui/HomePresenter'
import { instance, mock, verify, when } from 'ts-mockito'
import { SearchPosts } from '../../core/useCases/SearchPosts'

describe('HomePresenter', () => {
    it('should load posts given a search text', async () => {
        when(searchPosts.execute(SEARCH_TEXT)).thenResolve(POSTS)

        await presenter.search(SEARCH_TEXT)

        verify(view.showLoading()).called()
        verify(searchPosts.execute(SEARCH_TEXT)).called()
        verify(view.renderPosts(POSTS))
        verify(view.hideLoading()).called()
    })

    const POSTS: string[] = ['']
    const SEARCH_TEXT = ''

    const view = mock<HomeView>()
    const searchPosts = mock<SearchPosts>()
    const presenter = new HomePresenter(instance(view), instance(searchPosts))
})
