import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Accreditations from "./accreditations"

const AccreditationsStaticQuery = () => (
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
      }
    `}
    render={(data) => <Accreditations images={data} />}
  />
)
export default AccreditationsStaticQuery
