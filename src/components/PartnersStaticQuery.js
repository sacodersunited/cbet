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

        MIS: file(relativePath: { eq: "cropped-Square-Logo3-270x270.png" }) {
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
        memHermann: file(relativePath: { eq: "memorial-hermann-logo.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 600, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        cyberTexas: file(relativePath: { eq: "logo-cyberTexas.png" }) {
          childImageSharp {
            fluid(maxHeight: 600, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        summit: file(relativePath: { eq: "summit-logo.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 600, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        imedbiomedical: file(relativePath: { eq: "iMed-Biomedical.png" }) {
          childImageSharp {
            fluid(maxHeight: 600, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        vyaire: file(relativePath: { eq: "Vyaire_Medical_Art.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 600, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        kami: file(relativePath: { eq: "kami-logo.png" }) {
          childImageSharp {
            fluid(maxHeight: 600, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        CharterCollege: file(
          relativePath: { eq: "Charter College Logo JPEG.jpg" }
        ) {
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
      }
    `}
    render={(data) => <Partners images={data} />}
  />
)
export default PartnersStaticQuery
