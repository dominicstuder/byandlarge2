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
import A8 from "../components/a8-img"
import A9 from "../components/a9-img";
import A10 from "../components/a10-img";
import A11 from "../components/a11-img";
import A12 from "../components/a12-img";
import A13 from "../components/a13-img";
import A14 from "../components/a14-img";
import A15 from "../components/a15-img";
import A16 from "../components/a16-img";
import A17 from "../components/a17-img";


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
          <Col xs={6} sm={3} md={3} lg={3} xl={2} xxl={2} >
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
          <Col xs={6} sm={3} md={3} lg={3} xl={2} xxl={2} >
            <div className="project-info copy-delay-2">
              <p className="body small-title">Scope</p>
              <p className="scope-list">
                <ul>
                  <li>Strategy</li>
                  <li>Visual Identity</li>
                  <li>Digital Design</li>
                  <li>Website Development</li>
                  <li>Ecommerce</li>
                  <li>Packaging and print</li>
                  <li>Signage</li>
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
            Astrid is a plant based medicines dispensary based in Melbourne. They focus on high level of patient care and empowering patients with knowledge. We helped build a brand that is sophisticated and stands aprat in the growing cannabis market. 
          </p>
          </Col>
          <Col sm={12} className="delay-3 mt5 sm-mt-2 pb1" style={{
              position: 'relative',
          }}>
             <div className="work-page-image-wrapper">
              <BGIMG></BGIMG>
            </div>
            </Col>
            {/* <Col sm={3} className="mt5 small-image-top mobile-view">
              <A3></A3>
          </Col>  */}
          <div className="project-info-wrapper mt5">
            <Col sm={8}>
          <h3 className="header-2">A visual identity based on creativity and the power of the plant</h3>

          <div className="project-info">
              <p className="body ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
              <p className="body text-indent">Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </Col>
          </div>
          <Col sm={4} className="pb1">
              <A4></A4>
          </Col> 

          <Col sm={4} className="pb1">
            <A10></A10>
          </Col> 
          <Col sm={4} className="pb1">
            <A5></A5>
          </Col> 
         
          <Col sm={4} className="pb1">
          <A6></A6>
          </Col> 
          <Col sm={4} className="pb1">
          <A11></A11>
          </Col> 
          <Col sm={4} className="pb1">
          <A12></A12>
          </Col> 
          <div className="project-info-wrapper two">

            <Col sm={6}>
            <h3 className="header-3">Creating harmony between the dispensary space and visual identity</h3>
            </Col>
            <Col sm={6}>
            <p className="body black copy-delay-1">
                The dispensary, designed by Alte. Studio, needed to have a close ties with the identity, creating a cohesive experience for patients and customers across all touch points of the experience.
            </p>
            </Col>
            </div>
          <Col sm={12} className="pb1">
          <A7></A7>
          </Col> 
          <div className="project-info-wrapper">

            <Col sm={6}>
            <h3 className="header-3">Translating the physical experience online.</h3>
            </Col>
            <Col sm={6}>
            <p className="body black copy-delay-1">
              
            </p>
          </Col>
          </div>
          <div className="project-image-group-wrapper">
            <Col sm={4} className="mobile-view">
            <A8></A8>
            </Col> 
            <Col sm={4} className="mobile-view">
            <A3></A3>
            </Col> 
          </div>
          <div className="project-image-group-wrapper">
            {/* <Col sm={4} className="mobile-view">
            <A8></A8>
            </Col>  */}
            <Col sm={4} className="mobile-view">
            <A13></A13>
            </Col> 
            <Col sm={4} className="mobile-view">
            <A9></A9>
            </Col> 

          </div>
          {/* <div className="project-image-group-wrapper">
          <Col sm={6}>
            <A14></A14>
          </Col>
          <Col sm={6}>
            <A15></A15>
          </Col>
          </div> */}
          <div className="project-image-group-wrapper">
          <Col sm={6}>
            <A16></A16>
          </Col>
          <Col sm={6}>
            <A17></A17>
          </Col>
          </div>
      </Row>
   </Container>
  </Layout>
)

export default Astrid

