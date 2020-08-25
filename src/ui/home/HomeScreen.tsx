import React, {FormEvent} from 'react'
import './Home.scss'
import styled from 'styled-components'
import {Search} from '../components/Search'
import {HomePresenter, HomeView} from './HomePresenter'
import {Provider} from '../../core/Provider'
import {Post} from '../../core/domain/post/Post'

function PostComponent(props: { post: Post }) {

    // tslint:disable-next-line:no-shadowed-variable
    const Container = styled.div`
  background-color: white;
  margin: 10px;
  height: 300px;
  width: 250px;
  flex-wrap: wrap;
  overflow: hidden;
  padding: 10px;
`
    const Image = styled.img`
      background-color: green;
      height: 50%;
      min-width: 100%;
`
    return <Container>
        <Image/>
        <div>{props.post.title}</div>
        <div>{props.post.author} - {props.post.date.toLocaleString()}</div>
        <div>{props.post.content}</div>
    </Container>
}

export class HomeScreen extends React.Component<any, State> implements HomeView {
    private presenter: HomePresenter
    state = {
        posts: [],
    }

    constructor(props: any) {
        super(props)
        this.presenter = new HomePresenter(this, Provider.searchPosts())
    }

    onComponentDidMount() {
        this.presenter.start()
    }

    handleInput = (e: FormEvent<HTMLInputElement>) => {
        const searchText = e.currentTarget.value
        this.presenter.search(searchText)
    }

    render() {
        return (
            <Container>
                <Header>
                    <Search onInput={this.handleInput}/>
                </Header>
                <Main>
                    {this.state.posts.map((post: Post) => <PostComponent key={post.title} post={post}/>)}
                </Main>
                <Left>Left</Left>
                <Right>Right</Right>
                <Footer>Footer</Footer>
            </Container>
        )
    }

    renderPosts = (posts: Post[]) => {
        this.setState({posts})
    }

    showLoading(): void {
        this.setState({posts: []})
    }

    hideLoading(): void {
        // tslint:disable-next-line:no-console
        console.log('hide loading')
    }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media all and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

const Header = styled.header`
  background: orange;
  display: flex;
  justify-content: center;
  height: 50px;
  @media all and (min-width: 768px) {
    width: 100%;
  }
`

const Left = styled.aside`
  background: yellowgreen;
  display: none;
  @media all and (min-width: 768px) {
    order: 1;
    flex: 1;
  }
`

const Main = styled.main`
  background: red;
  display: flex;
  flex-wrap: wrap;
  @media all and (min-width: 768px) {
    flex: 2;
    order: 2;
    min-height: 80vh;
  }
`

const Right = styled.aside`
  background: blue;
  @media all and (min-width: 768px) {
    order: 3;
    flex: 1;
  }
`

const Footer = styled.footer`
  background: pink;
  @media all and (min-width: 768px) {
    width: 100%;
    order: 4;
  }
`

interface State {
    posts: Post[]
}
