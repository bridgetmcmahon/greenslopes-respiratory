import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/common/layout"

export default function Home({ location }) {
  return (
    <Layout location={location}>
      <Hero />
    </Layout>
  )
}
