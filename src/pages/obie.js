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
          <p className="body black delay-2">
            Obie is a personal finance platform that allows people to have clarity over their money, by putting all their information into one place.          </p>
          </div>
          </Col>

          <Col sm={12} className="delay-3 mt5 sm-mt-2 pb1" style={{
              position: 'relative',
          }}>
             <div className="work-page-image-wrapper delay-3">
              <BGIMG6 className="border-50-no-hover"></BGIMG6>
            </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} >
            <div className="project-info delay-2">
              <p className="body small-title">What we did</p>
              <p className="scope-list">
                <ul>
                  <li>Strategy</li>
                  <li>Brand Identity</li>
                  <li>Graphic Design</li>
                  <li>Digital Design</li>
                  <li>Website Development</li>
                </ul>
              </p>
            </div>
          </Col> 
          <Col sm={6} className="pb1 delay-1">
            <O1></O1>
          </Col> 
          <Col sm={6} className="pb1 delay-1">
            <O2></O2>
          </Col> 
          <Col sm={12} className="pb1 delay-1">
            <O3></O3>
          </Col> 
          <Col sm={12} className="pb1 delay-1">
            <O5></O5>
          </Col> 
      </Row>
   </Container>
  </Layout>
)

export default Obie

