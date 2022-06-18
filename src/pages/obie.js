import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-grid-system';
import AniLink from "gatsby-plugin-transition-link/AniLink"
import BGIMG6 from "../components/backgroundimage6"
import O1 from "../components/obie1-img"
import O2 from "../components/obie2-img"
import O3 from "../components/obie3-img"
import O5 from "../components/obie5-img"
import { setConfiguration } from 'react-grid-system';
setConfiguration({ gutterWidth:'60'});

const Obie = () => (
  <Layout>
    <SEO title="Obie" />
    <Container fluid>
      <Row justify="start" style={{
            position: 'relative',
        }} >
        
          <Col sm={12} className="delay-3 mt5 sm-mt-2 pb1" style={{
              position: 'relative',
          }}>
             <div className="work-page-image-wrapper delay-3">
              <BGIMG6 className="border-50-no-hover"></BGIMG6>
            </div>
            </Col>
            <Col sm={12}  md={12}>
          <h2 className="header-1 black delay-1">Obie</h2>
          </Col>
          <Col sm={12}  md={6}>
          <p className="body black delay-2">
            Obie is a personal finance platform that allows people to have clarity over their money, by putting all their information into one place.          </p>
       
          </Col>

            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} >
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
      <Row className="mt2 page-links">
                <Col sm={6} className="delay-1"  style={{
                        marginBottom: '1rem',
                    }}>
                      
                        <p className="body">
                        <AniLink
                            to="/work"
                            exit={{ length: 0.5 }}
                            entry={{ delay: 0.5 }}
                          >   
                          Back to Our Work
                          </AniLink>
                        </p>  
                    
                </Col>
                <Col sm={6} className="delay-1" style={{
                        marginBottom: '1rem',
                    }}>
                            
                      <p className="body">
                      <AniLink
                            to="/drive-change"
                            exit={{ length: 0.5 }}
                            entry={{ delay: 0.5 }}
                          >  
                      Next Project
                      </AniLink>
                      </p>
                  
                </Col>
              </Row>
   </Container>
  </Layout>
)

export default Obie

