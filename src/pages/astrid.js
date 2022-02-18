import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-grid-system';
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import BGIMG from "../components/backgroundimage1"
import IMG from "../components/image"
import A1 from "../components/a1-img"
import A2 from "../components/a2-img"
import A3 from "../components/a3-img"
import A4 from "../components/a4-img"
import A5 from "../components/a5-img"
import A6 from "../components/a6-img"
import A7 from "../components/a7-img"

const Astrid = () => (
  <Layout>
    <SEO title="Astrid" />
    <Container fluid>
      <Row justify="start" style={{
            position: 'relative',
            marginTop: '2rem',
        }} >
          <Col sm={6}>
          <h2 className="header-1 black copy-delay-1">Astrid</h2>
          </Col>
          <Col sm={3} md={3} lg={3} xl={2} xxl={2} >
            <div className="project-info copy-delay-2">
              <p className="body small-title">Industry</p>
              <p className="scope-list">
                <ul>
                  <li>Health Care</li>
                  <li>Medical Cannabis</li>
                </ul>
              </p>
              <p className="body small-title">Year</p>
              <p className="scope-list">
                <ul>
                  <li>2021</li>
                </ul>
              </p>
            </div>
          </Col> 
          <Col sm={3} md={3} lg={3} xl={2} xxl={2} >
            <div className="project-info copy-delay-2">
              <p className="body small-title">Scope</p>
              <p className="scope-list">
                <ul>
                  <li>Strategy</li>
                  <li>Brand Identity</li>
                  <li>Campaign Design</li>
                  <li>Digital Design</li>
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
          <Col sm={6}>
          <p className="body black copy-delay-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          
          </p>
          </Col>
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
          <Col sm={12} className="pb1">
              <A3></A3>
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
          <Col sm={12} className="pb1">
              <A4></A4>
          </Col> 
          <Col sm={12} className="pb1">
            <A5></A5>
          </Col> 
          <Col sm={12} className="pb1">
          <A6></A6>
          </Col> 
      </Row>
   </Container>
  </Layout>
)

export default Astrid

