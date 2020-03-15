import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Testimonials from "./testimonials"

const TestimonialStaticQuery = () => (
  <StaticQuery
    query={graphql`
      {
        allTestimonialsYaml {
          nodes {
            id
            name
            state
            date
            comment
            type
            image {
              childImageSharp {
                fluid {
                  base64
                  tracedSVG
                  srcWebp
                  srcSetWebp
                  originalImg
                  originalName
                  presentationWidth
                  presentationHeight
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Testimonials data={data} />}
  />
)
export default TestimonialStaticQuery
