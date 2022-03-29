import React, { useState, useEffect} from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Waypoint } from 'react-waypoint';
import BGIMG from "../components/backgroundimage1"
import BGIMG2 from "../components/backgroundimage2"
import BGIMG3 from "../components/backgroundimage3"
import BGIMG4 from "../components/backgroundimage4"
import BGIMG5 from "../components/backgroundimage5"
import BGIMG6 from "../components/backgroundimage6"
import BGIMG7 from "../components/backgroundimage7"
import IMG4 from "../components/image4"
// import IMG5 from "../components/image5"
// import IMG6 from "../components/image6"

import { Container, Row, Col } from 'react-grid-system';
import Arrow from "../assets/arrow.svg";
import ArrowWhite from "../assets/arrow-small-white.svg";
// import styled from 'styled-components';
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
// import posed from 'react-pose';
import clip from '../assets/feature_7.mp4'; 
import astridthumb from '../assets/astrid_thumb.mp4'; 
import dcthumb from '../assets/dc_thumb2.mp4'; 
// import Poster from '../assets/bg.png';  
const IndexPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <Layout style={{
      backgroundColor: '#F2E4CC',
    }}>
      <SEO title="Home" />

      <Container fluid className="video-container">
            <Row justify="between" style={{
                 marginTop: '10em',
                }} className="video-section">
                   <Col sm={12} md={12} lg={4} xl={4} xxl={4} style={{
                      position: 'relative',
              
                    }}> <h1 
                    className="intro-copy delay-1">A strategy, design and technology studio, specialising in transforming brands.</h1>
                      </Col>
                  <Col md={12} lg={8} xl={8} xxl={8}  style={{
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
    
          }}> <h1 
          className="intro-copy delay-1">Some of our recent work</h1>
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
                    cover  to="/astrid" bg="#1E1E1E"
                    direction="left"
                    duration={1.5}
                  >
                          <div className="item">
                          <div className="video-wrapper-small" style={{
                                
                              }}>
                            <video autoPlay loop muted className="background-video">
                                    <source src={astridthumb} type='video/mp4' />
                            </video>
                          </div>
                            <Col sm={12} md={12} lg={12} xl={12} xxl={12} style={{
                              position: 'relative'
                              }}>
                          <div className="inner">Astrid<Arrow className="arrow"></Arrow></div>
                          </Col>
                          </div>
                  </AniLink>
                                  
                  <AniLink
                    cover  to="/drive-change" bg="#1E1E1E"
                    direction="left"
                    duration={1.5}
                  >
                          <div className="item">
                          <div className="video-wrapper-small" style={{
                                
                              }}>
                            <video autoPlay loop muted className="background-video">
                                    <source src={dcthumb} type='video/mp4' />
                            </video>
                          </div>
                            <Col sm={12} md={12} lg={12} xl={12} xxl={12} style={{
                              position: 'relative'
                              }}>
                          <div className="inner">Drive change<Arrow className="arrow"></Arrow></div>
                          </Col>
                          </div>
                  </AniLink>
                  </Row>         
                  </div>

                  <Col md={12} lg={12} xl={12} xxl={12} >
                <div className="primary-button"><AniLink
                          cover  to="/work" bg="#1E1E1E"
                          direction="left"
                          duration={1.5}
                        ><ArrowWhite className="small-arrow"></ArrowWhite><span className="link-text">View all our work</span></AniLink></div>
                  </Col>
                  
       
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

