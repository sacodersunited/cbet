import React from "react"
import { StaticQuery, graphql } from "gatsby"
import ClassAdmin from "./ClassAdmin"

const CbetClassesStaticQuery = props => (
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
      }
    `}
    render={data => (
      <ClassAdmin
        user={props.user}
        code={data.site.siteMetadata.codeFunc}
        cbetClasses={data.allCbetClass.edges}
      />
    )}
  />
)
export default CbetClassesStaticQuery
