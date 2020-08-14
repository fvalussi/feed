import React, { FormEvent, useState } from 'react'
import './Home.scss'
import styled from 'styled-components'

export const HomeScreen: React.FC = () => {
    const [searchText, setSearchText] = useState('')

    const handleInput = (e: FormEvent<HTMLInputElement>) => {
      setSearchText(e.currentTarget.value)
    }

    return (
        <Container>
            <Header>
                <input type={'text'} onInput={handleInput}/>
            </Header>
            <Main>{searchText.length > 0 ? searchText : 'Empty state'}</Main>
            <Left>Left</Left>
            <Right>Right</Right>
            <Footer>Footer</Footer>
        </Container>
    )
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
