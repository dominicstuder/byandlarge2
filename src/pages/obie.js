import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-grid-system';
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import BGIMG6 from "../components/backgroundimage6"
import IMG from "../components/image"
import O2 from "../components/o2-img"
import O3 from "../components/o3-img"
import O4 from "../components/o4-img"


const Obie = () => (
  <Layout>
    <SEO title="Obie" />
    <Container fluid>
      <Row justify="start" style={{
            position: 'relative',
            marginTop: '5rem',
        }} >
        <Col sm={6}>
          <h2 className="header-1 black delay-1">Obie</h2>
          </Col>
          <Col sm={2}>
            <div className="project-info delay-2">
              <p className="body small-title">Scope</p>
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
          <Col sm={2}>
            <div className="project-info delay-3">
              <p className="body small-title">Year</p>
              <p className="scope-list">
                <ul>
                  <li>2021</li>
                </ul>
              </p>
            </div>
          </Col> 
          <Col sm={12} className="delay-3 pb1 mt5 sm-mt-2" style={{
              position: 'relative',
          }}>
              <BGIMG6></BGIMG6>
          </Col> 

          <Col sm={12} style={{
              marginBottom: '2rem',
          }}>
            <div className="project-info">
              <p className="body ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
              <p className="body text-indent">Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </Col> 
          <Col sm={12} style={{
              marginBottom: '2rem',
          }}>
          <O3></O3>
          </Col> 
          <Col sm={12} style={{
              marginBottom: '2rem',
          }}>
          <O4></O4>
          </Col> 
          <Col sm={12} style={{
              marginBottom: '2rem',
          }}>
          <O2></O2>
          </Col> 
      </Row>
   </Container>
  </Layout>
)

export default Obie

