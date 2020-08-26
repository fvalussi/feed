import React from 'react'
import {Post} from '../../core/domain/post/Post'
import styled from 'styled-components'

const PostComponent = (props: { post: Post }) => {
    const {Container, Image} = createLayout()

    return (
        <Container>
            <Image/>
            <div>{props.post.title}</div>
            <div>{props.post.author} - {props.post.date.toLocaleString()}</div>
            <div>{props.post.content}</div>
        </Container>
    )
}

function createLayout() {
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
    return {Container, Image}
}

export default PostComponent
