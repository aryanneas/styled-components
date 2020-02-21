import React from "react"
import styled from "styled-components"

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const Wrapper = styled.section`
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #333;
  font-weight: bold;
  background-color: antiquewhite;
`

const Exemplo01 = () => {
  return (
    <Wrapper>
      <Title>Estilizando components</Title>
    </Wrapper>
  )
}

export default Exemplo01
