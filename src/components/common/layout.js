import React from "react"
import styled from "styled-components"
import Navigation from "./Navigation"
import Footer from "./Footer"
import { Helmet } from "react-helmet"
import "../../utils/normalize.css"
import "../../utils/app.css"

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
`

const Layout = ({ children, location }) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Greenslopes Respiratory</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather&family=Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Container>
        <header>
          <Navigation />
        </header>
        <main>{children}</main>
      </Container>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
