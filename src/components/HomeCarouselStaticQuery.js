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
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        second: file(relativePath: { eq: "bmet-logo3.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 449, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        third: file(relativePath: { eq: "carousel/carousel-3.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 449, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        fourth: file(relativePath: { eq: "carousel/carousel-4.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 449, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => <HomeCarousel images={data} />}
  />
)
export default HomeCarouselStaticQuery
