import React from "react"
import styled from "styled-components"

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const TitleBold = styled(Title)`
  font-size: 2.5em;
  font-weight: bold;
  color: ${props => (props.primary ? "black" : "red")};
  &:hover {
    text-shadow: 2px 2px black;
    cursor: pointer;
  }
`

const Wrapper = styled.section`
  padding: 4em;
  background: ${props => (props.primary ? "white" : "papayawhip")};
  font-family: Lato, sans-serif;
`

const Exemplo03 = () => {
  return (
    <Wrapper primary>
      <TitleBold primary>Utilização de pseudo elementos (hover)</TitleBold>
    </Wrapper>
  )
}

export default Exemplo03
