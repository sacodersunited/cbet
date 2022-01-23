import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "react-bootstrap"
import { Widget } from "@typeform/embed-react"
import pdfApplication from "../documents/CBET.Enrollment.Application_11.15.2021.pdf"

export default function Application() {
  return (
    <Layout>
      <Container>
        <SEO title="Apply to CBET today" />
        <h1 className="m-5">Admissions Application</h1>
        <Widget id="U728qZwy" style={{ width: "100%" }} height={800} />
        <p className="mt-5">
          Click <a href={pdfApplication}>here</a> to download a PDF application
          and submit to{" "}
          <a href="mailto:admissiondept@cbet.edu">admissiondept@cbet.edu</a>
        </p>
      </Container>
    </Layout>
  )
}
