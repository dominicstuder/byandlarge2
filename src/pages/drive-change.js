import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-grid-system';
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import BGIMG from "../components/backgroundimage1"
import IMG from "../components/image"
import D1 from "../components/d1-img"
import D2 from "../components/d2-img"
import D3 from "../components/d3-img"
import D4 from "../components/d4-img"
import D5 from "../components/d5-img"
import Image4 from "../components/image4"
import Image6 from "../components/image6"
import BGIMG7 from "../components/backgroundimage7"

const DriveChange = () => (
  <Layout>
    <SEO title="Drive Change" />
    <Container fluid>
      <Row justify="start" style={{
            position: 'relative',
            marginTop: '10rem',
        }} >
          <Col sm={6}>
          <h2 className="header-1 black copy-delay-1">Drive Change</h2>
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
          <Col sm={12} className="delay-1" style={{
              position: 'relative',
              marginTop: '10rem',
              marginBottom: '1rem',
          }}>
  
          {/* <BGIMG7></BGIMG7> */}
          <D1></D1>
          </Col>
          <Col sm={6} className="delay-1" style={{
              marginBottom: '1rem',
          }}>
          <D2></D2>
          </Col> 
          <Col sm={6} className="pb1">
            <div className="project-info">
              <p className="body">Drive Change is a campaign formed by a collective of some of Australia’s leaders in the cannabis industry. The campaign's goal is to gather support to help change the current laws that are restricting patients' ability to use medicinal cannabis.</p>
              <p className="body text-indent">We helped by creating the Drive Change brand, campaign design and digital assets. The visual direction needed to build a sense of community while being forward looking and challenging current perceptions of what a cannabis campaign can be.</p>
            </div>
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
          <D5></D5>
          </Col> 
      </Row>
   </Container>
  </Layout>
)

export default DriveChange

