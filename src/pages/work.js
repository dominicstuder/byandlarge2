import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Row, Col } from 'react-grid-system'
import Arrow from "../assets/arrow.svg"
import BGIMG from "../components/backgroundimage1"
import BGIMG6 from "../components/backgroundimage6"
import BGIMG7 from "../components/backgroundimage7"
// import BGIMG8 from "../components/backgroundimage8"
import BGIMG2 from "../components/backgroundimage2"
import BGIMG4 from "../components/backgroundimage4"
import BGIMG10 from "../components/backgroundimage10"
import GFTMHERO from "../components/gftmhero-img"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { setConfiguration } from 'react-grid-system'
import { Parallax } from "react-scroll-parallax";

setConfiguration({ gutterWidth:'60'});

const Work = () => (
  <Layout>
    <Seo Title="Work" />
    <Container fluid style={{
            position: 'relative', marginTop: '5em',
          }} className="section-2">
        <Row justify="center" style={{
            position: 'relative',
            marginTop: '15rem',
          }}>
          <Col sm={12} lg={6} xl={6} className="delay-1"
                data-sal-duration="500"
                data-sal="slide-up"
                data-sal-delay="500"
                data-sal-easing="ease-in"
          >
           <Parallax y={[0, -50]}>
           <div className="vertical-project-title"     
                          data-sal-duration="500"
                         data-sal="slide-up"
                         data-sal-delay="400"
                         data-sal-easing="ease-in">Astrid Dispensary</div>
              <AniLink
                to="/astrid"
                exit={{ length: 0.5 }}
                entry={{ delay: 0.5 }}
              >
                <div style={{borderRadius:'25px',}} className="work-page-image-wrapper"     data-sal-duration="500"
                         data-sal="slide-up"
                         data-sal-delay="400"
                         data-sal-easing="ease-in">
                    <BGIMG10 className="border-50"></BGIMG10>
                </div>
              </AniLink>
              <div className="project-wrapper"     data-sal-duration="500"
                         data-sal="slide-up"
                         data-sal-delay="400"
                         data-sal-easing="ease-in">
                <div className="title-wrapper">
                      <p className="body black delay-1">
                          Care and patient focused, plant based medicine dispensary. 
                        </p>
                    <Arrow className="arrow"></Arrow>
                    </div>
                </div>
            </Parallax>
          </Col>
          <Col sm={12} lg={5} xl={5}  className="delay-1"
                // data-sal-duration="500"
                // data-sal="slide-up"
                // data-sal-delay="0"
                // data-sal-easing="ease-in"
              >

            <Parallax y={[50, -30]}>
              <div                 data-sal-duration="500"
                data-sal="slide-up"
                data-sal-delay="0"
                data-sal-easing="ease-in">
                        <div className="vertical-project-title"     
                                    // data-sal-duration="500"
                                    //  data-sal="slide-up"
                                    //  data-sal-delay="400"
                                    //  data-sal-easing="ease-in">
                                      >
                                      Master Me
                                    </div>
                        <AniLink
                              to="/masterme"
                                exit={{ length: 0.5 }}
                                entry={{ delay: 0.5 }}
                              >
                      <div style={{borderRadius:'25px',}} className="work-page-image-wrapper"     
                                    // data-sal-duration="500"
                                    //  data-sal="slide-up"
                                    //  data-sal-delay="400"
                                    //  data-sal-easing="ease-in">
                                      >
            
                        <BGIMG className="border-50"></BGIMG>
                
                        </div>
           
                   </AniLink>  
            
            <div className="project-wrapper"     data-sal-duration="500"
                         data-sal="slide-up"
                         data-sal-delay="400"
                         data-sal-easing="ease-in">
                      <div className="title-wrapper">
                         <p className="body black delay-1">
                             Branding and website for a coaching course for creative professionals.
                          </p>
                      </div>
                </div>
                </div>  
          </Parallax>  
       
        </Col>
        </Row>
        <Row justify="center" >
        <Col sm={12} lg={5} xl={5}  className="delay-1"
        
        >
       
       <Parallax y={[20, -50]}>
       <div                 data-sal-duration="500"
                data-sal="slide-up"
                data-sal-delay="0"
                data-sal-easing="ease-in">
       <div className="vertical-project-title" >Great Forest Trail Marathon</div>
              <AniLink
                  to="/gftm"
                  exit={{ length: 0.5 }}
                  entry={{ delay: 0.5 }}
                  >

           
           <div style={{borderRadius:'25px',}} className="work-page-image-wrapper"
                       >
            <GFTMHERO className="border-50"></GFTMHERO>
 
            </div>
           
            </AniLink>
                        
            <div className="project-wrapper">
                      <div className="title-wrapper"
         
                      >
                         <p className="body black delay-1">
                        Running to save a wild place in Great Forest, Victoria. 
                        </p>
                        <Arrow className="arrow"></Arrow>
                      </div>
                </div>
        </div>
     </Parallax>
          </Col>
          </Row>
          <Row justify="end" >
        <Col sm={12} lg={5} xl={5}  className="delay-1"
                        data-sal-duration="500"
                        data-sal="slide-up"
                        data-sal-delay="0"
                        data-sal-easing="ease-in"
        
        >
       
       <Parallax y={[0, -50]}>
       <div                 
        data-sal-duration="500"
        data-sal="slide-up"
        data-sal-delay="0"
        data-sal-easing="ease-in">
             <div className="vertical-project-title">Obie</div>
              <AniLink
                  to="/obie"
                  exit={{ length: 0.5 }}
                  entry={{ delay: 0.5 }}
                  >

           
           <div style={{borderRadius:'25px',}} className="work-page-image-wrapper">
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
                         Financial tools to help everyday people.
                        </p>
                        <Arrow className="arrow"></Arrow>
                      </div>
                </div>
            </div>
        </Parallax>
      </Col>
      <Col sm={12} lg={6} xl={6}   className="delay-1">
        <Parallax y={[30, 0]}>
            <div                 
            data-sal-duration="500"
            data-sal="slide-up"
            data-sal-delay="0"
            data-sal-easing="ease-in">
                <div className="vertical-project-title">Drive Change</div>  
                    <AniLink
                              to="/drive-change"
                              exit={{ length: 0.5 }}
                              entry={{ delay: 0.5 }}
                            >
                      <div style={{borderRadius:'25px',}}     data-sal-duration="500"
                                  data-sal="slide-up"
                                  data-sal-delay="400"
                                  data-sal-easing="ease-in" className="work-page-image-wrapper"

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
                      <div className="title-wrapper">
                          <p className="body black delay-1">
                            A national movement to change outdated laws.</p>
                          <Arrow className="arrow"></Arrow>
                      </div>
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
        <Parallax y={[50, -50]}>
        <div className="vertical-project-title"     data-sal-duration="500"
                         data-sal="slide-up"
                         data-sal-delay="400"
                         data-sal-easing="ease-in">Musk</div>
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
                            <p className="body black delay-1">
                             An artist residency and boutique hotel in Dayelsford, Victoria. 
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
   <Parallax y={[70, -50]}>
   <div className="vertical-project-title"     data-sal-duration="500"
                         data-sal="slide-up"
                         data-sal-delay="400"
                         data-sal-easing="ease-in">RDP</div>
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
                     
                         <p className="body black delay-1">
                        A design and construction agency in Melbourne.
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

