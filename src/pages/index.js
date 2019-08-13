import React from "react"
import Slide from "react-reveal/Slide"
import Layout from "../components/layout"
import SEO from "../components/seo"
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
    <Programs />
    <Slide right>
      <Classes />
    </Slide>
    <Testimonials />
  </Layout>
)

export default IndexPage
