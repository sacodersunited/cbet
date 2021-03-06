/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "../components/nav/header"
import AccreditationsStaticQuery from "./AccreditationsStaticQuery"
import Footer from "./footer"

const LayoutDetail = ({ children }) => (
  <StaticQuery
    query={graphql`
      {
        cbetlogo: file(relativePath: { eq: "logo/logo-8.png" }) {
          childImageSharp {
            fixed(width: 180, height: 52, quality: 100) {
              ...GatsbyImageSharpFixed
            }
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
        <Header images={data} />
        <main>{children}</main>
        <AccreditationsStaticQuery />
        <Footer />
      </>
    )}
  />
)

LayoutDetail.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutDetail
