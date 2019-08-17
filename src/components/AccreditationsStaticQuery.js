import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Accreditations from "./accreditations"

const AccreditationsStaticQuery = props => (
  <StaticQuery
    query={graphql`
      {
        twclogo: file(relativePath: { eq: "twc-logo.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
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
//     fixed(width: 242, height: 123) {
//       ...GatsbyImageSharpFixed
//     }
//   }
// }
