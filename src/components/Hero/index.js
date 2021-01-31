import React from "react"
import styled, { keyframes } from "styled-components"
import { md } from "../../utils/breakpoints"
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
  width: 100%;
  height: calc(100vh - 9rem);
  background-image: url(${background});
  background-position: center;
  padding: 1rem;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: white;
    font-size: 2.5rem;
    animation-delay: 1s;
    animation-iteration-count: 1;
    animation-duration: 800ms;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    animation-name: ${clipText};
    cursor: default;
  }

  p {
    color: white;
    font-weight: 600;
    animation-delay: 2s;
    animation-iteration-count: 1;
    animation-duration: 800ms;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    animation-name: ${clipText};
    cursor: default;
    max-width: 25rem;
    margin: 0 auto;
  }

  @media ${md} {
    padding: 2rem;
    height: calc(100vh - 13.7rem);
  }
`

const Hero = () => {
  return (
    <Background>
      <h1>Greenslopes Respiratory & Sleep Centre</h1>
      <p>
        for expert consultation in the field of Respiratory and Sleep Medicine
        est. 2002
      </p>
    </Background>
  )
}

export default Hero
