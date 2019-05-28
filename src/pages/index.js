import React from "react"
import { Container } from "react-bootstrap"
import Slide from "react-reveal/Slide"
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
    {/* <Container style={{ minHeight: "300px" }}> */}
    {/* <Map /> */}
    {/* </Container> */}
    <Map />
    <Programs />
    <Slide right>
      <Classes />
    </Slide>
    <Testimonials />
  </Layout>
)

export default IndexPage
