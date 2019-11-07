import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Team from "../components/Team"

const AboutStaticQuery = props => (
  <StaticQuery
    query={graphql`
      {
        teamphoto: file(relativePath: { eq: "team/team.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 585, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        bBassuk: file(relativePath: { eq: "team/bill2.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 400, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        rGonzalez: file(relativePath: { eq: "team/richard2.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 400, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        sMcknight: file(relativePath: { eq: "team/scott.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 400, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => <Team images={data} />}
  />
)
export default AboutStaticQuery
