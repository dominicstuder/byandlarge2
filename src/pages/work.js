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
import { setConfiguration } from 'react-grid-system';
import { Parallax } from "react-scroll-parallax";
import A17 from "../components/a17-img";

setConfiguration({ gutterWidth:'60'});

const Work = () => (
  <Layout>
    <Seo Title="Work" />
    <Container fluid style={{
            position: 'relative', marginTop: '5em',
          }} className="section-2">
              {/* <Row style={{paddingTop: '1em',
                  position: 'relative'
                }}>
                <Col  md={12} lg={10} xl={6} xxl={5}  className="delay-2 copy-block"
                >
                  <h3 className="intro-copy">Our Work - By and Large develops, designs and delivers
                        websites and creative campaigns that drive results,
                        build awareness and win awards. Our work never
                        brags, but it sure loves to speak for itself.
                        </h3>
                </Col>
              </Row> */}
        <Row justify="center" style={{
            position: 'relative',
            marginTop: '10rem',
          }}>
          <Col sm={12} lg={6} xl={6} className="delay-1"
                data-sal-duration="500"
                data-sal="slide-up"
                data-sal-delay="500"
                data-sal-easing="ease-in"
          >
           <Parallax y={[0, -50]}>
              <AniLink
                to="/astrid"
                exit={{ length: 0.1 }}
                entry={{ delay: 0.1 }}
              >
                <div style={{borderRadius:'25px',}} className="work-page-image-wrapper">
                    <BGIMG className="border-50"></BGIMG>
                </div>
              </AniLink>
              <div className="project-wrapper">
                <div className="title-wrapper">
                      <p className="body black delay-1">
                      Astrid - Strategy, brand identity and website for Australia's first female-led, plant-based medicine dispensary.
                        </p>
                    <Arrow className="arrow"></Arrow>
                    </div>
                </div>
            </Parallax>
          </Col>
          <Col sm={12} lg={4} xl={5}  className="delay-1"
                data-sal-duration="500"
                data-sal="slide-up"
                data-sal-delay="0"
                data-sal-easing="ease-in"
              >

            <Parallax y={[0, -30]}>
            <AniLink
                  to="/masterme"
                    exit={{ length: 0.5 }}
                    entry={{ delay: 0.5 }}
                  >
           <div style={{borderRadius:'25px',}} className="work-page-image-wrapper"
          
           >
            <BGIMG8 className="border-50"></BGIMG8>
                {/* <div className="work-button"><a target="_blank" href="https://www.masterme.com.au/"><span className="link-text">View website</span></a>
                    </div> */}
            </div>
            </AniLink>
                
            <div className="project-wrapper"                 
 
                    >
                      <div className="title-wrapper"
                     
                      >
                      {/* <h2 className="header-2 hover-link">
                     
                         Master Me</h2> */}
                         <p className="body black delay-1">
                         Master Me - Branding and website for a coaching course for creative professionals.
                          </p>
                         <Arrow className="arrow"></Arrow>
                      
                      </div>
                </div>
          </Parallax>    
        </Col>
        </Row>
        <Row justify="end" >
        <Col sm={12} lg={4} xl={4}  className="delay-1"
                        data-sal-duration="500"
                        data-sal="slide-up"
                        data-sal-delay="0"
                        data-sal-easing="ease-in"
        
        >
       
       <Parallax y={[0, -50]}>
              <AniLink
                  to="/obie"
                  exit={{ length: 0.5 }}
                  entry={{ delay: 0.5 }}
                  >
           
           <div style={{borderRadius:'25px',}} className="work-page-image-wrapper"
      
           >
            <BGIMG6 className="border-50"></BGIMG6>
       
            </div>
            </AniLink>
                        
            <div className="project-wrapper">
                      <div className="title-wrapper"
         
                      >
                      {/* <h2 className="header-2 hover-link">
                      <AniLink
                     to="/obie"
                    exit={{ length: 0.5 }}
                    entry={{ delay: 0.5 }}
                  >
                         Obie    </AniLink></h2> */}
                         <p className="body black delay-1">
                         Obie - Brand identity and website for a new financial tracking platform. 
                        </p>
                        <Arrow className="arrow"></Arrow>
                      </div>
                </div>
     </Parallax>
          </Col>


          <Col sm={12} lg={6} xl={6}   className="delay-1"
                  data-sal-duration="500"
                  data-sal="slide-up"
                  data-sal-delay="0"
                  data-sal-easing="ease-in"
          >
 <Parallax y={[0, -20]}>
                
          <AniLink
                    to="/drive-change"
                    exit={{ length: 0.5 }}
                    entry={{ delay: 0.5 }}
                  >
            <div style={{borderRadius:'25px',}} className="work-page-image-wrapper"

            >
              <BGIMG7 className="border-50"></BGIMG7>
              {/* <div className="work-button"><AniLink
                          cover  to="/drive-change" bg="#1E1E1E"
                          direction="left"
                          duration={1.5}
                        ><span className="link-text">View case study</span></AniLink>
                    </div> */}
            </div>
            </AniLink>

            <div className="project-wrapper">
                      <div className="title-wrapper"
   
                      >
              {/* <h2 className="header-2 hover-link">
              <AniLink
                    to="/drive-change"
                    exit={{ length: 0.5 }}
                    entry={{ delay: 0.5 }}
                  >
                Drive Change</AniLink></h2> */}
                        <p className="body black delay-1">
                        Drive Change - Brand identity, website and campaign design for a patient advocacy national campaign. 
                        </p>
              <Arrow className="arrow"></Arrow>
              </div>
 
                </div>
  </Parallax>
          </Col>  
          </Row>
          <Row justify="start">
          <Col sm={12} lg={4} xl={5}  className="delay-1"
                data-sal-duration="500"
                data-sal="slide-up"
                data-sal-delay="0"
                data-sal-easing="ease-in"
              >
        <Parallax y={[0, -50]}>
        
                <AniLink
                        to="/musk"
                        exit={{ length: 0.5 }}
                        entry={{ delay: 0.5 }}
                      >
      
              <div style={{borderRadius:'25px',}} className="work-page-image-wrapper"
                            data-sal-duration="500"
                            data-sal="slide-up"
                            data-sal-delay="400"
                            data-sal-easing="ease-in"
              >
                <BGIMG2 className="border-50"></BGIMG2>
                </div>
                </AniLink>
                            
                <div className="project-wrapper"
                            data-sal-duration="500"
                            data-sal="slide-up"
                            data-sal-delay="400"
                            data-sal-easing="ease-in"
                
                >
                          <div className="title-wrapper">
                          {/* <h2 className="header-2 hover-link">
                          <AniLink
                      to="/musk"
                        exit={{ length: 0.5 }}
                        entry={{ delay: 0.5 }}
                      >
            
                            Musk </AniLink></h2> */}
                            <p className="body black delay-1">
                              Musk - Brand identity and website for gallery, artist residency and boutique hotel. 
                            </p>
                          </div>
                    </div>
                    </Parallax>
          </Col>
          <Col sm={12} lg={5} xl={5}  className="delay-1"
                data-sal-duration="500"
                data-sal="slide-up"
                data-sal-delay="0"
                data-sal-easing="ease-in"
              >
   <Parallax y={[0, -50]}>
            <AniLink
                    to="/rdp"
                    exit={{ length: 0.5 }}
                    entry={{ delay: 0.5 }}
                  >
           <div style={{borderRadius:'25px',}} className="work-page-image-wrapper"
                        data-sal-duration="500"
                        data-sal="slide-up"
                        data-sal-delay="400"
                        data-sal-easing="ease-in"
           >
            <BGIMG4 className="border-50"></BGIMG4>
            </div>
            </AniLink>
                        
            <div className="project-wrapper"
                         data-sal-duration="500"
                         data-sal="slide-up"
                         data-sal-delay="400"
                         data-sal-easing="ease-in"
            >
                      <div className="title-wrapper">
                      {/* <h2 className="header-2 hover-link">
                      <AniLink
                   to="/rdp"
                    exit={{ length: 0.5 }}
                    entry={{ delay: 0.5 }}
                  >
                         </AniLink></h2> */}
                         <p className="body black delay-1">
                         RDP - Brand identity and website design for a design and construction agency in Melbourne.
                        </p>
                   
                      </div>
                </div>
                </Parallax>
          </Col>
        </Row>
      </Container>
  </Layout>
)

export default Work

