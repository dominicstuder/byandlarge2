import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-grid-system';
import AniLink from "gatsby-plugin-transition-link/AniLink"
import BGIMG10 from "../components/backgroundimage10"
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
import A16 from "../components/a16-img";
import A17 from "../components/a17-img";
import { setConfiguration } from 'react-grid-system';
setConfiguration({ gutterWidth:'60'});

const Astrid = () => (
  <Layout>
    <SEO title="Astrid" />
    <Container fluid className="project">
      <Row justify="start" style={{
            position: 'relative',
        }} 
        className="">
          <Col sm={12} className="delay-3 mt5 pb1" style={{
              position: 'relative',
          }}>
     
             <div className="work-page-image-wrapper" 
                  data-sal-duration="500"
                    data-sal="slide-up"
                    data-sal-delay="400"
                    data-sal-easing="ease-in" >
              <BGIMG10 className="border-50-no-hover"></BGIMG10>
            </div>
            </Col>
          </Row>
          <Row className="pt2">
            <Col xs={12} sm={6}>
              <h2 className="header-1 black delay-1">Astrid Dispensary</h2>
            </Col>
            <Col xs={12} sm={6}>
              <h2 className="header-1 black project-date delay-1">2021</h2>
            </Col>
            </Row>
            <Row className="pt2">
            <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8} >
            <p className="hero-sentence black delay-2">
            Astrid is a unique, plant-based medicines dispensary in South Yarra, Melbourne.</p>
            </Col>
            </Row>
            <Row  className="pt6">
            <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
            <div className="project-info">
             <p className="body black text-indent delay-1">
              We worked with Astrid to define and build a brand that communicates Astrid’s values and stands apart in the quickly growing medicinal cannabis industry. 
              We used a refined brand mark and functional secondary elements to achieve a balance between creativity and function across the brand.
              </p>
              <p className="body black text-indent delay-1 mb3">
              From there, we designed and built the Astrid website along with creating a suite of print and digital collateral.
              </p>
            </div>
          </Col> 
          <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={3} >
            <div className="project-info">
              <p className="body small-title">What we did</p>
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
          </Row>
          <Row justify="end" style={{
            marginTop: '3rem',
        }}>

          {/* <div className="project-info-wrapper mt3 mb3">
            <Col sm={6}>
                <h3 className="header-3">The visual identity</h3>
            </Col>
            <Col sm={6}>
                <p className="body copy-delay-1">We wanted to draw on elements that allude to cannabis, while avoiding the usual tropes that are used in the industry. To do this we explored a sea of green concept, using only shades of green throughout the brand. We also looked at the creative and organic aspects of cannabis, landing on found imagery of paintings of plants to communicate this feeling.  
                </p>
                <p className="body text-indent copy-delay-1">We used a refined brand mark and functional secondary elements to achieve a balance between creativity and function across the brand.</p>
            </Col>
          </div> */}
          <Col sm={4} className="pb1"
          data-sal-duration="500"
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-easing="ease-in">
              <A4></A4>
          </Col> 

          <Col sm={4} className="pb1"
          data-sal-duration="500"
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-easing="ease-in">
            <A10></A10>
          </Col> 
          <Col sm={4} className="pb1"
          data-sal-duration="500"
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-easing="ease-in">
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
          {/* <div className="project-info-wrapper mt3 mb3 two">

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
            </div> */}
          <Col sm={12} className="pb1"
            data-sal-duration="500"
            data-sal="slide-up"
            data-sal-delay="400"
            data-sal-easing="ease-in" 
          >
          <A7></A7>
          </Col> 
         {/*  <div className="project-info-wrapper mt3 mb3">

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
          </div> */}
          <div className="project-image-group-wrapper pt5 pb5">

            <Col sm={4} className="mobile-view"
            ata-sal-duration="500"
            data-sal="slide-up"
            data-sal-delay="400"
            data-sal-easing="ease-in" 
            >
            <A3></A3>
            </Col>             
            <Col sm={4} className="mobile-view"
            ata-sal-duration="500"
            data-sal="slide-up"
            data-sal-delay="400"
            data-sal-easing="ease-in" 
            >
            <A8></A8>
            </Col> 
          </div>
         
          <div className="project-image-group-wrapper">
            {/* <Col sm={4} className="mobile-view">
            <A8></A8>
            </Col>  */}
            <Col sm={4} className="mobile-view"
            ata-sal-duration="500"
            data-sal="slide-up"
            data-sal-delay="400"
            data-sal-easing="ease-in" 
            >
            <A13></A13>
            </Col> 
            <Col sm={4} className="mobile-view"
            ata-sal-duration="500"
            data-sal="slide-up"
            data-sal-delay="400"
            data-sal-easing="ease-in" 
            >
            <A9></A9>
            </Col> 

          </div>
          {/* <div className="project-info-wrapper mt3 mb3">

            <Col sm={6}>
            <h3 className="header-3">Supporting collateral</h3>
            </Col>
            <Col sm={6}>
            <p className="body black copy-delay-1">
            We designed a range of collateral for Astrid, including stationary and packaging.
            </p>
            </Col>
            </div> */}
          <div className="project-image-group-wrapper pt5">
          <Col sm={6} className="pb1 ">
            <A16></A16>
          </Col>
          <Col sm={6} className="smt2 pb1" >
            <A17></A17>
          </Col>
          </div>
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
                    to="/masterme"
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

export default Astrid

