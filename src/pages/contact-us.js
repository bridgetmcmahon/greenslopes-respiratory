import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faFax,
  faPhone,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/common/layout"
import Header from "../components/common/Header"
import { primaryBlue } from "../utils/colours"
import { Container } from "../utils/sharedStyles"

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

const Map = styled.iframe`
  width: 100%;
`

const Icon = styled(FontAwesomeIcon)`
  font-size: 1.4rem;
  color: ${primaryBlue};
  margin-right: 0.5rem;
`

export default function ContactUs({ location }) {
  return (
    <Layout location={location}>
      <Header text="Contact us" />
      <Container>
        <ContactItem>
          <Icon icon={faEnvelope} />
          <p>
            <a href="mailto:admin@grscentre.com.au">admin@grscentre.com.au</a>
          </p>
        </ContactItem>
        <ContactItem>
          <Icon icon={faFax} />
          <p>07 33971499</p>
        </ContactItem>
        <ContactItem>
          <Icon icon={faPhone} />
          <p>07 33971488 | 07 33947597</p>
          <small>*expect to have to leave a message</small>
        </ContactItem>
        <p>
          One of our wonderful and hard working admin staff will return your
          call as soon as possible
        </p>
        <img src="https://picsum.photos/380/200" />
        <hr />
        <h2>Find us</h2>
        <ContactItem>
          <Icon icon={faMapMarkedAlt} />
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
        </ContactItem>
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
      <Map
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
