import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Partners from "./partners"

const PartnersStaticQuery = () => (
  <StaticQuery
    query={graphql`
      {
        medwrench: file(relativePath: { eq: "Medwrench-logo.png" }) {
          childImageSharp {
            fluid(maxHeight: 600, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        technation: file(relativePath: { eq: "TechNation_logo.png" }) {
          childImageSharp {
            fluid(maxHeight: 600, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        tfclogo: file(relativePath: { eq: "tfc_logo.png" }) {
          childImageSharp {
            fluid(maxHeight: 600, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        stephens: file(relativePath: { eq: "si-recruiting.png" }) {
          childImageSharp {
            fluid(maxHeight: 600, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        cerlogo: file(relativePath: { eq: "cer-logo.png" }) {
          childImageSharp {
            fluid(maxHeight: 600, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        nbchambers: file(relativePath: { eq: "NBChambers-logo.png" }) {
          childImageSharp {
            fluid(maxHeight: 600, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        chihealth: file(relativePath: { eq: "chi-health.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 600, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        citizens: file(relativePath: { eq: "citizens.png" }) {
          childImageSharp {
            fluid(maxHeight: 600, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        miracosta: file(relativePath: { eq: "mira-costa-college.png" }) {
          childImageSharp {
            fluid(maxHeight: 600, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        charney: file(relativePath: { eq: "charney-logo.png" }) {
          childImageSharp {
            fluid(maxHeight: 600, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => <Partners images={data} />}
  />
)
export default PartnersStaticQuery
