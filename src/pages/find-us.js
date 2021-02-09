import React from "react"
import styled from "styled-components"
import Layout from "../components/common/layout"
import Header from "../components/common/Header"
import { primaryBlue } from "../utils/colours"
import { md } from "../utils/breakpoints"
import { Container } from "../utils/sharedStyles"
import map from "../images/gph_building_map.png"

const SplitContainer = styled.div`
  @media ${md} {
    display: flex;
    justify-content: space-around;

    div {
      flex: 1 1 0;

      &:first-of-type {
        min-width: 55%;
        margin-right: 2rem;
      }
    }
  }
`

const ContactItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 0;

  p {
    display: inline-block;
    margin: 0.5rem 0;
  }

  a {
    text-decoration: none;
    color: ${primaryBlue};
  }
`

const HospitalMap = styled.img`
  &:hover {
    cursor: pointer;
  }

  @media ${md} {
    max-width: 40rem;
  }
`

const GoogleMap = styled.iframe`
  width: 100%;
  height: 32rem;
  margin-bottom: -1rem;
`

export default function FindUs({ location }) {
  return (
    <Layout location={location}>
      <Header text="Find us" />
      <Container>
        <SplitContainer>
          <div>
            <ContactItem>
              <p>
                Suite 3a Administration Building
                <br />
                (near Emergency Centre)
                <br />
                Greenslopes Private Hospital
                <br />
                Newdegate St
                <br />
                Greenslopes 4120
                <br />
              </p>
            </ContactItem>
            <HospitalMap src={map} alt="Greenslopes Private Hospital map" />
          </div>
          <div>
            <p>
              Parking is readily available on site, and closest is Orange car
              park, up to $25 Enter Gate 1 off Newdegate St, directly opposite
              Hunter St, near Emergency Centre. Do not access GPH through the
              Main entrance further up the hill. There is limited free on-street
              parking in surrounding streets.
            </p>
            <p>
              Use Administration entrance at the pedestrian crossing from Orange
              car park in to GPH and then turn left down the corridor towards
              Emergency Centre and Sleep Lab. We are the first consulting rooms
              on the left.
            </p>
          </div>
        </SplitContainer>
      </Container>
      <GoogleMap
        width="450"
        height="250"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDOQblyq2eUFRImZAFe6b0R0d3cgJXVUcs&q=place_id:ChIJCY8QOPZakWsRAKsg11ujAg8"
        allowFullScreen
      />
    </Layout>
  )
}