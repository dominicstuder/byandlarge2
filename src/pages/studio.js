import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container, Row, Col } from 'react-grid-system';
// import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import ArrowWhite from "../assets/arrow-small-white.svg";
import { setConfiguration } from 'react-grid-system';
setConfiguration({ gutterWidth:'60'});

const Studio = () => (
  <Layout>
    <SEO title="Studio" />
    <Container fluid style={{
            position: 'relative', marginTop: '5em',
          }} className="section-2">
              <Row style={{paddingTop: '1em',
                  position: 'relative'
                }}>
                {/* <Col  md={12} lg={12} xl={12} xxl={12}  className="delay-1">
                  <h3 className="small-body-copy">What we do</h3>
                </Col> */}
                <Col  md={12} lg={6} xl={6} xxl={5}  className="delay-2 copy-block"
                >
                  <h3 className="header-3">We work closely with our clients to bring good ideas to life.
</h3>
                </Col>
                </Row>
                <Row style={{
                  position: 'relative'
                }}>
                <Col md={12} lg={6} xl={6} xxl={4} className="delay-3" 
                 style={{
                  position: 'relative', paddingBottom: '2em', paddingTop: '2em',
                }}
                
                >
                  <p className="body-copy">We are a small studio that works across brand strategy, brand identity, website design &#38; development to create complete, well thought out outcomes.</p>
                </Col>

            </Row>
      </Container>
      

    </Layout>
)

export default Studio

