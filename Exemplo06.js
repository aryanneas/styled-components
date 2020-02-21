import React from "react"
import SpanComponent from "../SpanComponent/SpanComponent"

const Exemplo06 = () => (
  <>
    <h1>Mudando uma tag dinâmicamente</h1>
    <SpanComponent as="a"> Agora isso é um link! </SpanComponent>
  </>
)

export default Exemplo06
