import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BmetCertificate from "./BmetCertificate"

const BmetCertStaticQuery = props => (
  <StaticQuery
    query={graphql`
      {
        bmettech: file(relativePath: { eq: "BMET-certificate1.png" }) {
          childImageSharp {
            fluid(maxWidth: 952, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        bmet3: file(relativePath: { eq: "certificate-program2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 952, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        bIsham: file(relativePath: { eq: "team/brentIsham2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        bmetcerttech: file(
          relativePath: { eq: "images/BMET-Certificate-1.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 640, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <BmetCertificate images={data} />}
  />
)
export default BmetCertStaticQuery
