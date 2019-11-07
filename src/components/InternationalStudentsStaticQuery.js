import React from "react"
import { StaticQuery, graphql } from "gatsby"
import InternationalStudents from "./InternationalStudents"

const InternationalStudentsStaticQuery = () => (
  <StaticQuery
    query={graphql`
      {
        intlpic1: file(relativePath: { eq: "intl-1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        intlpic2: file(relativePath: { eq: "intl-2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        intlpic3: file(relativePath: { eq: "intl-3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        intlpic4: file(relativePath: { eq: "intl-4.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        emmanuel: file(relativePath: { eq: "testimonials/Emmanuel Enyi.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 348, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => <InternationalStudents images={data} />}
  />
)
export default InternationalStudentsStaticQuery
