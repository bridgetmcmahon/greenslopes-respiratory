import React from "react"
import styled from "styled-components"
import { useStaticQuery } from "gatsby"
import { md } from "../../../utils/breakpoints"
import { primaryBlue, orange } from "../../../utils/colours"

const Container = styled.div`
  margin: 6rem 0 0 0;
  width: 100%;
  text-align: center;
  height: 16rem;
  background-color: ${primaryBlue};
  background-image: url(${props => props.backgroundImage.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  h1 {
    align-self: center;
    color: white;
    margin-top: 1rem;
    text-decoration: underline;
    text-decoration-color: #abc7ee;
    line-height: 1.3;
  }

  @media ${md} {
    height: 20rem;
  }
`

const Overlay = styled.div`
  background-color: rgba(87, 142, 221, 0.92);
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
`

const Header = ({ text }) => {
  const data = useStaticQuery(graphql`
    query background {
      background: file(relativePath: { eq: "bne.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container backgroundImage={data.background.childImageSharp.fluid}>
      <Overlay>
        <h1>{text}</h1>
      </Overlay>
    </Container>
  )
}

export default Header
