import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-grid-system';
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import BGIMG4 from "../components/backgroundimage4"
import IMG from "../components/image"


const Rdp = () => (
  <Layout>
    <SEO title="RDP" />
    <Container fluid>
      <Row justify="start" style={{
            position: 'relative',
            marginTop: '10rem',
        }} >
                    <Col sm={10}>
          <h2 className="header-1 black">RDP</h2>
          </Col>
          <Col sm={2}>
            <div className="project-info">
              <p className="body text-">Scope</p>
              <p className="body">
                <ul>
                  <li>Strategy</li>
                  <li>Brand Identity</li>
                  <li>Graphic Design</li>
                  <li>Digital Design</li>
                  <li>Developmemnt</li>
                </ul>
              </p>
            </div>
          </Col> 
          <Col sm={12} className="delay-1 pb1" style={{
              position: 'relative',
              marginTop: '10rem',
          }}>
              <BGIMG4></BGIMG4>
          </Col> 
          <Col sm={6} className="pb1">
          <BGIMG4></BGIMG4>
          </Col> 
          <Col sm={6} className="pb1">
            <div className="project-info">
              <p className="body text-">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
              <p className="body text-indent">Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </Col> 
          <Col sm={12} className="pb1">
          <BGIMG4></BGIMG4>
          </Col> 
          <Col sm={12} className="pb1">
          <BGIMG4></BGIMG4>
          </Col> 
          <Col sm={12} className="pb1">
          <BGIMG4></BGIMG4>
          </Col> 
      </Row>
   </Container>
  </Layout>
)

export default Rdp

