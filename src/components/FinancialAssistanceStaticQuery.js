import React from "react"
import { StaticQuery, graphql } from "gatsby"
import FinanceAssistance from "../components/FinanceAssistance"

const FinanceAssistanceStaticQuery = props => (
  <StaticQuery
    query={graphql`
      {
        soldier: file(relativePath: { eq: "soldier.jpg" }) {
          childImageSharp {
            fixed(height: 348, width: 348, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        soldierbg: file(relativePath: { eq: "soldier-bg.png" }) {
          childImageSharp {
            fluid(maxHeight: 340, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        usflag: file(relativePath: { eq: "usFlag.png" }) {
          childImageSharp {
            fluid(maxHeight: 340, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <FinanceAssistance images={data} />}
  />
)
export default FinanceAssistanceStaticQuery
