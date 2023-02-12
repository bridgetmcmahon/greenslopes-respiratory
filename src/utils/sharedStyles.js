import styled from "styled-components"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { sm, md, lg } from "../utils/breakpoints"
import { secondaryBlue } from "../utils/colours"

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 96rem;
  padding: 2rem;
  overflow-x: hidden;

  @media ${lg} {
    padding: 3rem;
  }
`

export const HorizontalRule = styled.div`
  height: 3px;
  width: 100%;
  max-width: 20rem;
  background-color: ${secondaryBlue};
  margin: 2rem auto;

  @media ${md} {
    margin: 3rem auto;
  }
`

export const TeamImage = styled(Img)`
  width: 14rem;
  height: 14rem;
  border-radius: 100%;
  box-shadow: 2px 2px 10px #cccccc;
`

export const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  bottom: ${props => props.bottom};
  right: -3rem;
  font-size: 20rem;
  color: #f4f4f4;
  z-index: -1;
  overflow: hidden;

  @media ${sm} {
    font-size: 30rem;
    right: -4rem;
  }

  @media ${md} {
    font-size: 40rem;
    right: -5rem;
  }
`