import React, {FormEvent} from 'react'
import styled from 'styled-components'

export const Search: React.FC<Props> = (props) => {
    return (
        <Container>
            <Icon/>
            <Input type={'text'} onInput={props.onInput}/>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    flex-direction: row;
    background-color: greenyellow;
    width: 90%;
    margin: 10px;
    @media all and (min-width: 768px) {
      width: 30%;
    }
`
const Input = styled.input`
    outline: none;
    border: none;
    padding: 5px;
    flex: 1;
`
const Icon = styled.i`
    min-width: 40px;
    background-color: pink;
`

interface Props {
    onInput: (e: FormEvent<HTMLInputElement>) => void
}
