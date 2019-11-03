import React from "react"
import { Container, Jumbotron, Button } from "react-bootstrap"
import styled from "styled-components"

const GraphicJumbotron = styled(Jumbotron)`
  background-image: url(${props => props.imgsrc || null});
  border-radius: 0 !important;
  background-size: cover;
  min-height: 240px;
`

const GraphicHeader = ({ imgSrc, title, descr, buttonLink, children }) => (
  <GraphicJumbotron imgsrc={imgSrc}>
    <Container>
      <h1 className="text-light">{title}</h1>
      {descr && (
        <p className="text-light">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
      )}
      {buttonLink ? (
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      ) : null}
      {children}
    </Container>
  </GraphicJumbotron>
)

export default GraphicHeader
