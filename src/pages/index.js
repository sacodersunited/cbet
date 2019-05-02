import React from "react"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Map from "../components/map"
const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`biomedical equipment`, `education`, `technology`]}
    />
    <Container>
      <Map />
    </Container>
  </Layout>
)

export default IndexPage
