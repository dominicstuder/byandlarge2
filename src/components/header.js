
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import styled from 'styled-components';
// import TransitionLink from "gatsby-plugin-transition-link"
// import { SettingsIcon } from './icons/settings';
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
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
  // <header className="header">
  <header className={scroll ? "header bg-black" : "header bg-none"}>
      <Container fluid>
      <Row>
        <Col xs={7} sm={6} md={6} >
            <div className="logo delay-1">
              <AniLink
                  cover  to="/" bg="#1E1E1E"
                  direction="right"
                  duration={1.5}
                >By and Large Studio
              </AniLink>
            </div>
        </Col>

          <Col xs={5} sm={6} md={6}>
            <nav className="menu two delay-2">
              <div className="item-two"><AniLink
                    cover  to="/work" bg="#1E1E1E"
                    direction="left"
                    duration={1.5}
                  >Work</AniLink></div>
                {/* <div className="item-two"><AniLink
                    cover  to="/studio" bg="#1E1E1E"
                    direction="left"
                    duration={1.5}
                  >Studio</AniLink></div> */}
                <div className="item-two"><AniLink
                    cover  to="/contact" bg="#1E1E1E"
                    direction="left"
                    duration={1.5}
                  >Contact</AniLink></div>
            </nav>
            </Col>
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

