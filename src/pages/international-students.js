import React from "react"
import LayoutDetail from "../components/layout"
import SEO from "../components/seo"
import BackgroundGraphicHeader from "../components/BackgroundGraphicHeader"
import InternationalStudentsStaticQuery from "../components/InternationalStudentsStaticQuery"

const InternationalStudents = () => (
  <LayoutDetail>
    <SEO title="International Students" />
    <BackgroundGraphicHeader
      bgFullImageName="intl-students-bg.jpg"
      title="International Students"
    />
    <InternationalStudentsStaticQuery />
  </LayoutDetail>
)

export default InternationalStudents
