import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-grid-system';
// import TransitionLink from "gatsby-plugin-transition-link"
// import AniLink from "gatsby-plugin-transition-link/AniLink"

const Contact = () => (
  <Layout>
    <SEO title="Page Contact" />
    
    <Container fluid>
      <Row justify="start" style={{
            position: 'relative',
            marginTop: '5rem',
            minHeight: '80vh',
        }} >
          <Col sm={6}>
          <h2 className="header-1 black delay-1">Contact</h2>
          <p className="body delay-2" > Get in touch if you would like to talk about a potential project or work opportunities.</p>
          <p className="body delay-3">mail@byandlarge.studio</p>
          </Col>
        </Row>
      </Container>
    </Layout>
)

export default Contact

