import React from "react"
import { useStaticQuery } from "gatsby"
import { Container, Overlay} from "./styles"

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
