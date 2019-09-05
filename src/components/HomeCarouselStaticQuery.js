import React from "react"
import { StaticQuery, graphql } from "gatsby"
import HomeCarousel from "./homeCarousel"

const HomeCarouselStaticQuery = props => (
  <StaticQuery
    query={graphql`
      {
        first: file(relativePath: { eq: "carousel/carousel-1.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 449, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        second: file(relativePath: { eq: "bmet-logo3.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 449, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        third: file(relativePath: { eq: "carousel/carousel-3.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 449, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        fourth: file(relativePath: { eq: "carousel/carousel-4.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 449, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <HomeCarousel images={data} />}
  />
)
export default HomeCarouselStaticQuery
