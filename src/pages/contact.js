import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-grid-system';
import { setConfiguration } from 'react-grid-system';
setConfiguration({ gutterWidth:'60'});
const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    
    <Container fluid>
      <Row justify="start" style={{
            position: 'relative',
            marginTop: '5rem',
            minHeight: '80vh',
        }} >
          <Col sm={12} lg={8}>
          {/* <h2 className="header-1 black delay-1">Contact</h2> */}
          <p className="header-3 delay-2" > Get in touch if you would like to talk about a potential project or work opportunities.</p>
          <p className="header-3 delay-3"><a href="mailto:mail@byandlarge.studio">mail@byandlarge.studio</a></p>
          </Col>
        </Row>
      </Container>
    </Layout>
)

export default Contact

