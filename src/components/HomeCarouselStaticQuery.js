import React from "react"
import { StaticQuery, graphql } from "gatsby"
import HomeCarousel from "./homeCarousel"

const HomeCarouselStaticQuery = props => (
  <StaticQuery
    query={graphql`
      {
        first: file(relativePath: { eq: "carousel/carousel-1.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 449) {
              srcSet
            }
          }
        }
        second: file(relativePath: { eq: "carousel/logo.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 449) {
              srcSet
            }
          }
        }
        third: file(relativePath: { eq: "carousel/carousel-3.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 449) {
              srcSet
            }
          }
        }
        fourth: file(relativePath: { eq: "carousel/carousel-4.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 449) {
              srcSet
            }
          }
        }
      }
    `}
    render={data => <HomeCarousel images={data} />}
  />
)
export default HomeCarouselStaticQuery
