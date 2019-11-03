import React from "react"
// import { Link } from "gatsby"
import LayoutDetail from "../components/layoutDetail"
import SEO from "../components/seo"
// import {
// Container,
//   Row,
//   Col,
//   Button,
//   Image,
//   ButtonToolbar,
// } from "react-bootstrap"
// import styled from "styled-components"
// import Fade from "react-reveal/Fade"
// import Slide from "react-reveal/Slide"
// import ITImg from "../images/itDegree/networking-I.jpg"
// import ITAPlusImg from "../images/itDegree/it-2.jpg"
// import ITNetworkImg from "../images/itDegree/it-1.jpg"
// import StudentCatalog from "../documents/CBET Course Catalog_Volume XVI_October 2019.pdf"
import BackgroundGraphicHeader from "../components/BackgroundGraphicHeader"
import ITCertificateStaticQuery from "../components/ITCertficiateStaticQuery"

// const ProgramDetail = styled.div`
//   padding: 46px 0 46px 40px;
//   color: white;
// `
const Programs = () => (
  <LayoutDetail>
    <SEO
      title="CompTIA IT Certifications Available"
      description="The College Of
Biomedical Equipment Technology offers compTIA IT certifications. Visit our website to
view our courses and get started!"
    />
    <BackgroundGraphicHeader page="it-bg.jpg" title="IT & Networking Courses" />
    <ITCertificateStaticQuery />
  </LayoutDetail>
)

export default Programs
