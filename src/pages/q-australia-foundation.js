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
import Image4 from "../components/image4"
import Image6 from "../components/image6"


const QAus = () => (
  <Layout>
    <SEO title="Q Australia Foundation" />
    <Container fluid>
      <Row justify="start" style={{
            position: 'relative',
            marginTop: '10rem',
        }} >
          <Col sm={12}>
          <h2 className="header-1 black text-center">Q Australia Foundation</h2>
          </Col>
          
          <Col sm={12} className="delay-1 pb1" style={{
              position: 'relative',
              marginTop: '10rem',
          }}>
              <A1></A1>
          </Col> 
          <Col sm={6}>
            <div className="project-info">
              <p className="body text-">Scope</p>
              <p className="body">
                {/* <ul>
                  <li>Strategy</li>
                  <li>Brand Identity</li>
                  <li>Graphic Design</li>
                  <li>Digital Design</li>
                  <li>Developmemnt</li>
                </ul> */}
              </p>
            </div>
            <div className="project-info">
              <p className="body text-">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
              <p className="body text-indent">Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </Col> 
          <Col sm={6} className="pb1">
            <A2></A2>
          </Col> 
          {/* <Col sm={6} className="pb1">
            <div className="project-info">
              <p className="body text-">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
              <p className="body text-indent">Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </Col>  */}
          <Col sm={12} className="pb1">
              <A3></A3>
          </Col> 
          <Col sm={12} className="pb1">
          <A4></A4>
          </Col> 
          <Col sm={12} className="pb1">
              <Image6></Image6>
          </Col> 
          <Col sm={6} className="pb1">
              <Image4></Image4>
          </Col> 
      </Row>
   </Container>
  </Layout>
)

export default QAus

