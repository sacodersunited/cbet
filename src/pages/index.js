import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Map from "../components/map"
const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`biomedical equipment`, `education`, `technology`]}
    />
    <Container>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Map />
    </Container>
  </Layout>
)

export default IndexPage
