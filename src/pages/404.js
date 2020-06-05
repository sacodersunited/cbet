import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "react-bootstrap"
import UseScript from "../hooks/use-scripts"

export default function NotFoundPage() {
  // copied from stackoverflow, do not trust
  // https://stackoverflow.com/questions/34424845/adding-script-tag-to-react-jsx
  UseScript("https://cbet.quickschools.com/sms/es/enquiry?divId=enquiry-form")
  return (
    <Layout>
      <Container>
        <SEO title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <div id="enquiry-form" />
      </Container>
    </Layout>
  )
}
