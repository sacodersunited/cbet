import React from "react"
import Slide from "react-reveal/Slide"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeCarouselStaticQuery from "../components/HomeCarouselStaticQuery"
import Programs from "../components/programs"
// import Classes from "../components/classes"
import Testimonials from "../components/testimonials"
import HomeClassesStaticQuery from "../components/HomeClassesStaticQuery"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Online Biomedical Technology School"
      description="The College
      Of Biomedical Equipment Technology offers Online Biomedical Training. Visit our
      website to get more information and apply today!"
      keywords={[`biomedical equipment`, `education`, `technology`, `cbet`]}
    />
    <HomeCarouselStaticQuery />
    <Programs />
    <Slide right>
      <HomeClassesStaticQuery />
    </Slide>
    <Testimonials />
  </Layout>
)

export default IndexPage
