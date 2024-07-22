import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';
import logo from '../../Images/logo.png'
import {
    FaFacebook,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube
  } from "react-icons/fa";
import "./Footer.css"

const FooterStyle = styled.div`
  background-color: #f06236;
  padding-top: 3rem;
  
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
    justify-content: center;
    align-items: center;
    color: white;
    padding-left: 2rem;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
    color: #992414;
    padding-left: 2rem;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    
  }
  .copyright {
    background-color: #993414;
    width:100%;
    text-align:center;
    padding: 2rem 0;
    margin-top: 3rem;
    color:white;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div style={{display:"flex", flexDirection:"column"}} className="footer__col1">
          <img style={{height:"50px", width:"150px"}} src={logo}></img>
          <h3 style={{marginBottom:"20px", color:"#993414", fontSize:"2.5rem"}}>Follow Us</h3>
          <div className="footer-icons" >
          <ul >
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
            <li>
              <a
                href="https://www.youtube.com/channel/UC8Kr4AEuL07ROqIJfmoBQ6g/featured"
                target="_blank">
                <FaYoutube className="youtube" />
              </a>
            </li>
           
          </ul>
          </div>
        </div>
        
        <div className="footer__col3">
          <h3 style={{fontSize:"3rem", marginBottom:"2rem"}}>Contact Info</h3>
          <ul>
              <li style={{marginBottom: "1rem", color:"white", fontSize:"1.7rem"}}><a href="#" style={{marginBottom: "1rem", color:"white", fontSize:"1.7rem"}} className="contact-footer-a"><b>Address:</b> Department of Mining Engineering, National Institute of Technology, Rourkela 769008, Odisha, India</a></li>
              <li style={{marginBottom: "1rem", color:"white", fontSize:"1.7rem"}}><a href="#" style={{marginBottom: "1rem", color:"white", fontSize:"1.7rem"}} className="contact-footer-a"><b>Phone:</b> 9470313115</a></li>
              <li style={{marginBottom: "1rem", color:"white", fontSize:"1.7rem"}}><a href="#" style={{marginBottom: "1rem", color:"white", fontSize:"1.7rem"}} className="contact-footer-a"><b>Email:</b> smenitrklstudentchapter@gmail.com</a></li>
          </ul>
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Other Links"
            links={[
              {
                title: 'SME International',
                path: 'https://www.smenet.org/',
              },
              {
                title: 'Minare',
                path: 'https://minare.nitrkl.ac.in/',
              },
              {
                title: 'NIT Rourkela',
                path: 'https://www.nitrkl.ac.in/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container" style={{width:"100%", display:"flex", justifyContent:"center"}}>
          <p style={{fontSize:"16px"}}>
            © 2022 Copyright: All rights reserved | SME NIT Rourkela Student Chapter.
          </p>
        </div>
      </div>
    </FooterStyle>
  );
}