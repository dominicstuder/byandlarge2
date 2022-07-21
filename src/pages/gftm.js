import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-grid-system';
import AniLink from "gatsby-plugin-transition-link/AniLink"
import GFTM1 from "../components/gftm1-img"
import GFTM2 from "../components/gftm2-img"
import GFTM3 from "../components/gftm3-img"
import GFTM4 from "../components/gftm4-img"
import GFTM5 from "../components/gftm5-img"
import GFTM6 from "../components/gftm6-img"
import GFTM7 from "../components/gftm7-img"
import GFTM8 from "../components/gftm8-img"
import GFTM9 from "../components/gftm9-img"
import GFTM10 from "../components/gftm10-img"
import GFTMHERO from "../components/gftmhero-img"
import { setConfiguration } from 'react-grid-system';
setConfiguration({ gutterWidth:'60'});

const DriveChange = () => (
  <Layout>
    <SEO title="Great Forest Trail Marathon"/>
    <Container fluid className="project">
      <Row justify="start" style={{
            position: 'relative',
        }} >
        <Col sm={12} className="delay-3 mt5 pb1" style={{
              position: 'relative',
          }}>
  
            <div className="work-page-image-wrapper">
                <GFTMHERO className="border-50-no-hover"></GFTMHERO>
            </div>

          </Col>
          </Row>
          <Row className="pt2">
            <Col xs={12} sm={6}>
              <h2 className="header-1 black delay-1">Great Forest Trail Marathon</h2>
            </Col>
            <Col xs={12} sm={6}>
              <h2 className="header-1 black project-date delay-1">2021</h2>
            </Col>
            </Row>
            <Row className="pt2">
            <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8} >
            <p className="hero-sentence black delay-2">
                Running to save a wild place in Great Forest, Victoria. </p>
            </Col>
            </Row>
            <Row  className="pt6">
            <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
            <div className="project-info">
            <p className="body black delay-2">
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
                  <li>Content Design</li>
                </ul>
              </p>
            </div>
          </Col> 
          </Row>
          <Row justify="end" style={{
            marginTop: '3rem',
        }}>
          <Col sm={12} className="delay-1"  style={{
              marginBottom: '1rem',
          }}>
          <GFTM1 data-sal-duration="500"
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-easing="ease-in"></GFTM1>
          </Col> 
          <Col sm={12} className="delay-1"  data-sal-duration="500"
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-easing="ease-in"style={{
              marginBottom: '1rem',
          }}>
          <GFTM2></GFTM2>
          </Col> 
          <Col sm={12} className="delay-1" style={{
              marginBottom: '1rem',
          }}>
          <GFTM3></GFTM3>
          </Col> 
          <Col sm={12} md={6} className="delay-1" style={{
              marginBottom: '1rem',
          }}>
          <GFTM4></GFTM4>
          </Col> 
          <Col sm={12} md={6} className="delay-1" style={{
              marginBottom: '1rem',
          }}>
          <GFTM5></GFTM5>
          </Col> 
          <Col sm={12} className="delay-1" style={{
              marginBottom: '1rem',
          }}>
          <GFTM6></GFTM6>
          </Col> 
          <Col sm={12} className="delay-1" style={{
              marginBottom: '1rem',
          }}>
          <GFTM7></GFTM7>
          </Col> 
          <Col sm={12} md={6} className="delay-1" style={{
              marginBottom: '1rem',
          }}>
          <GFTM8></GFTM8>
          </Col> 
          <Col sm={12} md={6} className="delay-1" style={{
              marginBottom: '1rem',
          }}>
          <GFTM9></GFTM9>
          </Col> 
          <Col sm={12} className="delay-1" style={{
              marginBottom: '1rem',
          }}>
          <GFTM10></GFTM10>
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

