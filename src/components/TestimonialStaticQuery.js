import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Testimonials from "./testimonials"

const TestimonialStaticQuery = () => (
  <StaticQuery
    query={graphql`
      {
        profile0: file(relativePath: { eq: "testimonials/profile-0.png" }) {
          childImageSharp {
            fluid(maxWidth: 952, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        profile1: file(relativePath: { eq: "testimonials/profile-1.png" }) {
          childImageSharp {
            fluid(maxWidth: 952, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        profile2: file(relativePath: { eq: "testimonials/profile-2.png" }) {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        profile3: file(relativePath: { eq: "testimonials/profile-3.png" }) {
          childImageSharp {
            fluid(maxWidth: 640, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        profile4: file(relativePath: { eq: "testimonials/profile-4.png" }) {
          childImageSharp {
            fluid(maxWidth: 640, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        profile5: file(relativePath: { eq: "testimonials/profile-5.png" }) {
          childImageSharp {
            fluid(maxWidth: 640, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        profile6: file(relativePath: { eq: "testimonials/profile-6.png" }) {
          childImageSharp {
            fluid(maxWidth: 640, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => <Testimonials images={data} />}
  />
)
export default TestimonialStaticQuery
