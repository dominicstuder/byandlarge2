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
// import IMG4 from "../components/image4"
// import IMG5 from "../components/image5"
// import IMG6 from "../components/image6"

import { Container, Row, Col } from 'react-grid-system';
import Arrow from "../assets/arrow-small.svg";
// import ArrowWhite from "../assets/arrowwhite.svg";
// import styled from 'styled-components';
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
// import posed from 'react-pose';
import clip from '../assets/video-test-4.mp4'; 
// import Poster from '../assets/bg.png';  
const IndexPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <Layout style={{
      backgroundColor: '#F2E4CC',
    }}>
      <SEO title="Home" />
      <Container fluid>
        <Row justify="between" style={{
            position: 'relative',
          }}>
            <Col sm={12} md={12} lg={12} xl={12} xxl={12} style={{
            position: 'relative',
            marginTop: '3em',
          }}> <h2 
          className="intro-copy delay-1">A brand, design and development studio</h2>
            </Col>
          </Row>
      </Container>
      <Container fluid style={{
            position: 'relative',
            marginTop: '0em',
          }} className="section-2">
            <Row justify="between" style={{
                  position: 'relative',
                }} className="video-section">
                  <Col sm={12} md={4} lg={4} xl={4} xxl={4} style={{
                  position: 'relative'
                }}  className="delay-2 sm-mt-2">
                  <p className="body-copy">We focus on working with clients who are purpose driven and socially aware. We help clients to bring their ideas to life and support them in supporting others. </p>
                  <div className="primary-button"><AniLink
                          cover  to="/work" bg="linear-gradient(to right, white, #F8D271)"
                          direction="left"
                          duration={1.5}
                        ><Arrow className="small-arrow"></Arrow><span className="link-text">View all our work</span></AniLink></div>
                </Col>
                <Col sm={12} md={8} lg={8} xl={8} xxl={8} style={{
                  position: 'relative'
                }}
                className="sm-mt-0 mt-5">
          
                <div className="video-wrapper delay-3" style={{
                          marginTop: '0em',
                        }}>
                    <video autoPlay loop muted className="background-video">
                            <source src={clip} type='video/mp4' />
                    </video>
                  </div>
          
                </Col>
            </Row>
      </Container>
      <Container fluid style={{
            position: 'relative',
            marginTop: '15em',
          }}>
      <Row justify="between" style={{
            position: 'relative',
          }}>
            <Col sm={12} md={8} lg={8} xl={8} xxl={8} style={{
            position: 'relative'
          }}>
            <div className="very-big-title">
              Read more
            </div>
            <div className="very-big-link">
            <TransitionLink
                    to="/work"
                    exit={{
                      length: 1,

                    }}
                    entry={{
                      length: 1,
                      appearAfter: 1,
                    }}
                  >Studio</TransitionLink>
              </div>
              <div className="very-big-link">
            <TransitionLink
                    to="/work"
                    exit={{
                      length: 1,

                    }}
                    entry={{
                      length: 1,
                      appearAfter: 1,
                    }}
                  >Work</TransitionLink>
              </div>
          </Col>
          </Row>
        </Container>
  
    </Layout>
  )
}

export default IndexPage

