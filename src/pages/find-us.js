import React from "react"
import { useStaticQuery } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilePdf } from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/common/layout"
import Header from "../components/common/Header"
import { primaryBlue, secondaryBlue } from "../utils/colours"
import { md } from "../utils/breakpoints"
import { Container } from "../utils/sharedStyles"
import map from "../images/gph_building_map.png"

const SplitContainer = styled.div`
  @media ${md} {
    display: flex;
    justify-content: space-around;

    div {
      flex: 1 1 0;
    }
  }
`

const ContactItem = styled.div`
  padding: 0.5rem 0;
  margin-left: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    display: inline-block;
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

const Download = styled.a`
  color: ${primaryBlue};
  display: block;

  svg {
    font-size: 2rem;
    margin-right: 1rem;
  }

  &:hover {
    cursor: pointer;
  }
`

const GoogleMap = styled.iframe`
  width: 100%;
  height: 32rem;
  margin-bottom: -0.7rem;
  border-bottom: 3px solid ${primaryBlue};
`

const HR = styled.div`
  height: 3px;
  width: 100%;
  margin: 2rem auto;
  background-color: ${secondaryBlue};
`

export default function FindUs({ location }) {
  const data = useStaticQuery(graphql`
    {
      gphMap: file(name: { eq: "gph_administration_building_location_map" }) {
        publicURL
      }
    }
  `)

  return (
    <Layout location={location}>
      <Header text="Find us" />
      <Container>
        <SplitContainer>
          <HospitalMap src={map} alt="Greenslopes Private Hospital map" />
          <ContactItem>
            <p>
              Suite 3a Administration Building (near Emergency Centre)
              <br />
              Greenslopes Private Hospital
              <br />
              Newdegate St
              <br />
              Greenslopes 4120
              <br />
            </p>
            <Download
              href={data.gphMap.publicURL}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFilePdf} />
              Download the map
            </Download>
          </ContactItem>
        </SplitContainer>
        <HR />
        <p>
          Parking is readily available on site, and closest is Orange car park,
          up to $25 Enter Gate 1 off Newdegate St, directly opposite Hunter St,
          near Emergency Centre. Do not access GPH through the Main entrance
          further up the hill. There is limited free on-street parking in
          surrounding streets.
        </p>
        <p>
          Use Administration entrance at the pedestrian crossing from Orange car
          park in to GPH and then turn left down the corridor towards Emergency
          Centre and Sleep Lab. We are the first consulting rooms on the left.
        </p>
      </Container>
      <GoogleMap
        width="450"
        height="250"
        frameBorder="0"
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GATSBY_GOOGLE_MAPS_API_KEY}&q=place_id:ChIJCY8QOPZakWsRAKsg11ujAg8`}
      />
    </Layout>
  )
}
