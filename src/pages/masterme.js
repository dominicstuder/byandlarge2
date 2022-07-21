import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-grid-system';
import AniLink from "gatsby-plugin-transition-link/AniLink"
import BGIMG from "../components/backgroundimage1"
import MM3 from "../components/mm3-img"
import MM5 from "../components/mm5-img"
import MM6 from "../components/mm6-img"
import MM7 from "../components/mm7-img"
import MM8 from "../components/mm8-img"
import MM9 from "../components/mm09-img"
import MM10 from "../components/mm10-img"
import MM11 from "../components/mm11-img"
import MM12 from "../components/mm12-img"
import { setConfiguration } from 'react-grid-system';
setConfiguration({ gutterWidth:'60'});

const masterme = () => (
  <Layout>
    <SEO title="Master Me" />
    <Container fluid className="project">
      <Row justify="start" style={{
            position: 'relative',
        }} >

          <Col sm={12} className="delay-3 mt5 sm-mt-2 pb1" style={{
              position: 'relative',
          }}>
             <div className="work-page-image-wrapper">
              <BGIMG className="border-50-no-hover"></BGIMG>
            </div>
            </Col>
        </Row>
        <Row className="pt2">
            <Col xs={12} sm={6}>
              <h2 className="header-1 black delay-1">Master Me</h2>
            </Col>
            <Col xs={12} sm={6}>
              <h2 className="header-1 black project-date delay-1">2022</h2>
            </Col>
            </Row>
            <Row className="pt2">
            <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8} >
            <p className="hero-sentence black delay-2">
            A coaching course for creative professionals, helping to find their purpose.</p>
            </Col>
            </Row>
            <Row  className="pt6">
            <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
            <div className="project-info">
             <p className="body black delay-1">
             Master Me is a coaching and mentoring course that helps creative professionals to identify and activate purposeful careers and lifestyles that align with their unique strengths and vision.

              </p>
              <p className="body black text-indent delay-1 mb3">
              Master Me had been running for 2 years and had reached a point where they had out grown their visual identity. 
                  We came on board to create the new brand along with website and online course design.  
              </p>
            </div>
          </Col> 
          <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={3} >
            <div className="project-info">
              <p className="body small-title">What we did</p>
              <p className="scope-list">
                <ul>
                <li>Brand Identity</li>
                        <li>Digital Design</li>
                        <li>Graphic Design</li>
                        <li>Website Development</li>
                </ul>
              </p>
            </div>
          </Col> 
          </Row>
          <Row>
          <Col sm={12} className="pb1 delay-1">
            <MM12></MM12>
          </Col> 
          <Col sm={6} className="pb1 delay-1">
            <MM11></MM11>
          </Col> 
          <Col sm={6} className="pb1 delay-1">
            <MM3></MM3>
          </Col> 
          <Col sm={12} className="pb1 delay-1">
          <MM9></MM9>
          </Col> 
          <Col sm={12} className="pb1 delay-1">
          <MM10></MM10>
          </Col> 
         
          {/* <Col sm={12} className="pb1">
          <MM4></MM4>
          </Col>  */}
          <Col sm={12} className="pb1 delay-1">
          <MM5></MM5>
          </Col> 
          <Col sm={12} className="pb1 delay-1">
          <MM6></MM6>
          </Col> 
          <Col sm={12} className="pb1 delay-1">
          <MM7></MM7>
          </Col> 
          <Col sm={12} className="pb1 delay-1">
          <MM8></MM8>
          </Col> 
      </Row>
      <Row className="mt2 page-links">
        <Col sm={6} className="delay-1"  style={{
                marginBottom: '1rem',
            }}>
              
                <p className="body">
                <AniLink
                    to="/work"
                    exit={{ length: 0.5 }}
                    entry={{ delay: 0.5 }}
                  >   
                  Back to Our Work
                  </AniLink>
                </p>  
             
        </Col>
        <Col sm={6} className="delay-1" style={{
                marginBottom: '1rem',
            }}>
                     
              <p className="body">
              <AniLink
                    to="/obie"
                    exit={{ length: 0.5 }}
                    entry={{ delay: 0.5 }}
                  >  
              Next Project
              </AniLink>
              </p>
          
        </Col>
      </Row>
   </Container>
  </Layout>
)

export default masterme

