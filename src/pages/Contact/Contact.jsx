import React, { useEffect, useState, useRef } from 'react'
import './Contact.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {
    FaFacebook,
    FaInstagram,
    FaLinkedinIn,
    
    FaYoutube
} from "react-icons/fa";
import emailjs from '@emailjs/browser';

function Contact() {

    const form = useRef();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        setSending(true)
        // service_id, templte_id and public key will get from Emailjs website when you create account and add template service and email service 
        emailjs.sendForm('service_kye5zso', 'template_aijrq97', form.current,
            '575jqP_Mu1FnLs9jt')
            .then((result) => {
                setSending(false)
                setSent(true)
                console.log(result.text);
            }, (error) => {
                setSending(false)
                console.log(error.text);
            });
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
            <div className="contact-div">
                <div className="form-div">
                    <h3 style={{ fontSize: "3rem", marginBottom: "2rem", color: "#f79862" }}>Get In Touch !</h3>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="contact-form-div">
                            <label className="contact-label">Name</label>
                            <input className="contact-input" type="text" placeholder="Name" name="from_name"/>
                        </div>

                        <div className="contact-form-div">
                            <label className="contact-label">Email</label>
                            <input className="contact-input" type="email" placeholder="E-mail" name="from_email"/>
                        </div>

                        <div className="contact-form-div">
                            <label className="contact-label">Message</label>
                            <textarea rows="6" cols="50" placeholder="Message" name="message" style={{ border: "2px solid bisque", borderRadius: "5px", paddingLeft: "10px", paddingTop: "5px" }}></textarea>x
                        </div>

                        <Button disabled={sent || sending} className="send-form" type="submit">
                            {sent ? "Sent" : sending ? "Sending..." : "Send"}
                        </Button>
                    </form>
                </div>

                <div className="info-div">
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }} className="footer__col3">
                        <h3 style={{ fontSize: "3rem", marginBottom: "2rem", color: "#f79862" }}>Contact Info</h3>
                        <ul>
                            <li style={{ marginBottom: "1rem", color: "white", fontSize: "1.9rem", textAlign: "center" }}><a href="#" style={{ marginBottom: "1rem", color: "white", fontSize: "1.7rem" }} className="contact-footer-a"><b>Address:</b> Department of Mining Engineering, NIT Rourkela Rourkela, Odisha 769008</a></li>
                            <li style={{ marginBottom: "1rem", color: "white", fontSize: "1.9rem", textAlign: "center" }}><a href="#" style={{ marginBottom: "1rem", color: "white", fontSize: "1.7rem" }} className="contact-footer-a"><b>Phone:</b> 9470313115</a></li>
                            <li style={{ marginBottom: "1rem", color: "white", fontSize: "1.9rem", textAlign: "center" }}><a href="#" style={{ marginBottom: "1rem", color: "white", fontSize: "1.7rem" }} className="contact-footer-a"><b>Email:</b> smenitrklstudentchapter@gmail.com</a></li>
                        </ul>
                    </div>
                    <div className="footer-icons" >
                        <h3 style={{ marginBottom: "20px", color: "#f79862", fontSize: "2.8rem", textAlign: "center", marginTop: "20px" }}>Follow Us</h3>
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
                                    <FaLinkedinIn className="youtube" />
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
            </div>

            <div className="map-div">
                <iframe className="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.6396108975605!2d84.90132421416008!3d22.253748585347747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a201e7f53c6c237%3A0x7ac2a6d95b8c80ff!2sMining%20Engineering%20Department!5e0!3m2!1sen!2sin!4v1666880835136!5m2!1sen!2sin"
                    frameBorder=""
                    style={{ border: "5px solid #f79862", borderRadius: "30px" }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                />
            </div>
        </div>
    )
}

export default Contact