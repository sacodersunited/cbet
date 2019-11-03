import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Container, Button } from "react-bootstrap"
import BackgroundImage from "gatsby-background-image"

const NonHeaderBackgroundHeader = props => (
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

      const { title, descr, buttonLink, children, bgStyle } = props

      return (
        <BackgroundImage
          Tag="section"
          fluid={image.node.fluid}
          backgroundColor={`"#2c3e50`}
          title="cbet_values"
          id="cbet_values"
          role="img"
          aria-label="cbet_values"
          style={bgStyle}
        >
          <Container>
            <h1 className="text-light">{title}</h1>
            {descr && (
              <p className="text-light">
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
            )}
            {buttonLink ? (
              <p>
                <Button variant="primary">Learn more</Button>
              </p>
            ) : null}
            {children}
          </Container>
        </BackgroundImage>
      )
    }}
  />
)

export default NonHeaderBackgroundHeader
