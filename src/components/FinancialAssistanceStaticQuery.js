import React from "react"
import { StaticQuery, graphql } from "gatsby"
import FinanceAssistance from "../components/FinanceAssistance"

const FinanceAssistanceStaticQuery = props => (
  <StaticQuery
    query={graphql`
      {
        soldier: file(relativePath: { eq: "soldier.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        soldierbg: file(relativePath: { eq: "soldier-bg.png" }) {
          childImageSharp {
            fluid(maxHeight: 340, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        usflag: file(relativePath: { eq: "usFlag.png" }) {
          childImageSharp {
            fluid(maxHeight: 340, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => <FinanceAssistance images={data} />}
  />
)
export default FinanceAssistanceStaticQuery
