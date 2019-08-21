import React from "react"
import { StaticQuery, graphql } from "gatsby"
import InternationalStudents from "./InternationalStudents"

const InternationalStudentsStaticQuery = props => (
  <StaticQuery
    query={graphql`
      {
        intl1: file(relativePath: { eq: "intl-1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 602, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        intl2: file(relativePath: { eq: "intl-2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 602, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        intl3: file(relativePath: { eq: "intl-3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 602, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        intl4: file(relativePath: { eq: "intl-4.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 602, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <InternationalStudents images={data} />}
  />
)
export default InternationalStudentsStaticQuery
