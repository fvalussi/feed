import React, { useState } from 'react'
import styled from 'styled-components'

export const Counter: React.FC<Props> = ({initial = 0}) => {
    const [count, setCount] = useState(initial)
    const reset = () => setCount(initial)
    const increment = () => setCount((prevCount: any) => prevCount + 1)
    const decrement = () => setCount((prevCount: any) => prevCount - 1)

    return (
        <Container>
            <Text>Count: {count}</Text>
            <br/>
            <Button onClick={reset}>Reset</Button>
            <Button onClick={decrement}>-</Button>
            <Button onClick={increment}>+</Button>
        </Container>
    )
}

interface Props {
    initial?: number
}

const Container = styled.div`
  display: inline-block;
  border: solid 2px red;
  padding: 2px;
`

const Text = styled.div`
  color: blue;
  text-align: center;
`

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #3792db;
  color: #0b0fdb;
  margin: 0 1em;
  padding: 0.25em 1em;
`
