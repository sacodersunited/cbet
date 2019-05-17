import React from "react"
import { StaticQuery, graphql } from "gatsby"
import ClassScheduler from "./ClassScheduler"

const ClassStaticQuery = () => (
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
    render={data => <ClassScheduler code={data.site.siteMetadata.codeFunc} />}
  />
)
export default ClassStaticQuery
