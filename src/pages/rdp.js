import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-grid-system';
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import BGIMG4 from "../components/backgroundimage4"
import RDP2 from "../components/rdp2-img"
import RDP3 from "../components/rdp3-img"


const Rdp = () => (
  <Layout>
    <SEO title="RDP" />
    <Container fluid>
      <Row justify="start" style={{
            position: 'relative',
            marginTop: '10rem',
        }} >
        <Col sm={6}>
          <h2 className="header-1 black">RDP</h2>
          </Col>
          <Col xs={6} sm={3} md={3} lg={3} xl={2} xxl={2} >
            <div className="project-info copy-delay-2">
              <p className="body small-title">Industry</p>
              <p className="scope-list">
                <ul>
                  <li>Interior Design</li>
                  <li>Construction</li>
                </ul>
              </p>
              <p className="body small-title">Year</p>
              <p className="scope-list">
                <ul>
                  <li>2020</li>
                </ul>
              </p>
            </div>
          </Col> 
          <Col xs={6} sm={3} md={3} lg={3} xl={2} xxl={2} >
            <div className="project-info copy-delay-2">
              <p className="body small-title">WHAT WE DID</p>
              <p className="scope-list">
                <ul>
           
                  <li>Visual Identity</li>
                  <li>Graphic Design</li>
                  <li>Digital Design</li>
                </ul>
              </p>
            </div>
          </Col> 
          <Col sm={12} className="delay-1 pb1 mt5 sm-mt-2" style={{
              position: 'relative',
          }}>
              <div className="work-page-image-wrapper">
              <BGIMG4></BGIMG4>
              </div>
          </Col> 
          <Col sm={6} className="pb1">
            <div className="project-info">
              <p className="body text-">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
              <p className="body text-indent">Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </Col> 
          <Col sm={12} className="pb1">
          <RDP2></RDP2>
          </Col> 
          <Col sm={12} className="pb1">
          <RDP3></RDP3>
          </Col> 
          <Col sm={12} className="pb1">
   
          </Col> 
      </Row>
   </Container>
  </Layout>
)

export default Rdp

