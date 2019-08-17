import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Partners from "./partners"

const PartnersStaticQuery = props => (
  <StaticQuery
    query={graphql`
      {
        technation: file(relativePath: { eq: "TechNation_logo.png" }) {
          childImageSharp {
            fluid(maxHeight: 94, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tfclogo: file(relativePath: { eq: "tfc_logo.png" }) {
          childImageSharp {
            fluid(maxHeight: 51, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stephens: file(relativePath: { eq: "si-recruiting.png" }) {
          childImageSharp {
            fluid(maxHeight: 96, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        cerlogo: file(relativePath: { eq: "cer-logo.png" }) {
          childImageSharp {
            fluid(maxHeight: 138, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Partners images={data} />}
  />
)
export default PartnersStaticQuery
