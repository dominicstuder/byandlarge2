import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Container, Row, Col } from 'react-grid-system';
import Arrow from "../assets/arrow.svg";
import BGIMG from "../components/backgroundimage1"

const Work = () => (
  <Layout>
    <SEO title="Work" />
    <Container fluid>
        <Row justify="start" style={{
          position: 'relative',
          marginTop: '10rem',
        }}
          >

          <Col sm={4}>
            <BGIMG></BGIMG>
            <div className="arrow-hover-wrapper">
              <h2 className="header-2 black"><AniLink fade to="/astrid/">Astrid Dispensary</AniLink></h2>
              <Arrow className="arrow"></Arrow>
            </div>
            </Col>
        
          <Col sm={4}>
            <BGIMG></BGIMG>
            <div className="arrow-hover-wrapper">
              <h2 className="header-2 black"><AniLink fade to="/astrid/">Astrid Dispensary</AniLink></h2>
              <Arrow className="arrow"></Arrow>
            </div>
            </Col>
       

          <Col sm={4}>
            <BGIMG></BGIMG>
            <div className="arrow-hover-wrapper">
              <h2 className="header-2 black"><AniLink fade to="/astrid/">Astrid Dispensary</AniLink></h2>
              <Arrow className="arrow"></Arrow>
            </div>
            </Col>
        
          <Col sm={4}>
            <BGIMG></BGIMG>
            <div className="arrow-hover-wrapper">
              <h2 className="header-2 black"><AniLink fade to="/astrid/">Astrid Dispensary</AniLink></h2>
              <Arrow className="arrow"></Arrow>
            </div>
            </Col>
            <Col sm={4}>
            <BGIMG></BGIMG>
            <div className="arrow-hover-wrapper">
              <h2 className="header-2 black"><AniLink fade to="/astrid/">Astrid Dispensary</AniLink></h2>
              <Arrow className="arrow"></Arrow>
            </div>
            </Col>
            <Col sm={4}>
            <BGIMG></BGIMG>
            <div className="arrow-hover-wrapper">
              <h2 className="header-2 black"><AniLink fade to="/astrid/">Astrid Dispensary</AniLink></h2>
              <Arrow className="arrow"></Arrow>
            </div>
            </Col>
        </Row>
      </Container>
  </Layout>
)

export default Work

