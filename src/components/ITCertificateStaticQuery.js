import React from "react"
import { StaticQuery, graphql } from "gatsby"
import ITCertificate from "./ITCertificate"

const ITCertificateStaticQuery = () => (
  <StaticQuery
    query={graphql`
      {
        itimg: file(relativePath: { eq: "itDegree/it-rt-column.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 900, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        aplusimg: file(relativePath: { eq: "itDegree/it-2.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 360, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        networkimg: file(relativePath: { eq: "itDegree/it-1.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 360, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <ITCertificate images={data} />}
  />
)
export default ITCertificateStaticQuery
