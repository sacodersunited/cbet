import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const TestimonialBackgroundHeader = props => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid(quality: 100, maxWidth: 1440) {
                ...GatsbyImageSharpFluid_withWebp
                originalName
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.allImageSharp.edges.find(
        edge => edge.node.fluid.originalName === props.page
      )

      if (!image) {
        return null
      }
      console.log("non header", props, image)
      const { children, bgStyle } = props

      return (
        <BackgroundImage
          Tag="section"
          fluid={image.node.fluid}
          backgroundColor={`#f8f9fa`}
          title="cbet_values"
          id="cbet_values"
          role="img"
          aria-label="cbet_values"
          style={bgStyle}
        >
          {children}
        </BackgroundImage>
      )
    }}
  />
)

export default TestimonialBackgroundHeader
