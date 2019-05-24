import React from "react"
import { StaticQuery, graphql } from "gatsby"
import ClassAdmin from "./ClassAdmin"

const ClassStaticQuery = props => (
  <StaticQuery
    query={graphql`
      query CodeQuery {
        site {
          siteMetadata {
            codeFunc
          }
        }
      }
    `}
    render={data => (
      <ClassAdmin user={props.user} code={data.site.siteMetadata.codeFunc} />
    )}
  />
)
export default ClassStaticQuery
