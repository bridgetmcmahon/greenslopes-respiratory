import styled from "styled-components"
import { md, lg } from "../utils/breakpoints"

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 96rem;
  padding: 1rem;

  @media ${md} {
    padding: 2rem;
  }

  @media ${lg} {
    padding: 5rem;
  }
`