/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from 'react-grid-system';
import Header from "./header"
import TransitionLink from "gatsby-plugin-transition-link"
import "./layout.css"
// import { ParallaxProvider } from 'react-scroll-parallax';


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


  return (
    <>
    <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> 
    <span class="circle"></span>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 5000,
          padding: `0rem`,
        }}
      >
  
        <main>{children}</main>
        <footer style={{
          marginTop: `10rem`,
          paddingTop: '4rem',
          paddingBottom: '2rem',
        }}>
        <Container fluid >
          <Row justify="start" style={{
            position: 'relative',
          }}>
        <Col sm={4}><div style={{
         
            }}className=" uppercase">

                  By and Large Studio
                  </div>
              </Col>
              <Col sm={2}><div style={{
         
        }}className=" uppercase">

              2021
              </div>
          </Col>
          <Col sm={2}><div style={{
         
        }}className=" uppercase">

              IG
              </div>
          </Col>
          <Col sm={3}><div style={{
         
        }}className=" uppercase">

              Contact
              </div>
          </Col>
          </Row>
        </Container>

        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

// document.getElementById("root")

export default Layout


