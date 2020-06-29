import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BmetDegree from "./BmetDegree"

const BmetDegreeStaticQuery = props => (
  <StaticQuery
    query={graphql`
      {
        bmettech: file(relativePath: { eq: "bmet-tech.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 952, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        bmet1: file(relativePath: { eq: "bmetDegree/bmet-1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 952, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        bmet2: file(relativePath: { eq: "bmetDegree/bmet-2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 952, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        bmet4: file(relativePath: { eq: "bmetDegree/bmet-4.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 952, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        gmcknight: file(relativePath: { eq: "team/gmcknight.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => <BmetDegree images={data} />}
  />
)
export default BmetDegreeStaticQuery
