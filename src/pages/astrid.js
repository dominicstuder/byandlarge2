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
              <p className="body small-title">WHAT WE DID</p>
              <p className="scope-list">
                <ul>
                  <li>Strategy</li>
                  <li>Visual Identity</li>
                  <li>Digital Design</li>
                  <li>Website Development</li>
                  <li>E-commerce</li>
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
          </Row>
          <Row justify="end" style={{
            marginTop: '3rem',
        }}>
          <Col sm={6}>
          <p className="body black copy-delay-1">
          Astrid is an entirely unique, plant-based medicines dispensary in South Yarra, Melbourne. 
          The team at Astrid focus on providing a high level of care to their patients and empowering them through education and advocacy. 
          </p>
          <p className="body black text-indent copy-delay-1 mb3">
          We worked with Astrid to define and build a brand that communicates Astrid’s values and stands apart in the quickly growing medicinal cannabis industry. 
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
          <div className="project-info-wrapper mt3 mb3">
            <Col sm={6}>
                <h3 className="header-3">The visual identity</h3>
            </Col>
            <Col sm={6}>
                <p className="body copy-delay-1">We wanted to draw on elements that allude to cannabis, while avoiding the usual tropes that are used in the industry. To do this we explored a sea of green concept, using only shades of green throughout the brand. We also looked at the creative and organic aspects of cannabis, landing on found imagery of paintings of plants to communicate this feeling.  
                </p>
                <p className="body text-indent copy-delay-1">We used a refined brand mark and functional secondary elements to achieve a balance between creativity and function across the brand.</p>
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
          <div className="project-info-wrapper mt3 mb3 two">

            <Col sm={6}>
            <h3 className="header-3">Creating harmony between the dispensary space and visual identity</h3>
            </Col>
            <Col sm={6}>
            <p className="body black copy-delay-1">
              The dispensary space, designed by <a target="_blank" href="https://altestudio.com.au/">Alte. Studio</a>, needed to have a close relationship with the visual identity, creating a cohesive experience for patients and customers. 
        
            </p>
            <p className="body text-indent">
            Colour is used, along with proportion and material to create the connection between space and brand. 
            Subtle use of brand assets in the space, along with signage on the exterior of the building also emphasise the visual links. 
            </p>
            </Col>
            </div>
          <Col sm={12} className="pb1">
          <A7></A7>
          </Col> 
          <div className="project-info-wrapper mt3 mb3">

            <Col sm={6}>
            <h3 className="header-3">A natural and enjoyable experience online for patients</h3>
            </Col>
            <Col sm={6}>
            <p className="body black copy-delay-1">
             Early on, we identified that many patients have had potentially stressful experiences interacting with health care providers, so we wanted to create an enjoyable experience for patients when engaging with Astrid online. We did this by incorporating subtle animation, applying the brand green throughout and using consistent, gentle copy. 
            </p>
            <p className="body text-indent">
              Initially, the site existed largely as an introduction to Astrid, but as the brand grows we are now rolling out e-commerce and integrated patient management tools. 
            </p>
          </Col>
          </div>
          <div className="project-image-group-wrapper pb5">
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
          <div className="project-info-wrapper mt3 mb3">

            <Col sm={6}>
            <h3 className="header-3">Supporting collateral</h3>
            </Col>
            <Col sm={6}>
            <p className="body black copy-delay-1">
            We designed a range of collateral for Astrid, including stationary and packaging.
            </p>
            </Col>
            </div>
          <div className="project-image-group-wrapper">
          <Col sm={6}>
            <A16></A16>
          </Col>
          <Col sm={6} className="smt2">
            <A17></A17>
          </Col>
          </div>
      </Row>
   </Container>
  </Layout>
)

export default Astrid

