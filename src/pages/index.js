import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import Image from "../components/image"
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
    <Classes />
    <Testimonials />
  </Layout>
)

export default IndexPage
