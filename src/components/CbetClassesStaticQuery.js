import React from "react"
import { StaticQuery, graphql } from "gatsby"
import ClassAdmin from "./ClassAdmin"

const CbetClassesStaticQuery = (props) => (
  <StaticQuery
    query={graphql`
      query cbetClasses {
        allCbetClass {
          edges {
            node {
              Id
              Title
              Format
              Training
              StartDate
              EndDate
              RegistrationCloseDate
              IsActive
              ProgramSelected
            }
          }
        }
        site {
          siteMetadata {
            codeFunc
          }
        }
        bmetdegree: file(relativePath: { eq: "bmetDegree.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        bmettech: file(relativePath: { eq: "bmetTech.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={(data) => (
      <ClassAdmin
        user={props.user}
        code={data.site.siteMetadata.codeFunc}
        cbetClasses={data.allCbetClass.edges}
        images={data}
      />
    )}
  />
)
export default CbetClassesStaticQuery
