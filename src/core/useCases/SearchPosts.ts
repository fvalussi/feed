import {Post} from '../domain/post/Post'

export class SearchPosts {
    execute(searchText: string): Promise<Post[]> {
        const post1 = new Post('Title',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt elit eros, elementum commodo urna rutrum et. Mauris in sem et dui ultricies elementum gravida vel dui. Suspendisse quis suscipit diam, et ullamcorper ex. Sed mollis dui ut neque sollicitudin, a eleifend tortor sodales.',
            new Date(),
            'Michael')
        const post2 = new Post('Title',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt elit eros, elementum commodo urna rutrum et. Mauris in sem et dui ultricies elementum gravida vel dui. Suspendisse quis suscipit diam, et ullamcorper ex. Sed mollis dui ut neque sollicitudin, a eleifend tortor sodales.',
            new Date(),
            'Michael')

        const results = [post1, post2, post2, post2, post2]

        return Promise.resolve(results)
    }
}
