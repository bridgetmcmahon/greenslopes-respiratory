import React from "react"
import styled, { keyframes } from "styled-components"
import { useStaticQuery } from "gatsby"
import Particles from "react-particles-js"
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons"
import { lg } from "../../utils/breakpoints"
import { Button } from "../../utils/sharedStyles"
import { primaryBlue, lightGrey, aqua } from "../../utils/colours"
import whiteLogo from "../../images/grs_logo_white.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const clipText = keyframes`
  from {
    clip-path: inset(0 100% 0 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
`

const Background = styled.div`
  margin-top: 6rem;
  width: 100%;
  height: calc(100vh - 18rem);
  min-height: 36rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background-image: url(${props => props.backgroundImage.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  div:nth-of-type(2),
  h1,
  h2,
  p,
  small {
    color: white;
    animation-iteration-count: 1;
    animation-duration: 800ms;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    animation-name: ${clipText};
    cursor: default;
  }

  h1 {
    max-width: 90%;
    animation-delay: 0.3s;
    margin-bottom: 0;
    margin-top: 0;
    line-height: 1.3;
    font-weight: 600;

    span {
      font-size: 1.8rem;
      white-space: nowrap;
      font-style: italic;
      padding-right: 0.4rem;
    }
  }

  h2 {
    animation-delay: 0.6s;
    font-family: "Open Sans";
    font-size: 2rem;
    font-style: italic;
    margin-top: 1rem;
    color: white;
    display: inline-block;
  }

  p {
    font-weight: 600;
    animation-delay: 1.5s;
    margin-top: 1rem;
    padding-bottom: 0.5rem;
    max-width: 90%;
    line-height: 1.3;
  }

  small {
    display: inline-block;
    font-weight: 600;
    font-size: 1.4rem;
    font-style: italic;
    color: white;
    padding-right: 5px;
    margin-bottom: 0.4rem;
    animation-delay: 2s;
  }

  @media ${lg} {
    padding: 3rem;
    height: calc(100vh - 18rem);
  }
`

const Overlay = styled.div`
  background-color: rgba(87, 142, 221, 0.92);
  width: 100%;
  height: 100%;
  padding: 2rem;
  /* display: flex; */
  /* justify-content: center; */
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 2rem;

  img {
    max-height: 10rem;
    max-width: 10rem;
  }
`

const Inner = styled.div`
  max-width: 90rem;
  margin: 0 auto;
`

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
      {/* <Particles
        params={{
          particles: {
            color: "#fff",
            size: {
              random: true,
              value: 5,
            },
            links: {
              enable: false,
            },
            fpsLimit: 45,
          },
          background: {
            color: primaryBlue,
          },
        }}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      /> */}
      <Content>
        <Inner>
        <img src={whiteLogo} alt="GRS logo" />
        <h1>
          Greenslopes
          <br />
          Respiratory & Sleep Centre <span>est 2002</span>
        </h1>
        <h2>
          for expert consultation in the field of Respiratory and Sleep Medicine
        </h2>
        <Button to={"/our-specialist-physicians"}>
          Our specialists who care
          <FontAwesomeIcon icon={faChevronCircleRight} style={{ marginLeft: "1rem" }} />
        </Button>
        </Inner>
      </Content>
      </Overlay>
    </Background>
  )
}

export default Hero
