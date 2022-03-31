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
          <h2 className="header-1 black delay-1">RDP</h2>
            <p className="intro-copy black delay-2">
              RDP is an interior design and construction agency in Melbourne. 
            </p>
          </Col>
          
        
          <Col sm={12} className="delay-3 pb1 mt5 sm-mt-2" style={{
              position: 'relative',
          }}>
              <div className="work-page-image-wrapper">
              <BGIMG4 className="border-50-no-hover"></BGIMG4>
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

