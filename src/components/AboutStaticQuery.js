import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Team from "../components/Team"

const AboutStaticQuery = props => (
  <StaticQuery
    query={graphql`
      {
        teamphoto: file(relativePath: { eq: "team/cbet-team.png" }) {
          childImageSharp {
            fluid(maxHeight: 800, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        bBassuk: file(relativePath: { eq: "team/bill.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 400, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        rGonzalez: file(relativePath: { eq: "team/monty.jpg" }) {
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
