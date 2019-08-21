import React from "react"
import { StaticQuery, graphql } from "gatsby"
import CareerServices from "./CareerServices"

const CareerServicesStaticQuery = () => (
  <StaticQuery
    query={graphql`
      {
        externship1: file(relativePath: { eq: "externship-1.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 360, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        externship2: file(relativePath: { eq: "externship-2.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 360, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <CareerServices images={data} />}
  />
)
export default CareerServicesStaticQuery
