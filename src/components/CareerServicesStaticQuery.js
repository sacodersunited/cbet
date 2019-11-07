import React from "react"
import { StaticQuery, graphql } from "gatsby"
import CareerServices from "../components/CareerServices"

const CareerServicesStaticQuery = props => (
  <StaticQuery
    query={graphql`
      {
        externship: file(relativePath: { eq: "externship-1.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 340, maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        bmetcert: file(relativePath: { eq: "BMET-certificate1.png" }) {
          childImageSharp {
            fluid(maxHeight: 427, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => <CareerServices images={data} />}
  />
)
export default CareerServicesStaticQuery
