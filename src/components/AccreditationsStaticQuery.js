import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Accreditations from "./accreditations"

const AccreditationsStaticQuery = props => (
  <StaticQuery
    query={graphql`
      {
        twclogo: file(relativePath: { eq: "twc-logo.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 180) {
              srcSet
            }
          }
        }
      }
    `}
    render={data => <Accreditations images={data} />}
  />
)
export default AccreditationsStaticQuery
