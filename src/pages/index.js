import React from "react"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Map from "../components/map"
import HomeCarousel from "../components/homeCarousel"
import Programs from "../components/programs"
import Classes from "../components/classes"
import Testimonials from "../components/testimonials"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`biomedical equipment`, `education`, `technology`]}
    />
    <HomeCarousel />
    <Container>
      <Map />
    </Container>
    <Programs />
    <Classes />
    <Testimonials />
  </Layout>
)

export default IndexPage
