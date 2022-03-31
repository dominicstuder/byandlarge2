import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-grid-system';
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import BGIMG from "../components/backgroundimage8"
import IMG from "../components/image"
import MM2 from "../components/mm2-img"
import MM3 from "../components/mm3-img"
import MM4 from "../components/mm4-img"
import MM5 from "../components/mm5-img"
import MM6 from "../components/mm6-img"
import MM7 from "../components/mm7-img"
import MM8 from "../components/mm8-img"
import MM9 from "../components/mm09-img"
import MM10 from "../components/mm10-img"

const masterme = () => (
  <Layout>
    <SEO title="Master Me" />
    <Container fluid>
      <Row justify="start" style={{
            position: 'relative',
            marginTop: '10rem',
        }} >
          <Col sm={6}>
          <h2 className="header-1 black delay-1">Master Me</h2>
            <p className="intro-copy black delay-2">
              Master Me is a coaching and mentoring course that helps creative professionals to identify and activate purposeful careers and lifestyles that align with their unique strengths and vision.
            </p>
          </Col>
         
          {/* <Col sm={2}>
            <div className="project-info copy-delay-3">
              <p className="body small-title">Year</p>
              <p className="scope-list">
                <ul>
                  <li>2021</li>
                </ul>
              </p>
            </div>
          </Col>  */}
          {/* <Col sm={6}>
          <p className="body black copy-delay-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          
          </p>
          </Col> */}
          <Col sm={12} className="delay-3 mt5 sm-mt-2 pb1" style={{
              position: 'relative',
          }}>
             <div className="work-page-image-wrapper">
              <BGIMG className="border-50-no-hover"></BGIMG>
            </div>
            </Col>
          <div className="project-info-wrapper">

                <Col xs={6} sm={4} md={4} lg={4} xl={4} xxl={4} >
                  <div className="project-info copy-delay-3">
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
                <Col sm={12} md={8}>
                <p className="body black delay-1 pt1">
                  Master Me had been running for 2 years and had reached a point where they had out grown their visual identity. 
                  We came on board to create the new brand along with website and online course design.  
                </p>
                <p className="body black text-indent delay-1 mb3">
                  The brand needed to resonate with creatives by being enaging and dynamic yet still being able to support the business goals.
                </p>
                </Col>
          </div>
          <Col sm={6} className="pb1 delay-1">
            <MM2></MM2>
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
   </Container>
  </Layout>
)

export default masterme

