import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Background, Overlay, Content, Inner, HorizontalRule } from "./styles"
import WhiteLogo from "../../images/grs_logo_white.png"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query hero {
      hero: file(relativePath: { eq: "bne.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

return (
    <Background backgroundImage={data.hero.childImageSharp.fluid}>
      <Overlay>
        <Content>
          <Inner>
            <img src={WhiteLogo} alt="GRS logo" />
            <h1>
              Greenslopes
              <br />
              Respiratory & Sleep Centre
            </h1>
            <HorizontalRule />
            <h2>Specialists who care</h2>
            <p>
              for expert consultation in the field of Respiratory and Sleep
              Medicine
            </p>
          </Inner>
        </Content>
      </Overlay>
    </Background>
  )
}

export default Hero
