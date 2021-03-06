import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Partners from "./partners"

const PartnersStaticQuery = () => (
  <StaticQuery
    query={graphql`
      {
        allPartnersYaml {
          nodes {
            name
            link
            colWidth
            img {
              childImageSharp {
                fluid(maxHeight: 200, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Partners images={data} />}
  />
)
export default PartnersStaticQuery
