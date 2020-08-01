import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "../components/nav/header"
import AccreditationsStaticQuery from "./AccreditationsStaticQuery"
import Footer from "./footer"

const Layout = ({ children, isAdmission }) => (
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
        <Header images={data} isAdmission={isAdmission} />
        <main>{children}</main>
        <AccreditationsStaticQuery />
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
