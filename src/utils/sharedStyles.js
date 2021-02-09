import styled from "styled-components"
import { md, lg } from "../utils/breakpoints"
import { primaryBlue, secondaryBlue } from "../utils/colours"

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

export const HR = styled.div`
  height: 3px;
  width: 100%;
  max-width: 20rem;
  background-color: ${secondaryBlue};
  margin: 2rem auto;

  @media ${md} {
    margin: 3rem auto;
  }
`

export const TeamLink = styled.div`
  margin: 2rem auto 0 auto;
  width: 100%;
  font-size: 1.8rem;
  text-align: center;

  a {
    color: ${primaryBlue};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      text-decoration-color: ${secondaryBlue};
    }
  }

  @media ${md} {
    margin: 3rem auto 1rem auto;
  }

  @media ${lg} {
    margin-bottom: 0;
  }
`