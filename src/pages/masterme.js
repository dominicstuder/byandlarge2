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
          <h2 className="header-1 black copy-delay-1">Master Me</h2>
          </Col>
  

          <Col xs={6} sm={3} md={3} lg={3} xl={2} xxl={2} >
            <div className="project-info copy-delay-2">
              <p className="body small-title">Industry</p>
              <p className="scope-list">
                <ul>
                  <li>Coaching</li>
                </ul>
              </p>
              <p className="body small-title copy-delay-2">Year</p>
              <p className="scope-list">
                <ul>
                  <li>2022</li>
                </ul>
              </p>
            </div>
          </Col> 
          <Col xs={6} sm={3} md={3} lg={3} xl={2} xxl={2} >
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
              <BGIMG></BGIMG>
            </div>
            </Col>
          <div className="project-info-wrapper">
            <Col sm={8}>
          <h3 className="header-2">Lorem ipsum dolor sit amet</h3>

          <div className="project-info">
              <p className="body ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
              <p className="body text-indent">Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </Col>
          </div>
          <Col sm={6} className="pb1">
            <MM2></MM2>
          </Col> 
          <Col sm={6} className="pb1">
            <MM3></MM3>
          </Col> 
          <Col sm={12} className="pb1">
          <MM9></MM9>
          </Col> 
          <Col sm={12} className="pb1">
          <MM10></MM10>
          </Col> 
          <div className="project-info-wrapper">

            <Col sm={7}>
          <h3 className="header-3">Lorem ipsum dolor sit amet</h3>
          </Col>
          <Col sm={5}>
          <p className="body black copy-delay-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          
          </p>
          </Col>
          </div>
          {/* <Col sm={12} className="pb1">
          <MM4></MM4>
          </Col>  */}
          <Col sm={12} className="pb1">
          <MM5></MM5>
          </Col> 
          <Col sm={12} className="pb1">
          <MM6></MM6>
          </Col> 
          <Col sm={12} className="pb1">
          <MM7></MM7>
          </Col> 
          <Col sm={12} className="pb1">
          <MM8></MM8>
          </Col> 
      </Row>
   </Container>
  </Layout>
)

export default masterme

