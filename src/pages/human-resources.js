import React from "react"
import LayoutDetail from "../components/layoutDetail"
import SEO from "../components/seo"
import BackgroundGraphicHeader from "../components/BackgroundGraphicHeader"
import HumanResourcesStaticQuery from "../components/HumanResourcesStaticQuery"

const HumanResources = () => (
  <LayoutDetail>
    <SEO title="human resources" />
    <BackgroundGraphicHeader bgFullImageName="about-bg.jpg" />
    <HumanResourcesStaticQuery />
  </LayoutDetail>
)

export default HumanResources
