import React, { useState, useEffect} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container, Row, Col } from 'react-grid-system';
import Arrow from "../assets/arrow.svg";
import ArrowWhite from "../assets/arrow-small-white.svg";
import AniLink from "gatsby-plugin-transition-link/AniLink"
// import clip from '../assets/feature_7.mp4'; 
// import astridthumb from '../assets/astrid_thumb.mp4'; 
// import dcthumb from '../assets/dc_thumb2.mp4'; 
import { setConfiguration } from 'react-grid-system';
setConfiguration({ gutterWidth:'60'});


const IndexPage = () => {
  return (
    <Layout style={{
      backgroundColor: '#F2E4CC',
    }}>
      <SEO title="Home" />

      <Container fluid className="video-container">
      <Row justify="start" style={{
                 marginTop: '4em',
                }} className="video-section">
                  <Col md={12} lg={8} xl={8} xxl={6}  style={{
                    position: 'relative',
                    marginTop: '5em',
                  }}
                  className="video-container">
          
        
                  <div className="video-wrapper delay-2" style={{
                        
                        }}>
                           <AniLink
                    to="/work"
                    exit={{ length: 0.5 }}
                    entry={{ delay: 0.5 }}
                  >     
                    {/* <video autoPlay loop muted className="background-video">
                            <source src={clip} type='video/mp4' />
                    
                    </video> */}
                    </AniLink>
                  </div>
      
                 </Col>
                </Row>
                 
             <Row justify="start" style={{
                 marginTop: '10em',
                }} className="home-page-intro">
                  <Col sm={12} lg={4} xl={4} xxl={4} className="body">About us</Col>
                   <Col sm={12} md={6} lg={8} xl={8} xxl={6} style={{
                      position: 'relative',
              
                    }}> <h1 
                    className="body delay-1"><div       
                    data-sal="slide-up"
                    data-sal-delay="100"
                    data-sal-easing="ease"
                    data-sal-duration="500">By and Large is an independent,
                   multidisciplinary</div> 
                   <div   data-sal="slide-up"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    data-sal-duration="500">design studio. We create positive impact</div> 
                     <div   data-sal="slide-up"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    data-sal-duration="500">through creative and considered strategy,</div>
                     <div   data-sal="slide-up"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    data-sal-duration="500">
                     design, content creation and use
                    </div>
                    <div   data-sal="slide-up"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    data-sal-duration="500">
                    of technology.
                    </div>
                    </h1>
                    <h1 
                    className="body delay-1"><div       
                    data-sal="slide-up"
                    data-sal-delay="100"
                    data-sal-easing="ease"
                    data-sal-duration="500"
                    className="mt1 text-indent"
                    >    Currently based in Newcastle, NSW. We work </div>
                   <div   data-sal="slide-up"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    data-sal-duration="500">with clients around Australia and beyond.</div> 
                  
                    </h1>
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
                  <h3 className="body">What we do</h3>
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
                      <li>Creative Direction</li>
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
                      <li>Content management systems</li>

                      </ul>
                      </div>
                </Col>
                <Col md={12} lg={12} xl={12} xxl={12} >
                <div className="primary-button delay-1 mt5"><AniLink
                          to="/contact"
                          exit={{ length: 0.5 }}
                          entry={{ delay: 0.5 }}
                        ><ArrowWhite className="small-arrow"></ArrowWhite><span className="link-text">Contact us</span></AniLink></div>
                  </Col>
            </Row>
      </Container>
      {/* <Container fluid>
        <Row justify="between" style={{
            position: 'relative',
            paddingTop: '15em',
          }}>
            <Col sm={12} md={12} lg={10} xl={10} xxl={12} style={{
            position: 'relative',
    
          }}> <h1 
          className="intro-copy delay-1">A strategy, design and technology studio, specialising in transforming brands.</h1>
            </Col>
          
          </Row>
      </Container>
      <Container fluid className="video-container">
            <Row justify="between" style={{
                 
                }} className="video-section">
                  <Col md={12} lg={10} xl={10} xxl={10}  style={{
                    position: 'relative'
                  }}
                  className="video-container">
          
        
                  <div className="video-wrapper delay-2" style={{
                        
                        }}>
                    <video autoPlay loop muted className="background-video">
                            <source src={clip} type='video/mp4' />
                    </video>
                  </div>
                </Col>
              </Row>
            </Container> */}
       
      <Container fluid className="section-4">
            <Row justify="between" style={{
              paddingTop: '1em',
              position: 'relative',
            }}>
                {/* <Col  md={12} lg={12} xl={12} xxl={12}  className="delay-3">
                  <h3 className="small-body-copy">Recent case studies</h3>
                </Col> */}
                <Col sm={12} md={12} lg={10} xl={10} xxl={12} style={{
            position: 'relative',
    
          }}> 
          <div 
            data-sal="slide-up"
            data-sal-delay="200"
            data-sal-easing="ease"
            data-sal-duration="500"
            >
          <h1 
          className="intro-copy delay-1">Some of our recent work</h1>
          </div>
            </Col>
              {/* <Col  md={12} lg={12} xl={12} xxl={12}  className="delay-3 copy-block">
                  <h3 className="header-3">Recent work</h3>
                </Col> */}
              </Row>
              <div className="work-list">
              <Row style={{
                position: 'relative',
              }}>
                        {/* <AniLink
                          cover  to="/work" bg="#1E1E1E"
                          direction="left"
                          duration={1.5}
                        ><div className="item">
                               
                             <div className="video-wrapper-small" style={{
                                
                              }}>
                            <video autoPlay loop muted className="background-video">
                                    <source src={clip} type='video/mp4' />
                            </video>
                          </div>
                            <Col sm={12} md={12} lg={12} xl={12} xxl={12} style={{
                              position: 'relative'
                              }}>
                          <div className="inner">Master Me<Arrow className="arrow"></Arrow></div>

                          </Col>
                          
                          </div></AniLink>
               
             */}
                
                
            
                  <AniLink
                    to="/astrid"
                    exit={{ length: 0.5 }}
                    entry={{ delay: 0.5 }}
                  >
                                    <div 
                    data-sal="slide-up"
                    data-sal-delay="200"
                    data-sal-easing="ease"
                    data-sal-duration="500"
                    >   
                          <div className="item delay-2">
                          <div className="video-wrapper-small" style={{
                                
                              }}>
                            {/* <video autoPlay loop muted className="background-video">
                                    <source src={astridthumb} type='video/mp4' />
                            </video> */}
                          </div>
                            <Col sm={12} md={12} lg={12} xl={12} xxl={12} style={{
                              position: 'relative'
                              }}>
                          <div className="inner">Astrid<Arrow className="arrow"></Arrow></div>
                          </Col>
                          </div>
                          </div>
                  </AniLink>
            

                  <AniLink
                    to="/drive-change"
                    exit={{ length: 0.5 }}
                    entry={{ delay: 0.5 }}
                  >     
                    <div 
                    data-sal="slide-up"
                    data-sal-delay="200"
                    data-sal-easing="ease"
                    data-sal-duration="500"
                    >   
                          <div className="item delay-2">
                          <div className="video-wrapper-small" style={{
                                
                              }}>
                            {/* <video autoPlay loop muted className="background-video">
                                    <source src={dcthumb} type='video/mp4' />
                            </video> */}
                          </div>
                            <Col sm={12} md={12} lg={12} xl={12} xxl={12} style={{
                              position: 'relative'
                              }}>
                          <div className="inner">Drive change<Arrow className="arrow"></Arrow></div>
                          </Col>
                          </div>
                     </div>
                  </AniLink>
                  <AniLink
                    to="/drive-change"
                    exit={{ length: 0.5 }}
                    entry={{ delay: 0.5 }}
                  >     
                    <div 
                    data-sal="slide-up"
                    data-sal-delay="200"
                    data-sal-easing="ease"
                    data-sal-duration="500"
                    >   
                          <div className="item delay-2">
                          <div className="video-wrapper-small" style={{
                                
                              }}>
                            {/* <video autoPlay loop muted className="background-video">
                                    <source src={dcthumb} type='video/mp4' />
                            </video> */}
                          </div>
                            <Col sm={12} md={12} lg={12} xl={12} xxl={12} style={{
                              position: 'relative'
                              }}>
                          <div className="inner">Great Forest Trail Marathon<Arrow className="arrow"></Arrow></div>
                          </Col>
                          </div>
                     </div>
                  </AniLink>
              
                  </Row>         
                  </div>
                  <div 
                    data-sal="slide-up"
                    data-sal-delay="200"
                    data-sal-easing="ease"
                    data-sal-duration="500"
                    >   
                  <Col md={12} lg={12} xl={12} xxl={12} >
                <div className="primary-button delay-1 mt5"><AniLink
                          to="/work"
                          exit={{ length: 0.5 }}
                          entry={{ delay: 0.5 }}
                        ><ArrowWhite className="small-arrow"></ArrowWhite><span className="link-text">View all our work</span></AniLink></div>
                  </Col>
                  </div>
       
        </Container>
      {/* <Container fluid style={{
            position: 'relative', marginTop: '5em'
          }} className=" ">
      <Row justify="between" style={{
            position: 'relative',
          }}>
            <Col sm={12} md={8} lg={8} xl={8} xxl={6} style={{
            position: 'relative'
          }}>
            <div className="very-big-title">
              Read more
            </div>
            <div className="very-big-link">
            <AniLink
                cover  to="/studio" bg="#1E1E1E"
                direction="left"
                duration={1.5}
                delay={1}
              >
                  Studio</AniLink>
              </div>
              <div className="very-big-link">
              <AniLink
                cover  to="/work"bg="#1E1E1E"
                direction="left"
                duration={1.5}
              >Work</AniLink>
              </div>
          </Col>
          </Row>
        </Container> */}

    </Layout>
  )
}

export default IndexPage

