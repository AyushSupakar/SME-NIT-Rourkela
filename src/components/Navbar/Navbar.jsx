import React, { useState } from "react";
import "./Navbar.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../Images/logo.png"

import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [slide, setSlide ] = useState(false)

    React.useEffect(() => {
      const handleScroll = event => {
        if(window.scrollY==0){
          //user scrolled to the top of the page
          setSlide(false)
        }else{
          setSlide(true)
        }
        
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <>
      <nav style={{background: slide&&"#f06236"}} className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <img style={{height:"80%", width : "180%"}} src={Logo}></img>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="gallary">Gallery</Link>
            </li>
            <li>
            <a href="">Events</a>
            </li>
            <li>
              <Link to="our-team">Our Team</Link>
            </li>
            <li>
              <Link to="about">About Us</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100086722727910"
                target="_blank">
                <FaFacebook className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/sme.nitrkl/"
                target="_blank">
                <FaInstagram className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/smenitrkl/"
                target="_blank">
                <FaLinkedinIn className="facebook" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu color="white" fontSize="30px"/>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;