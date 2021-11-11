import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Accreditations from "./accreditations"

const AccreditationsStaticQuery = () => (
  // TODO: Refactor to bring in all images from accredidations directory rather than individually adding them
  // TODO: Add svg support, like in this gh-issue https://github.com/gatsbyjs/gatsby/issues/10297
  <StaticQuery
    query={graphql`
      {
        vetlogo: file(relativePath: { eq: "vet-owned.png" }) {
          childImageSharp {
            fluid(maxHeight: 180, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        twclogo: file(relativePath: { eq: "twc-logo.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 180, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        txhigher: file(relativePath: { eq: "TXHigherEd.png" }) {
          childImageSharp {
            fluid(maxWidth: 242, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        ncLogo: file(relativePath: { eq: "NC_SARA_Seal.png" }) {
          childImageSharp {
            fluid(maxHeight: 180, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        bppeLogo: file(relativePath: { eq: "bppe_logo.png" }) {
          childImageSharp {
            fluid(maxHeight: 180, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        hireVetsLogo: file(relativePath: { eq: "HireVets.png" }) {
          childImageSharp {
            fluid(maxHeight: 128, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={(data) => <Accreditations images={data} />}
  />
)
export default AccreditationsStaticQuery
