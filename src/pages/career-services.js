import React from "react"
import SEO from "../components/seo"
import LayoutDetail from "../components/layout"
import BackgroundGraphicHeader from "../components/BackgroundGraphicHeader"
import CareerServicesStaticQuery from "../components/CareerServicesStaticQuery"

const CareerServices = () => (
  <LayoutDetail>
    <SEO title="Career Services" />
    <BackgroundGraphicHeader title="Careers" bgFullImageName="career-bg.jpg" />
    <CareerServicesStaticQuery />
  </LayoutDetail>
)

export default CareerServices
