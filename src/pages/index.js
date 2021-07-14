import React, { useState } from "react"
import Slide from "react-reveal/Slide"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import HomeCarouselStaticQuery from "../components/HomeCarouselStaticQuery"
import Programs from "../components/programs"
import TestimonialStaticQuery from "../components/TestimonialStaticQuery"
import HomeClassesStaticQuery from "../components/HomeClassesStaticQuery"
import { Alert, Button } from "react-bootstrap"

function CovidAlert() {
  const [show, setShow] = useState(true)
  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <div className="container">
          <Alert.Heading>
            Special Notice Concerning the Global COVID-19 Pandemic
          </Alert.Heading>
          For important updates and information from CBET visit the{" "}
          <Link to="/financial-assistance" className="alert-link">
            financial page link
          </Link>
          {` `} and {` `}
          <Alert.Link
            className="alert-link"
            target="_blank"
            without="true"
            rel="noreferrer"
            href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"
          >
            CDC and Prevention.
          </Alert.Link>
        </div>
      </Alert>
    )
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>
}

const IndexPage = () => (
  <Layout>
    <SEO
      title="Online Biomedical Technology School"
      description="The College
      Of Biomedical Equipment Technology offers Online Biomedical Training. Visit our
      website to get more information and apply today!"
      keywords={[`biomedical equipment`, `education`, `technology`, `cbet`]}
    />
    <CovidAlert />
    <HomeCarouselStaticQuery />
    <Programs />
    <Slide right>
      <HomeClassesStaticQuery />
    </Slide>
    <TestimonialStaticQuery />
  </Layout>
)

export default IndexPage
