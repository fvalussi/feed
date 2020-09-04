import React from 'react'
import { Post } from '../../core/domain/post/Post'
import styled from 'styled-components'

const PostComponent = (props: {post: Post}) => {
    const {Card, Image, Title, Author, Description, Content} = createLayout()

    return (
        <Card>
            <Image/>
            <Content>
                <Title>{props.post.title}</Title>
                <Description>{props.post.content}</Description>
            </Content>
            <Author>{props.post.author} - {props.post.date.toLocaleString()}</Author>
        </Card>
    )
}

function createLayout() {
    const Card = styled.div`
display: flex;
flex-direction: column;
      background-color: white;
      margin: 10px;
      height: 300px;
      width: 250px;
      overflow: hidden;
      padding: 10px;
`
    const Image = styled.img`
flex: 1;
      background-color: green;
      min-height: 150px;
      max-height: 150px;
      min-width: 100%;
`
    const Title = styled.div`
      font-size: large;
      color: mediumaquamarine;
`
    const Description = styled.div`
      max-height: 110px;
      //text-overflow: ellipsis;
      //white-space: nowrap;
      //overflow: hidden;
`
    const Author = styled.div`
flex: 1;
flex-basis: min-content;
align-self: end;
font-size: small;
max-height: 20px;
`

    const Content = styled.div`
      flex: 1;
      flex-basis: max-content;
      overflow-y: scroll;
`
    return {Card, Image, Title, Description, Author, Content}
}

export default PostComponent
