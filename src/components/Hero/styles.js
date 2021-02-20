import styled, { keyframes } from "styled-components"
import { secondaryBlue } from "../../utils/colours"

const clipText = keyframes`
  from {
    clip-path: inset(0 100% 0 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
`

export const Background = styled.div`
  margin-top: 6rem;
  width: 100%;
  height: calc(100vh - 18rem);
  min-height: 36rem;
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
    font-family: "Montserrat";
    text-transform: uppercase;
    font-weight: 600;
    padding-right: 1rem;
    font-size: 2.5rem;
    margin-top: 1rem;
    color: ${secondaryBlue};
    font-weight: 600;
    letter-spacing: 1.1px;
    display: inline-block;
  }
  
  p {
    font-style: italic;
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
`

export const Overlay = styled.div`
  background-color: rgba(87, 142, 221, 0.92);
  width: 100%;
  height: 100%;
  padding: 2rem;
`

export const Content = styled.div`
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

export const Inner = styled.div`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
`

export const HR = styled.div`
  height: 0.5rem;
  width: 80%;
  background-color: ${secondaryBlue};
`