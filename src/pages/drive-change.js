import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-grid-system';
import AniLink from "gatsby-plugin-transition-link/AniLink"
import D1 from "../components/d1-img"
import D2 from "../components/d2-img"
import D3 from "../components/d3-img"
import D4 from "../components/d4-img"
import D5 from "../components/d5-img"
import BGIMG7 from "../components/backgroundimage7"
import { setConfiguration } from 'react-grid-system';
setConfiguration({ gutterWidth:'60'});

const DriveChange = () => (
  <Layout>
    <SEO title="Drive Change" />
    <Container fluid>
      <Row justify="start" style={{
            position: 'relative',
        }} >
        <Col sm={12} className="delay-3 mt5 pb1" style={{
              position: 'relative',
          }}>
  
            <div className="work-page-image-wrapper">
                <BGIMG7 className="border-50-no-hover"></BGIMG7>
            </div>

          </Col>
          <Col xs={12} sm={12}>
            <h2 className="header-1 black delay-1">Drive Change</h2>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={3} >
          <p className="body black delay-2">
          Drive Change is a campaign formed by a collective of some of Australia’s leaders in the cannabis industry. The campaign's goal is to gather support to help change the current laws that are restricting patients' ability to use medicinal cannabis.
          </p>
          </Col>
        
          <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={3} >
            <div className="project-info">
              <p className="body">We helped by creating the Drive Change brand, campaign design and digital assets. The visual direction needed to build a sense of community while being forward looking and challenging current perceptions of what a cannabis campaign can be.</p>
            </div>
          </Col> 
          <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={3} >
            <div className="project-info">
              <p className="body small-title">What we did</p>
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
          </Row>
          <Row justify="end" style={{
            marginTop: '3rem',
        }}>

          <Col sm={6} className="delay-1" style={{
              marginBottom: '1rem',
          }}>
          <D2></D2>
          </Col> 
         
          <Col sm={12} className="delay-1" style={{
              marginBottom: '1rem',
          }}>
          <D3></D3>
          </Col> 
          <Col sm={12} className="delay-1" style={{
              marginBottom: '1rem',
          }}>
          <D4></D4>
          </Col> 
          <Col sm={12} className="delay-1" style={{
              marginBottom: '1rem',
          }}>
          <D1></D1>
          </Col> 
          <Col sm={12} className="delay-1" style={{
              marginBottom: '1rem',
          }}>
          <D5></D5>
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
                      to="/musk"
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

export default DriveChange

