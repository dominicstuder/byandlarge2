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
  
    
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 2000,
          padding: `0rem`,
        }}
      >
  
        <main>{children}</main>

        <footer style={{
          marginTop: `10rem`,
          paddingTop: '4rem',
          paddingBottom: '4rem',
        }}>
        <Container fluid >
          <Row justify="start" style={{
            position: 'relative',
          }}>
            <Col sm={3}><div style={{
           color: 'white',
          }}className="header-3">Index</div>
              <ul>
                <li>
                By and Large Studio</li>
              </ul>
            </Col>
          <Col sm={3}><div style={{
           color: 'white',
          }}className="header-3">Index</div>
              <ul>
                <li><TransitionLink
                  to="/astrid"
                  exit={{
                    length: 2,

                  }}
                  entry={{
                    length: 1,
                    appearAfter: 1,
                  }}
                >About</TransitionLink></li>
                <li><TransitionLink
                  to="/astrid"
                  exit={{
                    length: 2,

                  }}
                  entry={{
                    length: 1,
                    appearAfter: 1,
                  }}
                >Work</TransitionLink></li>
                <li><TransitionLink
                  to="/astrid"
                  exit={{
                    length: 2,

                  }}
                  entry={{
                    length: 1,
                    appearAfter: 1,
                  }}
                >Information</TransitionLink></li>
                <li><TransitionLink
                  to="/astrid"
                  exit={{
                    length: 2,

                  }}
                  entry={{
                    length: 1,
                    appearAfter: 1,
                  }}
                >Work</TransitionLink></li>
              </ul>
            </Col>
            <Col sm={3}><div style={{
           color: 'white',
          }}className="header-3">Contact</div>
              <ul>
                <li><TransitionLink
                  to="/astrid"
                  exit={{
                    length: 2,

                  }}
                  entry={{
                    length: 1,
                    appearAfter: 1,
                  }}
                >email@byandlarge.studio</TransitionLink></li>
                <li>0410 819 455</li>
              </ul>
            </Col>
            <Col sm={3}><div style={{
           color: 'white',
          }}className="header-3">Social</div>
              <ul>
                <li><TransitionLink
                  to="/astrid"
                  exit={{
                    length: 2,

                  }}
                  entry={{
                    length: 1,
                    appearAfter: 1,
                  }}
                >Instagram</TransitionLink></li>
                
              </ul>
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

document.getElementById("root")

export default Layout


