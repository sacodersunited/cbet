import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Partners from "./partners"

const PartnersStaticQuery = props => (
  <StaticQuery
    query={graphql`
      {
        technation: file(relativePath: { eq: "TechNation_logo.png" }) {
          childImageSharp {
            fluid(maxHeight: 94, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tfclogo: file(relativePath: { eq: "tfc_logo.png" }) {
          childImageSharp {
            fluid(maxHeight: 51, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stephens: file(relativePath: { eq: "si-recruiting.png" }) {
          childImageSharp {
            fluid(maxHeight: 96, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        cerlogo: file(relativePath: { eq: "cer-logo.png" }) {
          childImageSharp {
            fluid(maxHeight: 138, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        nbchambers: file(relativePath: { eq: "NBChambers-logo.png" }) {
          childImageSharp {
            fluid(maxHeight: 142, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        chihealth: file(relativePath: { eq: "chi-health.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        citizens: file(relativePath: { eq: "citizens.png" }) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        miracosta: file(relativePath: { eq: "mira-costa-college.png" }) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        charney: file(relativePath: { eq: "charney-logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Partners images={data} />}
  />
)
export default PartnersStaticQuery
