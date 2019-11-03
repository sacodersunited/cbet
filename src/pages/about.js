import React from "react"
import LayoutDetail from "../components/layoutDetail"
import AboutStaticQuery from "../components/AboutStaticQuery"

const About = props => (
  <LayoutDetail>
    {console.log("about", props)}
    <AboutStaticQuery />
  </LayoutDetail>
)

export default About
