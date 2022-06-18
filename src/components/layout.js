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
import "./layout.css"
import Arrow from "../assets/arrow.svg";
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
          padding: `0em`,
        }}
      >
  
        <main>{children}</main>
        <footer style={{
          marginTop: `3em`,
          paddingTop: '4em',
          paddingBottom: '.5em',
        }}
        className="delay-5"
        >
        <Container fluid >
          {/* <Row justify="start" style={{
            position: 'relative',
          }}>
        <Col sm={6}><div style={{
         
            }}className=" uppercase">

                <AniLink
                  cover  to="/" bg="#1E1E1E"
                  direction="right"
                  duration={1.5}
                >By and Large Studio
              </AniLink>
                  </div>
              </Col>
          <Col sm={6}><div style={{
         
        }}className="uppercase">

                    <div className=""><AniLink
                    cover  to="/contact" bg="#1E1E1E"
                    direction="left"
                    duration={1.5}
                  >Contact</AniLink></div>
              </div>
          </Col>
          </Row> */}
           <Row justify="start" style={{
            position: 'relative', 
            paddingTop: '1em',
          }}>
            <Col  xs={6} sm={6} md={3}><div style={{
            
          }}className="small-copy">
                Based in Newcastle, Australia. <br></br>Working worldwide. 
                </div>
            </Col>
             <Col  xs={6} sm={6} md={3}><div style={{
            
            }}className="small-copy">
                <a href="mailto:mail@byandlarge.studio">
                  mail@byandlarge.studio
                  </a>
                  </div>
              </Col>
              
            <Col xs={6} md={3}><div style={{
            
          }}className="small-copy">
             <a target="_blank" rel="noreferrer" href="https://www.instagram.com/studiobyandlarge/">
                Instagram 
              </a>
              <Arrow className="arrow"></Arrow>
                </div>
            </Col>
             <Col  xs={6} sm={6} md={3}><div style={{
            
            }}className="small-copy">
                      <span className="copyright">&#169; 2022 By and Large Studio</span>
                  </div>
              </Col>
              </Row>
              <Row justify="start" style={{
            position: 'relative', 
            paddingTop: '2em',
          }}>
              <Col sm={6}><div style={{
            
          }}className="small-copy">

                    By and Large Studio is on the traditional country of the Awabakal and Worimi peoples. We recognize and respect their cultural heritage, beliefs and continuing relationship with the land.<br></br>
                   
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


