import React from "react"
import styled from "styled-components"
import { gunmetalGrey } from "../../../utils/colours"
import background from "../../../images/triangle-background.png"
import { md } from "../../../utils/breakpoints"

const Container = styled.div`
  margin: 0;
  padding: 1rem;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  height: 12rem;
  display: flex;
  justify-content: center;
  background-image: url(${background});
  background-position: left;
  background-size: cover;
  background-repeat: no-repeat;

  h1 {
    align-self: center;
    color: white;
  }

  @media ${md} {
    padding: 2rem;
    height: 20rem;
  }
`

const Header = ({ text }) => {
  return (
    <Container>
      <h1>{text}</h1>
    </Container>
  )
}

export default Header
