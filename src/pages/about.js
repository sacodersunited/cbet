import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>Hi from the About Us</h1>
    <p>Welcome to About Us</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
