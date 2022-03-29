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
    <SEO title="Page Contact" />
    <Container fluid style={{
            position: 'relative', marginTop: '2em',
          }} className="section-2">
              <Row style={{paddingTop: '1em',
                  position: 'relative'
                }}>
                <Col  md={12} lg={12} xl={12} xxl={12}  className="">
                  <h3 className="small-body-copy">What we do</h3>
                </Col>
                <Col  md={12} lg={6} xl={6} xxl={5}  className="delay-3 copy-block"
                >
                  <h3 className="header-3">We help to bring good ideas to life, communicating to the world.
</h3>
                </Col>
                <Col md={12} lg={4} xl={4} xxl={4} 
                 style={{
                  position: 'relative', paddingBottom: '2em', paddingTop: '2em',
                }}
                
                >
                  <p className="body-copy">We aim to work with clients who are doing good in the world and adding value to people's lives. We use strategic thinking, design and technology to create full stack solutions. </p>
                </Col>
                <Col md={12} lg={12} xl={12} xxl={12} >
                <div className="primary-button"><AniLink
                          cover  to="/work" bg="#1E1E1E"
                          direction="left"
                          duration={1.5}
                        ><ArrowWhite className="small-arrow"></ArrowWhite><span className="link-text">View all our work</span></AniLink></div>
                  </Col>
            </Row>
      </Container>
      <Container fluid className="section-3">
              <Row style={{paddingTop: '1em',
                  position: 'relative'
                }}>
                <Col  md={12} lg={12} xl={12} xxl={12}  className="">
                  <h3 className="small-body-copy">Capabilities</h3>
                </Col>
                <Col  md={12} lg={12} xl={12} xxl={12}  className="delay-3 copy-block"
              >
                  <h3 className="header-3">The skills and tools for a digital world</h3>
                </Col>
                <Col md={12} lg={4} xl={4} xxl={4}
               
                >
                  <ul className="services-list">
                      <li>Strategy</li>
                      <li>Brand Strategy</li>
                      <li>UX Strategy</li>
                      <li>Information Architecture</li>
                      <li>Content Strategy</li>
                      <li>Business Model Design</li>
                      </ul>
                </Col>
                <Col md={12} lg={4} xl={4} xxl={4} >
                <ul className="services-list">
                      <li>Design</li>
                      <li>  Creative Direction</li>
                      <li>UX/UI Design</li>
                      <li>Prototyping</li>
                      <li>Graphic Design</li>
                      <li>Content Design</li>
                      </ul>
                </Col>
                <Col md={12} lg={4} xl={4} xxl={4} >
                <ul className="services-list">
                      <li>Technology</li>
                      <li>Front-end Development</li>
                      <li>Ecommerce</li>
                      <li>Content managment systems</li>

                      </ul>
                </Col>
                {/* <Col md={12} lg={12} xl={12} xxl={12} >
                <div className="primary-button"><AniLink
                          cover  to="/work" bg="#1E1E1E"
                          direction="left"
                          duration={1.5}
                        ><ArrowWhite className="small-arrow"></ArrowWhite><span className="link-text">View all our work</span></AniLink></div>
                  </Col> */}
            </Row>
      </Container>

    </Layout>
)

export default Studio

