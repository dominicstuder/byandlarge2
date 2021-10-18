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
            marginTop: '10rem',
        }} >
          <Col sm={6}>
          <h2 className="header-1 black copy-delay-1">Astrid</h2>
          </Col>
          <Col sm={2}>
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
          <Col sm={2}>
            <div className="project-info copy-delay-3">
              <p className="body small-title">Year</p>
              <p className="scope-list">
                <ul>
                  <li>2021</li>
                </ul>
              </p>
            </div>
          </Col> 
          <Col sm={12} className="delay-3" style={{
              position: 'relative',
              marginTop: '10rem',
              marginBottom: '1rem',
          }}>
            <BGIMG></BGIMG>
            </Col>
          <Col sm={12} className="pb1">
              <A3></A3>
          </Col> 
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

