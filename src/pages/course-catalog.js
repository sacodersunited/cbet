import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import BackgroundGraphicHeader from "../components/BackgroundGraphicHeader"

const FaqContainer = styled.div`
  background-color: #f8f9fa;
`

const Faq = () => (
  <Layout>
    <SEO title="Faq" />
    <BackgroundGraphicHeader
      title="College of Biomedical Equipment Technology - Course Catalog"
      bgFullImageName="bmet-logo3.jpg"
    />

    <FaqContainer>
      <div className="container">
        <iframe
          title="Cbet Catalog"
          src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=fxu8o9jug"
          width="100%"
          height="900"
          seamless="seamless"
          scrolling="no"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </FaqContainer>
  </Layout>
)

export default Faq
