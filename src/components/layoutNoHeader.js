/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"

// import Header from "./header"
import Accreditations from "./accreditations"
import Footer from "./footer"

const LayoutNoHeader = ({ children }) => (
  <>
    {/* TODO: Not sure where to place this link to css */}
    {/* {console.log("test", data)} */}
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossOrigin="anonymous"
    />

    <main>{children}</main>
    <Accreditations />
    <Footer />
  </>
)

LayoutNoHeader.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutNoHeader
