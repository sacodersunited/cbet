import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Team from "../components/Team"

const AboutStaticQuery = props => (
  <StaticQuery
    query={graphql`
      {
        twclogo: file(relativePath: { eq: "twc-logo.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        teamphoto: file(relativePath: { eq: "team/team.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 585, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bBassuk: file(relativePath: { eq: "team/billBassuk.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        rGonzalez: file(relativePath: { eq: "team/richardGonzalez.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sMcknight: file(relativePath: { eq: "team/scottMcknight.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Team images={data} />}
  />
)
export default AboutStaticQuery
