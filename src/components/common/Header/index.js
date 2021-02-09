import React from "react"
import styled from "styled-components"
import { md } from "../../../utils/breakpoints"
import { primaryBlue } from "../../../utils/colours"

const Container = styled.div`
  margin: 6rem 0 0 0;
  padding: 2rem;
  width: 100%;
  text-align: center;
  height: 16rem;
  display: flex;
  justify-content: center;
  background-color: ${primaryBlue};

  h1 {
    align-self: center;
    color: white;
    margin-top: 1rem;
    text-decoration: underline;
    text-decoration-color: #ABC7EE;
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
