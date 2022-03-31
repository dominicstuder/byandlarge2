import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container, Row, Col } from 'react-grid-system';
// import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import ArrowWhite from "../assets/arrow-small-white.svg";

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
      <Container fluid className="section-3">
              <Row style={{paddingTop: '1em',
                  position: 'relative'
                }}>
                {/* <Col  md={12} lg={12} xl={12} xxl={12}  className="delay-4">
                  <h3 className="small-body-copy">Capabilities</h3>
                </Col> */}
                <Col  md={12} lg={12} xl={12} xxl={12}  className="delay-5 copy-block pb3"

              >
                <div 
                  data-sal="slide-up"
                  data-sal-delay="100"
                  data-sal-easing="ease"
                  data-sal-duration="500"
                >
                  <h3 className="header-3">What we do</h3>
                  </div>
                </Col>
                <Col md={12} lg={4} xl={4} xxl={4}
               
                >
                      <div                   
                      data-sal="slide-up"
                        data-sal-delay="100"
                        data-sal-easing="ease"
                        data-sal-duration="500"
                        >
                  <ul className="services-list delay-5">
                      <li>Strategy</li>
                      <li>Brand Strategy</li>
                      <li>UX Strategy</li>
                      <li>Information Architecture</li>
                      <li>Content Strategy</li>
                      <li>Business Model Design</li>
                      </ul>
                      </div>
                </Col>
                <Col md={12} lg={4} xl={4} xxl={4} >
                  <div                   
                      data-sal="slide-up"
                        data-sal-delay="200"
                        data-sal-easing="ease"
                        data-sal-duration="500"
                        >
                <ul className="services-list delay-5"
      
                >
                      <li>Design</li>
                      <li>  Creative Direction</li>
                      <li>UX/UI Design</li>
                      <li>Prototyping</li>
                      <li>Graphic Design</li>
                      <li>Content Design</li>
                      </ul>
                      </div>
                </Col>
                <Col md={12} lg={4} xl={4} xxl={4} >
                <div                   
                      data-sal="slide-up"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                        data-sal-duration="500"
                        >
                <ul className="services-list delay-5">
                      <li>Technology</li>
                      <li>Front-end Development</li>
                      <li>Ecommerce</li>
                      <li>Content managment systems</li>

                      </ul>
                      </div>
                </Col>
                <Col md={12} lg={12} xl={12} xxl={12} >
                <div className="primary-button delay-1"><AniLink
                          to="/contact"
                          exit={{ length: 0.5 }}
                          entry={{ delay: 0.5 }}
                        ><ArrowWhite className="small-arrow"></ArrowWhite><span className="link-text">Contact us</span></AniLink></div>
                  </Col>
            </Row>
      </Container>

    </Layout>
)

export default Studio

