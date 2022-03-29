import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-grid-system';
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import BGIMG6 from "../components/backgroundimage6"
import O1 from "../components/obie1-img"
import O2 from "../components/obie2-img"
import O3 from "../components/obie3-img"
import O5 from "../components/obie5-img"


const Obie = () => (
  <Layout>
    <SEO title="Obie" />
    <Container fluid>
      <Row justify="start" style={{
            position: 'relative',
            marginTop: '10rem',
        }} >
        <Col sm={6}>
          <h2 className="header-1 black delay-1">Obie</h2>
          <div>
          <p className="intro-copy black copy-delay-1">
          Astrid is an entirely unique, plant-based medicines dispensary in South Yarra, Melbourne. 
          The team at Astrid focus on providing a high level of care to their patients and empowering them through education and advocacy. 
          </p>
          </div>
          </Col>

          <Col sm={12} className="delay-3 mt5 sm-mt-2 pb1" style={{
              position: 'relative',
          }}>
             <div className="work-page-image-wrapper">
              <BGIMG6></BGIMG6>
            </div>
            </Col>
            <Col xs={6} sm={3} md={3} lg={3} xl={2} xxl={2} >
            <div className="project-info delay-2">
              <p className="body small-title">What we did</p>
              <p className="scope-list">
                <ul>
                  <li>Strategy</li>
                  <li>Brand Identity</li>
                  <li>Graphic Design</li>
                  <li>Digital Design</li>
                  <li>Development</li>
                </ul>
              </p>
            </div>
          </Col> 
        
          <Col sm={12} style={{
              marginBottom: '2rem',
          }}>
            <div className="project-info">
              <p className="body ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
              <p className="body text-indent">Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </Col> 
          <Col sm={6} className="pb1">
            <O1></O1>
          </Col> 
          <Col sm={6} className="pb1">
            <O2></O2>
          </Col> 
          <Col sm={12} className="pb1">
            <O3></O3>
          </Col> 
          <Col sm={12} className="pb1">
            <O5></O5>
          </Col> 
      </Row>
   </Container>
  </Layout>
)

export default Obie

