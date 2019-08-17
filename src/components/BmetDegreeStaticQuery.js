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
              ...GatsbyImageSharpFluid
            }
          }
        }
        bmet1: file(relativePath: { eq: "bmetDegree/bmet-1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 952, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bmet2: file(relativePath: { eq: "bmetDegree/bmet-2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 952, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bmet4: file(relativePath: { eq: "bmetDegree/bmet-4.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 952, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        fSteinmeier: file(relativePath: { eq: "team/fsteinmeier.jpg" }) {
          childImageSharp {
            fixed(height: 348, width: 348, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <BmetDegree images={data} />}
  />
)
export default BmetDegreeStaticQuery
