import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Classes from "./classes"

const HomeClassesStaticQuery = props => (
  <StaticQuery
    query={graphql`
      {
        bmetdegree: file(relativePath: { eq: "bmetDegree.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 253, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        bmettech: file(relativePath: { eq: "bmetTech.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 253, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        itnetworkprograms: file(relativePath: { eq: "itNetworkPrograms.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 253, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        specialtyprograms: file(relativePath: { eq: "specialtyPrograms.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 253, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Classes images={data} />}
  />
)
export default HomeClassesStaticQuery
