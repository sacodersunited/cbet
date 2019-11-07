import React from "react"
import { StaticQuery, graphql } from "gatsby"
import ITCertificate from "./ITCertificate"

const ITCertificateStaticQuery = () => (
  <StaticQuery
    query={graphql`
      {
        networking: file(relativePath: { eq: "itDegree/networking-I.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 585, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        plus: file(relativePath: { eq: "itDegree/it-2.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 400, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => <ITCertificate images={data} />}
  />
)
export default ITCertificateStaticQuery
