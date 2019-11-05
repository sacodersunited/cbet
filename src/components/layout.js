import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "../components/header"
import AccreditationsStaticQuery from "./AccreditationsStaticQuery"
import Footer from "./footer"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      {
        cbetlogo: file(relativePath: { eq: "logo/logo-8.png" }) {
          childImageSharp {
            fixed(width: 180, height: 52, quality: 100) {
              ...GatsbyImageSharpFixed_tracedSVG
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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <Header images={data} />
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
