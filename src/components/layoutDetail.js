/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import Accreditations from "./accreditations"
import Footer from "./Footer"

const LayoutDetail = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteDetailTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {/* TODO: Not sure where to place this link to css */}
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <Accreditations />
        <Footer />
      </>
    )}
  />
)

LayoutDetail.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutDetail
