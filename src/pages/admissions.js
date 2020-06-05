import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AdmissionsFormStaticQuery from "../components/AdmissionsFormStaticQuery"

const Admissions = () => (
  <Layout isAdmission>
    <SEO title="Admissions" />
    <AdmissionsFormStaticQuery />
  </Layout>
)

export default Admissions
