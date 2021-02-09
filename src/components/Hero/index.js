import React from "react"
import styled, { keyframes } from "styled-components"
import Particles from "react-particles-js"
import { md } from "../../utils/breakpoints"
import { primaryBlue, lightGrey } from "../../utils/colours"
import background from "../../images/triangle-background.png"

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
  height: calc(100vh - 14rem);
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  div:nth-of-type(2), h1, h2, p, small {
    color: white;
    animation-iteration-count: 1;
    animation-duration: 800ms;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    animation-name: ${clipText};
    cursor: default;
  }

  div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  h1 {
    max-width: 90%;
    animation-delay: 0.3s;
    margin-bottom: 0.2rem;

    span {
      font-size: 1.8rem;
    }
  }

  h2 {
    animation-delay: 0.6s;
    font-family: 'Open Sans';
    font-size: 3rem;
    font-style: italic;
    margin-top: 1rem;
    color: ${lightGrey};
    padding: 0 0.2rem;
  }

  p {
    font-weight: 600;
    animation-delay: 2s;
    margin: 1rem auto 0rem auto;
    padding-bottom: 0.5rem;
    max-width: 90%;
    line-height: 1.3;
  }

  small {
    display: inline-block;
    font-weight: 600;
    font-size: 1.4rem;
    font-style: italic;
    color: #e0d3de;
    padding-right: 5px;
    margin-bottom: 0.4rem;
    animation-delay: 2.2s;
  }

  @media ${md} {
    padding: 2rem;
    height: calc(100vh - 14rem);
  }
`

const HR = styled.div`
  width: 5rem;
  height: 2px;
  background-color: #E0D3DE;
  position: initial;
`

const Hero = () => {
  return (
    <Background>
      <Particles
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
          }
        }}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <div>
        <h1>
          Greenslopes
          <br />
          Respiratory & Sleep Centre{" "}
        </h1>
        <h2>Specialists who care</h2>
        <p>
          for expert consultation in the field of Respiratory and Sleep Medicine
        </p>
        <small><em>est 2002</em></small>
        {/* <small>est. 2002</small> */}
        {/* <HR /> */}
      </div>
    </Background>
  )
}

export default Hero
