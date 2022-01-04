import React from "react"
import { StaticQuery, graphql } from "gatsby"
import HumanResources from "../components/HumanResources"

const HumanResourcesStaticQuery = (props) => (
  <StaticQuery
    query={graphql`
      {
        hr: file(relativePath: { eq: "team/julissa-garibay.jpeg" }) {
          childImageSharp {
            fluid(maxHeight: 286, maxWidth: 286, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={(data) => <HumanResources images={data} />}
  />
)
export default HumanResourcesStaticQuery
