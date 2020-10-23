import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

// Responsive Iframes
// https://benmarshall.me/responsive-iframes/
const IframeContainer = styled.div`
  overflow: hidden;
  // Calculated from the aspect ration of the content (in case of 16:9 it is 9/16= 0.5625)
  padding-top: 56.25%;
  position: relative;

  iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`

export default function catalog() {
  return (
    <Layout>
      <SEO title="CBET Course Catalog" />
      <IframeContainer>
        <iframe
          title="Course Catalog"
          src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=fxu8o9jug"
          allowFullScreen
        />
      </IframeContainer>
    </Layout>
  )
}
