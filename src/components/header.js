// import { Link } from "gatsby"
import PropTypes from "prop-types"
// import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import TransitionLink from "gatsby-plugin-transition-link"

const StyledMenu = styled.nav`
  
  background: #191919;
  color: white;
  height: 100vh;
  position: fixed;
  z-index: 10;
  top: 0px;
  width: 100%;
  padding: 1rem 0rem 0rem;
  left: 0;
  transition: transform 0.7s ease-in-out;
  transform: ${({ open }) => (open ? "translateY(0%)" : "translateY(100%)")};
  transition-delay: .5s;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
  .fadein{
    transition: opacity 0.8s ease-out;
    transition-delay: 2s;
    opacity: ${({ open }) => (open ? "1" : "0")};
  }
  a {
    text-decoration: none;
    color: white;
   

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`
const Burger = styled.button`
position: absolute;
background: transparent;
border: none;
cursor: pointer;
padding: 0;
z-index: 10;
transition: opacity 0.5s ease-in-out;
opacity: ${({ open }) => (open ? "0" : "1")};
transition-delay: .7s;

&:focus {
  outline: none;
}
`


const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false);

  return (
  <header className="header">
          <StyledMenu open={open} setOpen={setOpen}>
              <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                }}>
                   <Container fluid>
                    <Row justify="start">
                    <Col  sm={6} 
                            className="logo fadein"              
                            data-sal-duration="200"
                            data-sal="slide-up"
                            data-sal-delay="300"
                            data-sal-easing="ease-in"
                            once= "false"
                          >
                        <Col  sm={10} >
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                    </Col>
     </Col>
                      <Col  sm={3} >
                        <ul>
                        <li   
                            className="logo fadein"              
                            data-sal-duration="200"
                            data-sal="slide-up"
                            data-sal-delay="300"
                            data-sal-easing="ease-in"
                            open={open} onClick={() => setOpen(!open)}
                            >Close
                            
                        </li>
                          <li   
                            className="logo fadein"              
                            data-sal-duration="200"
                            data-sal="slide-up"
                            data-sal-delay="300"
                            data-sal-easing="ease-in"><AniLink fade to="/contact">About</AniLink>
                            
                        </li>
                        <li   
                            className="logo fadein"              
                            data-sal-duration="200"
                            data-sal="slide-up"
                            data-sal-delay="300"
                            data-sal-easing="ease-in"><AniLink fade to="/work">Work</AniLink>
                        </li>
                        <li   
                            className="logo fadein"              
                            data-sal-duration="200"
                            data-sal="slide-up"
                            data-sal-delay="300"
                            data-sal-easing="ease-in"><AniLink fade to="/contact">Info</AniLink>
                        </li>
                        </ul>
                        </Col>
                        </Row>
                      </Container>
                </div>
          </StyledMenu>

      <Container fluid>
      <Row>
        <Col  sm={6} ><div className="logo"> <TransitionLink
                  to="/"
                  exit={{
                    length: 1,

                  }}
                  entry={{
                    length: 1,
                    appearAfter: 1,
                  }}
                >By and Large Studio</TransitionLink></div></Col>
      
        <Col  sm={3} ><div className="logo">
            <Burger open={open} onClick={() => setOpen(!open)}>Menu</Burger>
          </div></Col>
          <Col  sm={3} ><div className="logo"> <AniLink fade to="/contact">Contact</AniLink></div></Col>
       </Row>
    </Container>
  </header>
  
  )
  }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

