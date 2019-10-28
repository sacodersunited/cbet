import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Accreditations from "./accreditations"

const AccreditationsStaticQuery = props => (
  <StaticQuery
    query={graphql`
      {
        twclogo: file(relativePath: { eq: "twc-logo.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 242, quality: 100) {
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
      }
    `}
    render={data => <Accreditations images={data} />}
  />
)
export default AccreditationsStaticQuery

// txhighered: file(relativePath: { eq: "TXHigherEd.png" }) {
//   childImageSharp {
//     fluid(maxWidth: 242, quality: 100) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }
