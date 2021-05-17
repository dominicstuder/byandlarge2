import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-grid-system';
import AniLink from "gatsby-plugin-transition-link/AniLink"
import IMG from "../components/image"


const Musk = () => (
  <Layout>
    <SEO title="Musk" />
    <div style={{marginTop:'10em',}}>
    <Container fluid>
      <Row justify="start" style={{
            position: 'relative',
            marginTop: '10rem',
        }} >
          <Col sm={3}>
            <h2 className="header-2 black"><AniLink fade to="/astrid/">Musk</AniLink></h2>
          </Col>   
            <Col
            className="pb1"
            sm={12}>
                  <IMG></IMG>
              </Col> 
              <Col className="pb1" sm={12}>
                  <IMG></IMG>
              </Col> 
      </Row>
      <Row>
      <Col
            className="pb1"
            sm={6}>
                  <IMG></IMG>
              </Col> 
              <Col className="pb1" sm={6}>
                  <IMG></IMG>
              </Col> 
      </Row>

    </Container>
    </div>

  </Layout>
)

export default Musk

