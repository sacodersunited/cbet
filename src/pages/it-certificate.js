import React from "react"
import LayoutDetail from "../components/layoutDetail"
import SEO from "../components/seo"
import BackgroundGraphicHeader from "../components/BackgroundGraphicHeader"
import ITCertificateStaticQuery from "../components/ITCertficiateStaticQuery"

const Programs = () => (
  <LayoutDetail>
    <SEO
      title="CompTIA IT Certifications Available"
      description="The College Of
Biomedical Equipment Technology offers compTIA IT certifications. Visit our website to
view our courses and get started!"
    />
    <BackgroundGraphicHeader
      bgFullImageName="it-bg.jpg"
      title="IT & Networking Courses"
    />
    <ITCertificateStaticQuery />
  </LayoutDetail>
)

export default Programs
