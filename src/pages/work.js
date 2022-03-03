import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Row, Col } from 'react-grid-system';
import Arrow from "../assets/arrow.svg";
import BGIMG from "../components/backgroundimage1"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import BGIMG6 from "../components/backgroundimage6"
import BGIMG7 from "../components/backgroundimage7"
import BGIMG8 from "../components/backgroundimage8"
import BGIMG2 from "../components/backgroundimage2"
import BGIMG4 from "../components/backgroundimage4"
import ArrowWhite from "../assets/arrow-small-white.svg";

const Work = () => (
  <Layout>
    <Seo Title="Work" />
    <Container fluid>
        <Row justify="end" style={{
            position: 'relative',
            marginTop: '2rem',
          }}>
             <Col sm={12} lg={12} xl={8} >
             <h2  data-sal-duration="500"
          data-sal="fade"
          data-sal-easing="ease-in" 
          className="intro-copy delay-2">Work</h2>
              </Col>
          <Col sm={12} lg={12} xl={8} className="arrow-hover-wrapper delay-3"
              data-sal-duration="500"
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-easing="ease-in"
          >
         <AniLink
                    cover  to="/astrid" bg="#1E1E1E"
                    direction="left"
                    duration={1.5}
                  >
            <div style={{borderRadius:'25px',}} className="work-page-image-wrapper">
              <BGIMG className="border-50"></BGIMG>
                    <div className="work-button"><AniLink
                          cover  to="/astrid" bg="#1E1E1E"
                          direction="left"
                          duration={1.5}
                        ><span className="link-text">View case study</span></AniLink>
                    </div>
               
            </div>
            </AniLink>
            <div className="project-wrapper">
              <div className="title-wrapper"
                    data-sal-duration="500"
                    data-sal="fade-up"
                    data-sal-delay="400"
                    data-sal-easing="ease-in"
              
              >
                  <h2 className="header-2 hover-link">
                  <AniLink
                    cover  to="/astrid" bg="#1E1E1E"
                    direction="left"
                    duration={1.5}
                  >
                    Astrid Dispensary</AniLink></h2>
                  <Arrow className="arrow"></Arrow>
                  </div>
                  
              </div>

          </Col>

          {/* <Col sm={12}>
          <Row justify="end" >
            <Col  md={4} sm={8} xs={0} >
            </Col>
            <Col lg={8} md={6} sm={8} xs={12} >
              <div data-sal-duration="500"
              data-sal="fade-up"
              data-sal-delay="500"
              data-sal-easing="ease-in">
              <p className="body home-page">Strategy, brand identity and website for Australia's first female-led, plant-based medicine dispensary.</p>
              </div>
            </Col>
          </Row>
        
          </Col>
          </Row> */}
        <Col sm={8} className="arrow-hover-wrapper"
            style={{
              marginTop: '5em',
            }}
            data-sal-duration="500"
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-easing="ease-in"
          >
            
            <AniLink
                    cover  to="/masterme" bg="#1E1E1E"
                    direction="left"
                    duration={1.5}
                  >
           <div style={{borderRadius:'25px',}} className="work-page-image-wrapper">
            <BGIMG8 className="border-50"></BGIMG8>
                <div className="work-button"><a target="_blank" href="https://www.masterme.com.au/"><span className="link-text">View website</span></a>
                    </div>
            </div>
            </AniLink>
                        
            <div className="project-wrapper">
                      <div className="title-wrapper">
                      <h2 className="header-2 hover-link">
                     
                         Master Me</h2>

                         <Arrow className="arrow"></Arrow>
                      
                      </div>
                </div>
          </Col>
        
          <Col sm={8} className="arrow-hover-wrapper"
            style={{
              marginTop: '5em',
            }}
            data-sal-duration="500"
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-easing="ease-in"
          >
            
           
           <div style={{borderRadius:'25px',}} className="work-page-image-wrapper">
            <BGIMG6 className="border-50"></BGIMG6>
                   <div className="work-button"><span className="link-text">Case study coming soon</span>
                    </div>
            </div>
     
                        
            <div className="project-wrapper">
                      <div className="title-wrapper">
                      <h2 className="header-2 hover-link">
          
                         Obie</h2>

                        <Arrow className="arrow"></Arrow>
                      </div>
                </div>
          </Col>
        

          <Col sm={8}   
          className="arrow-hover-wrapper"
                    data-sal-duration="500"
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-easing="ease-in">
          <AniLink
                    cover  to="/drive-change" bg="#1E1E1E"
                    direction="left"
                    duration={1.5}
                  >
            <div style={{borderRadius:'25px',}} className="work-page-image-wrapper">
              <BGIMG7 className="border-50"></BGIMG7>
              <div className="work-button"><AniLink
                          cover  to="/drive-change" bg="#1E1E1E"
                          direction="left"
                          duration={1.5}
                        ><span className="link-text">View case study</span></AniLink>
                    </div>
            </div>
            </AniLink>

            <div className="project-wrapper">
                      <div className="title-wrapper">
              <h2 className="header-2 hover-link">
              <AniLink
                    cover  to="/drive-change" bg="#1E1E1E"
                    direction="left"
                    duration={1.5}
                  >
                Drive Change</AniLink></h2>

              <Arrow className="arrow"></Arrow>
              </div>
 
                </div>
          </Col>  
          <Col sm={8} className="arrow-hover-wrapper"
            style={{
              marginTop: '5em',
            }}
            data-sal-duration="500"
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-easing="ease-in"
          >
            
  
           <div style={{borderRadius:'25px',}} className="work-page-image-wrapper">
            <BGIMG2 className="border-50"></BGIMG2>
            </div>
      
                        
            <div className="project-wrapper">
                      <div className="title-wrapper">
                      <h2 className="header-2 hover-link">
                    
         
                         Musk</h2>

                      </div>
                </div>
          </Col>
          <Col sm={8} className="arrow-hover-wrapper"
            style={{
              marginTop: '5em',
            }}
            data-sal-duration="500"
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-easing="ease-in"
          >
            
          
           <div style={{borderRadius:'25px',}} className="work-page-image-wrapper">
            <BGIMG4 className="border-50"></BGIMG4>
            </div>
   
                        
            <div className="project-wrapper">
                      <div className="title-wrapper">
                      <h2 className="header-2 hover-link">
          
                         RDP</h2>

                   
                      </div>
                </div>
          </Col>
        </Row>
      </Container>
  </Layout>
)

export default Work

