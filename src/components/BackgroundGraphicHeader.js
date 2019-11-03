import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Container, Button } from "react-bootstrap"
import BackgroundImage from "gatsby-background-image"

const BackgroundGraphicHeader = props => (
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
        edge => edge.node.fluid.originalName === props.bgFullImageName
      )

      if (!image) {
        return null
      }
      const { title, descr, buttonLink, children } = props

      return (
        <BackgroundImage
          Tag="div"
          fluid={image.node.fluid}
          backgroundColor={`#040e18`}
          title="cbet_values"
          className="jumbotron"
          id="cbet_values"
          role="img"
          aria-label="cbet_values"
          style={{
            borderRadius: "0 !important",
            backgroundSize: "cover",
            minHeight: "240px",
          }}
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

export default BackgroundGraphicHeader
