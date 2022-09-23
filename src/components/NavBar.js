/* eslint-disable react-hooks/rules-of-hooks */

// import React from 'react'
import { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg'; 
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => { 

    const [ activeLink, setActiveLink ] = useState('home'); // initial state is 'home'
    const [ scrolled, setScrolled ] = useState(false); // initial state is false

    useEffect( () => {
        const onScroll = () => {
            if (window.scrollY > 50){
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        
        window.addEventListener('scroll', onScroll); // add event listener to run onScroll function 
        return () => window.removeEventListener('scroll', onScroll); // remove event listener to run onScroll function after

    }, [] ); // stop after running once
 
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>

                <Navbar.Brand href="#home"> <img src={logo} className="logo" alt="Logo"/> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" > <span className="nabar-toggle-icon"> </span> </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto"> 
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={ () => onUpdateActiveLink('home')}> Home </Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={ () => onUpdateActiveLink('skills')}> Skills </Nav.Link>
                    <Nav.Link href="#portfolio" className={activeLink === 'portfolio' ? 'active navbar-link' : 'navbar-link'} onClick={ () => onUpdateActiveLink('portfolio')}> Protfolio </Nav.Link>
                </Nav> 
                <span className="navbar-text">  
                    <div className="social-icon">
                        <a href="#"> <img src={navIcon1} alt="" /> </a>
                        <a href="#"> <img src={navIcon2} alt="" /> </a>
                        <a href="#"> <img src={navIcon3} alt="" /> </a>
                    </div>
                    <button className="btn btn-primary" onClick={()=> console.log('connect')}>
                        <span> Let's Connect </span>
                    </button>
                </span>
                </Navbar.Collapse>

            </Container>
        </Navbar> 
    )
}

// export default navBar