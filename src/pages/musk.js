import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-grid-system';
import AniLink from "gatsby-plugin-transition-link/AniLink"
import IMG from "../components/backgroundimage5"
import MU1 from "../components/mu01-img"
import MU2 from "../components/mu02-img"
import MU3 from "../components/mu03-img"
import MU4 from "../components/mu04-img"
import MU5 from "../components/mu05-img"
import MU6 from "../components/mu06-img"
import MU7 from "../components/mu07-img"
import MU8 from "../components/mu08-img"
import MU9 from "../components/mu09-img"
import MU10 from "../components/mu10-img"
import MU11 from "../components/mu11-img"


const Musk = () => (
  <Layout>
    <SEO title="Musk" />
    <div style={{marginTop:'10em',}}>
    <Container fluid>
    <Row justify="start" style={{
            position: 'relative',
            marginTop: '10rem',
        }} >
          <Col sm={6}>
          <h2 className="header-1 black copy-delay-1">Musk</h2>
          </Col>
          <Col xs={6} sm={3} md={3} lg={3} xl={2} xxl={2} >
            <div className="project-info copy-delay-2">
              <p className="body small-title">Industry</p>
              <p className="scope-list">
                <ul>
                  <li>Hospitality</li>
                </ul>
              </p>
              <p className="body small-title">Year</p>
              <p className="scope-list">
                <ul>
                  <li>2019</li>
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
                </ul>
              </p>
            </div>
          </Col> 
          <Col sm={12} className="delay-3 mt5 sm-mt-2 pb1" style={{
              position: 'relative',
          }}>
             <div className="work-page-image-wrapper">
               <IMG></IMG>
              </div>
              </Col> 
              {/* <Col className="pb1" sm={12}>
                  <MU1></MU1>
              </Col>  */}
              <Col className="pb1" sm={12}>
                  <MU2></MU2>
              </Col> 
              <Col className="pb1" sm={12}>
                  <MU3></MU3>
              </Col> 
              <Col className="pb1" sm={12}>
                  <MU4></MU4>
              </Col> 
              <Col className="pb1" sm={6}>
                  <MU5></MU5>
              </Col> 
              <Col className="pb1" sm={6}>
                  <MU6></MU6>
              </Col> 
              {/* <Col className="pb1" sm={6}>
                  <MU7></MU7>
              </Col> 
              <Col className="pb1" sm={6}>
                  <MU8></MU8>
              </Col> */}
              <Col className="pb1" sm={6}>
                  <MU9></MU9>
              </Col> 
              <Col className="pb1" sm={6}>
                  <MU10></MU10>
              </Col> 
              <Col className="pb1" sm={12}>
                  <MU11></MU11>
              </Col> 
      </Row>

    </Container>
    </div>

  </Layout>
)

export default Musk

