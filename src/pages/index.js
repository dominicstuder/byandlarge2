import React, { useState} from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BGIMG from "../components/backgroundimage1"
import BGIMG2 from "../components/backgroundimage2"
import BGIMG3 from "../components/backgroundimage3"
import BGIMG4 from "../components/backgroundimage4"
import BGIMG5 from "../components/backgroundimage5"
import BGIMG6 from "../components/backgroundimage6"
// import IMG4 from "../components/image4"
// import IMG5 from "../components/image5"
// import IMG6 from "../components/image6"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Container, Row, Col } from 'react-grid-system';
import Arrow from "../assets/arrow.svg";
// import ArrowWhite from "../assets/arrowwhite.svg";
// import styled from 'styled-components';
import TransitionLink from "gatsby-plugin-transition-link"
// import posed from 'react-pose';





const IndexPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <Layout style={{
      backgroundColor: '#FBF5EB',
    }}>
      <SEO title="Home" />
      {/* <BGIMG3></BGIMG3> */}
      <Container fluid>
      <Row justify="start" style={{
          position: 'relative',
          marginTop: '10em',
        }}>
          <Col sm={6}> <h2 className="header-2 black">An independant design studio, focusing on branding, design and digital, by and large.</h2>
          </Col>
        </Row>
        <Row justify="start" style={{
          position: 'relative',
          marginTop: '20em',
        }}>
          <Col sm={12}> <h2 className="header-2 black big">Recent Projects</h2>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row justify="start" style={{
          position: 'relative',
          marginTop: '10rem',
        }}
      
        className="arrow-hover-wrapper"
          >
          <Col sm={8}>
          <TransitionLink
                  to="/astrid"
                  exit={{
                    length: 2,

                  }}
                  entry={{
                    length: 1,
                    appearAfter: 1,
                  }}
                >
            <BGIMG></BGIMG>
            </TransitionLink>
          </Col>
          <Col sm={4}>
            
              <h2 className="header-2 black hover-link">
              <TransitionLink
                  to="/astrid"
                  exit={{
                    length: 2,

                  }}
                  entry={{
                    length: 1,
                    appearAfter: 1,
                  }}
                >
                Astrid Dispensary</TransitionLink></h2>
              <Arrow className="arrow"></Arrow>
              <div className="project-into">
                  <ul>
                    <li>Brand Identity</li>
                    <li>Collateral Design</li>
                    <li>Website Design</li>
                  </ul>
              </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row justify="start" style={{
          position: 'relative',
          marginTop: '10rem',
        }}
      
        className="arrow-hover-wrapper"
          >
          <Col sm={8}>
          <TransitionLink
                  to="/q-australia-foundation"
                  exit={{
                    length: 2,

                  }}
                  entry={{
                    length: 1,
                    appearAfter: 1,
                  }}
                >
            <BGIMG5></BGIMG5>
            </TransitionLink>
          </Col>
          <Col sm={4}>
            
              <h2 className="header-2 black hover-link">
              <TransitionLink
                  to="/q-australia-foundation"
                  exit={{
                    length: 2,

                  }}
                  entry={{
                    length: 1,
                    appearAfter: 1,
                  }}
                >
                Q Australia Foundation</TransitionLink></h2>
              <Arrow className="arrow"></Arrow>
              <div className="project-into">
                  <ul>
                    <li>Website Design</li>
                    <li>Website Development</li>
                  </ul>
              </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row justify="start" style={{
          position: 'relative',
          marginTop: '10rem',
        }}
      
        className="arrow-hover-wrapper"
          >
          <Col sm={8}>
          <TransitionLink
                  to="/drive-change"
                  exit={{
                    length: 2,

                  }}
                  entry={{
                    length: 1,
                    appearAfter: 1,
                  }}
                >
            <BGIMG6></BGIMG6>
            </TransitionLink>
          </Col>
          <Col sm={4}>
            
              <h2 className="header-2 black hover-link">
              <TransitionLink
                  to="/drive-change"
                  exit={{
                    length: 2,

                  }}
                  entry={{
                    length: 1,
                    appearAfter: 1,
                  }}
                >
                Drive Change</TransitionLink></h2>
              <Arrow className="arrow"></Arrow>
              <div className="project-into">
                  <ul>
                    <li>Campaign Design</li>
                    <li>Website Design</li>
                    <li>Website Development</li>
                  </ul>
              </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row justify="start" style={{
          position: 'relative',
          marginTop: '10rem',
        }}
      
        className="arrow-hover-wrapper"
          // data-sal-duration="500"
          // data-sal="slide-up"
          // data-sal-delay="200"
          // data-sal-easing="ease-in"
          >
          <Col sm={8}>
          <TransitionLink
                  to="/rdp"
                  exit={{
                    length: 2,

                  }}
                  entry={{
                    length: 1,
                    appearAfter: 1,
                  }}
                >
            <BGIMG4></BGIMG4>
            </TransitionLink>
          </Col>
          <Col sm={4}>
            
              <h2 className="header-2 black hover-link">
              <TransitionLink
                  to="/rdp"
                  exit={{
                    length: 2,

                  }}
                  entry={{
                    length: 1,
                    appearAfter: 1,
                  }}
                >
                RDP</TransitionLink></h2>
              <Arrow className="arrow"></Arrow>
              <div className="project-into">
                  <ul>
                    <li>Brand Identity</li>
                    <li>Collateral Design</li>
                    <li>Website Design</li>
                  </ul>
              </div>
          </Col>
        </Row>
      </Container>
     
      <Container fluid>
        <Row justify="start" style={{
          position: 'relative',
          marginTop: '10rem',
        }}
      
        className="arrow-hover-wrapper"
          // data-sal-duration="500"
          // data-sal="slide-up"
          // data-sal-delay="200"
          // data-sal-easing="ease-in"
          >
          <Col sm={8}>
          <TransitionLink
                  to="/musk"
                  exit={{
                    length: 2,

                  }}
                  entry={{
                    length: 1,
                    appearAfter: 1,
                  }}
                >
            <BGIMG3></BGIMG3>
            </TransitionLink>
          </Col>
          <Col sm={4}>
            
              <h2 className="header-2 black hover-link">
              <TransitionLink
                  to="/musk"
                  exit={{
                    length: 2,

                  }}
                  entry={{
                    length: 1,
                    appearAfter: 1,
                  }}
                >
                Musk</TransitionLink></h2>
              <Arrow className="arrow"></Arrow>
              <div className="project-into">
                  <ul>
                    <li>Brand Identity</li>
                    <li>Collateral Design</li>
                    <li>Website Design</li>
                  </ul>
              </div>
          </Col>
        </Row>
      </Container>
     
        {/* <Row justify="start" style={{
          position: 'relative',
          marginTop: '10rem',
        }}
     >
        <Col sm={4}>
            <div className="arrow-hover-wrapper">
              <h2 className="header-2 black">
              <TransitionLink
                  to="/astrid"
                  exit={{
                    length: 2
                  }}
                  entry={{
                    length: 2
                  }}
                >
                  Astrid Dispensary</TransitionLink>
              </h2>
              <Arrow className="arrow"></Arrow>
            </div>

          </Col>
          </Row> */}
          {/* <Row justify="start" style={{
          position: 'relative',
          marginTop: '10rem',
        }}
     ><Col sm={4}>
     <div className="arrow-hover-wrapper pt5">
       
       <TransitionLink
           to="/astrid"
           exit={{
             length: 2
           }}
           entry={{
             length: 2
           }}
         >
          <h2 className="header-2 black">Astrid Dispensary</h2> </TransitionLink>

       <Arrow className="arrow"></Arrow>
     </div>

   </Col>
          <Col sm={5} data-sal-duration="300"
          data-sal="slide-up"
          data-sal-delay="0"
          data-sal-easing="ease-in" className="rounded">
            <IMG6></IMG6>
          </Col>
        </Row>
        <Row justify="end" style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
        }}>
          <Col sm={4} className="rounded" style={{
                 marginTop: '10rem',
                }}data-sal-duration="300"
                data-sal="slide-left"
                data-sal-delay="200"
                data-sal-easing="ease-in">
            <IMG4></IMG4>
          </Col>
   
        </Row>
        <Row justify="start" style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
        }}>
          <Col sm={2}></Col>
          <Col sm={3} className="rounded" style={{
                 marginTop: '15rem',
                }}
                data-sal-duration="500"
          data-sal="slide-right"
          data-sal-delay="200"
          data-sal-easing="ease-in">
            <IMG5></IMG5>
          </Col>
          <Col sm={1}>
            </Col>
        </Row> */}

          {/* <Col sm={3}>
            <IMG5></IMG5>
          </Col> */}

          {/* <Col sm={3}
          > <h2 className="header-2 black"><AniLink fade to="/musk/">Musk</AniLink></h2>
          </Col>
          <Col sm={1}>
            <Arrow className="arrow"></Arrow>
          </Col> */}


      {/* <Container fluid>
        <Row justify="center" style={{
          position: 'relative',
          marginTop: '10rem',
        }}>
          <Col sm={3}><h2 className="header-2 black"><AniLink fade to="/astrid/">Astrid Dispensary</AniLink></h2>
          </Col>
          <Col sm={6}
            data-sal="slide-up"
            data-sal-delay="0"
            data-sal-easing="ease"
          >

            <BGIMG></BGIMG>

          </Col>
          <Col sm={1}>
            <Arrow className="arrow"></Arrow>
          </Col>

        </Row>
      </Container> */}

      {/* <Container fluid>
        <Row justify="center" style={{
          position: 'relative',
          marginTop: '10rem',
        }}
          data-sal-duration="500"
          data-sal="slide-up"
          data-sal-delay="200"
            data-sal-easing="ease-in">
              <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          zIndex: '1',
        }}>
           <Row justify="center" style={{
          position: 'relative',
          marginTop: '1rem',
        }}>



            <Col sm={8 
            }
            data-sal-duration="200"
            data-sal="slide-up"
            data-sal-delay="1000"
              data-sal-easing="ease-in"
            >
            
              <div className="arrow-hover-wrapper">
                <h2 className="header-2"><AniLink fade to="/astrid/">Astrid</AniLink></h2>
                <ArrowWhite className="arrow"></ArrowWhite>
              </div>
            </Col>
            </Row>
            </div>
          <Col sm={12}

          >
            <BGIMG></BGIMG2>
          </Col>
          
        </Row>
      </Container> */}

      {/* <Container fluid>
        <Row justify="center" style={{
          position: 'relative',
          marginTop: '10rem',
        }}
          data-sal-duration="500"
          data-sal="slide-up"
          data-sal-delay="200"
            data-sal-easing="ease-in">
              <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          zIndex: '1',
        }}>
           <Row justify="center" style={{
          position: 'relative',
          marginTop: '1rem',
        }}>



            <Col sm={8 
            }
            data-sal-duration="200"
            data-sal="slide-up"
            data-sal-delay="1000"
              data-sal-easing="ease-in"
            >
            
              <div className="arrow-hover-wrapper">
                <h2 className="header-2"><AniLink fade to="/astrid/">Musk</AniLink></h2>
                <ArrowWhite className="arrow"></ArrowWhite>
              </div>
            </Col>
            </Row>
            </div>
          <Col sm={12}

          >
            <BGIMG2></BGIMG2>
          </Col>
          
        </Row>
      </Container> */}
        <Container fluid>
        <Row justify="start" style={{
          position: 'relative',
          marginTop: '10rem',
        }}>
          <Col sm={12} >
            
          <TransitionLink
                  to="/work"
                  exit={{
                    length: 2,

                  }}
                  entry={{
                    length: 1,
                    appearAfter: 1,
                  }}
                  className="big-link hover-link"
                >
                View all projects <Arrow className="arrow"></Arrow></TransitionLink>
             
          </Col>

        </Row>
        </Container>
      <Container fluid>
        <Row justify="center" style={{
          position: 'relative',
          marginTop: '10rem',
        }}>
          <Col sm={4}><h2 className="header-2 black">Approach</h2>
          <p className="body" style={{
          float: 'left',
        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.</p>
          </Col>
          <Col sm={4}><h2 className="header-2 black">Approach</h2>
          <p className="body" style={{
          float: 'left',
        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.</p>
          </Col>
          <Col sm={4}><h2 className="header-2 black">Approach</h2>
          <p className="body" style={{
          float: 'left',
        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.</p>
          </Col>
          </Row>
        </Container>
    </Layout>
  )
}

export default IndexPage

