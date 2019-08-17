import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Classes from "./Classes"

const HomeClassesStaticQuery = props => (
  <StaticQuery
    query={graphql`
      {
        bmetdegree: file(relativePath: { eq: "bmetDegree.jpg" }) {
          childImageSharp {
            fixed(height: 253, width: 253, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        bmettech: file(relativePath: { eq: "bmetTech.jpg" }) {
          childImageSharp {
            fixed(width: 253, height: 253, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        itnetworkprograms: file(relativePath: { eq: "itNetworkPrograms.jpg" }) {
          childImageSharp {
            fixed(width: 253, height: 253, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        specialtyprograms: file(relativePath: { eq: "specialtyPrograms.jpg" }) {
          childImageSharp {
            fixed(width: 253, height: 253, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Classes images={data} />}
  />
)
export default HomeClassesStaticQuery
