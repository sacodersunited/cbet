import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BmetCertificate from "./BmetCertificate"

const BmetCertStaticQuery = props => (
  <StaticQuery
    query={graphql`
      {
        bmettech: file(relativePath: { eq: "bmet-tech.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 952, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bmet3: file(relativePath: { eq: "bmetDegree/bmet-3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 952, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bIsham: file(relativePath: { eq: "team/brentIsham.jpg" }) {
          childImageSharp {
            fixed(height: 348, width: 348, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <BmetCertificate images={data} />}
  />
)
export default BmetCertStaticQuery
