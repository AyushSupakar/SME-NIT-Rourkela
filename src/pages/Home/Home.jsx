import React, { useEffect } from 'react'
import './Home.css'
import Background from '../../components/Background/Background'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import minare from "../../Images/minare.jpg"
import Sir2 from "../../Images/Member/Sir2.jpg"
import Logo from "../../Images/smeint.png"
import pdf_inauguration from "../../Images/pdf/pdf_inauguration.pdf"
import Studentship_SME from "../../Images/pdf/Studentship_SME.pdf"
import Shortlisted_candidates from "../../Images/pdf/Shortlisted_candidates.pdf"
import Selected_Candidates from "../../Images/pdf/Selected_Candidates.pdf"





function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Background />

      <AnimationOnScroll animateIn="animate__fadeInLeftBig">
        <div className="story-parent">
          <div className="story-div">
            <div className="story-1">
              <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                <h1 style={{ color: "#f06236", fontSize: "35px", marginBottom: "20px" }}>Who we are</h1>
              </AnimationOnScroll>
              <p style={{ color: "white", fontSize: "20px", lineHeight: "2", textAlign: "justify" }}>SME NIT Rourkela Student Chapter of the Society for Mining, Metallurgy
                &amp; Exploration was established on 28 th September 2022 by the President
                and Executive Director of SME International. The basic purpose of this
                student chapter is to develop skill and interest among the students of the
                National Institute of Technology (NIT) Rourkela about the role of mining
                engineering in societal advancement and nation-building. The student
                chapter collectively works to establish itself as a strong and prospering
                body of mining engineers, researchers, and academicians.</p>
            </div>
            <div className="story-2">
              <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                <h1 style={{ color: "white", fontSize: "35px", marginBottom: "20px" }}>Vision</h1>
              </AnimationOnScroll>
              <p style={{ color: "#f06236", fontSize: "20px", lineHeight: "2", textAlign: "justify" }}>To become an internationally acclaimed SME Student Chapter to nurture
                mining engineers for sustainable mining for the welfare of society and to
                preserve the blue planet.</p>
            </div>
          </div>
        </div>
      </AnimationOnScroll>



      <AnimationOnScroll animateIn="animate__fadeInRightBig">
        <div className="minare-div">
          <AnimationOnScroll animateIn="animate__fadeInLeftBig"><h1 style={{ textAlign: "center", fontSize: "50px", color: "#893101" }}>ANNOUNCEMENT</h1></AnimationOnScroll>
          <div className="minare-content">
            <div className="minare-sec2">

            <ul>
                <li style={{ textAlign: "", fontSize: "20px", color: "white" }}> 1. SME NIT Rourkela inauguration <a target="_blank" href={pdf_inauguration}>click here</a> </li>
                <li style={{ textAlign: "", fontSize: "20px", color: "white" }}> 2. Inviting applications for studentship program  for the duration of two months sponsored by SME NIT ROURKELA student chapter. (21st April 2023) <a target="_blank" href={Studentship_SME}>click here</a> </li>
                <li style={{ textAlign: "", fontSize: "20px", color: "white" }}> 3. Call for interview of shortlisted candidates for studentship program (28th April 2023)
 <a target="_blank" href={Shortlisted_candidates}>click here</a> </li>
                <li style={{ textAlign: "", fontSize: "20px", color: "white" }}> 4. List of selected candidates for studentship program (30th April 2023) <a target="_blank" href={Selected_Candidates}>click here</a> </li>

            </ul>
              
              <p style={{ textAlign: "center", fontSize: "20px", color: "white", marginTop: "20px" }}></p>
              
            </div>
          </div>
        </div>
      </AnimationOnScroll>


      <AnimationOnScroll animateIn="animate__fadeInLeftBig">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="message-div">
            <div className="minare-content">
              <div className="minare-sec1">
                <img className="facad-img" src={Sir2}></img>
                <p style={{ marginTop: "10px", color: "white", fontSize: "20px", textAlign: "center" }}>Dr. Sahendra Ram<br /><span style={{ fontSize: "15px", color: "#f79862" }}>Department of Mining Engineering, NIT Rourkela</span></p>
              </div>
              <div className="minare-sec2 message-2">
                <h4 style={{ textAlign: "center", fontSize: "35px", color: "#f79862" }}>Message from Faculty Advisor.</h4>
                <p style={{ textAlign: "justify", fontSize: "15px", color: "white", marginTop: "40px" , paddingLeft:"10px"}}>We are living in a changing society progressing at a galloping speed, influence of
technological development and globalization in our daily life is vibrant and unavoidable.
Hence, the need to be geared up for tomorrow is even more necessary now than before.
Opportunities before us are immense and the task is onerous. With this mindset, we continue
to march steadily towards our aim to produce brilliant Mining Engineers who will be
responsible citizens and will participate in nation building. Its a fact that the progress of a
nation depends upon the quality of its young generation, hence we invite students to come
and grow their leadership quality with SME NIT Rourkela Student Chapter.<br/><br/>
We believe that the true strength of our institute lies in collaboration of academia, industry
and the government. Aristotle once said that “Educating the mind without educating the heart
is not education”. Even as we impart the education to match the advancement in technology
and processes, we guide our students to love mining from their heart. We aspire to promote
sustainable mining which develops our economy along with causing minimum environmental
damage. Our unique interaction and learning process with a proper blend of theoretical and
practical knowledge crosses the boundaries of nations towards global excellence.<br/><br/>May we continue to give our students strong roots like the Banyan Tree and stronger wings to
conquer the world!</p>
              </div>
            </div>
          </div>
        </div>
      </AnimationOnScroll>



      <AnimationOnScroll animateIn="animate__fadeInRightBig">
        <div className="minare-div">
          <AnimationOnScroll animateIn="animate__fadeInLeftBig"><h1 style={{ textAlign: "center", fontSize: "50px", color: "#893101" }}>MINARE</h1></AnimationOnScroll>
          <div className="minare-content">
            <div className="minare-sec1">
              <img className="minare-img" src={minare}></img>
            </div>
            <div className="minare-sec2">
              <h4 style={{ textAlign: "center", fontSize: "25px", color: "#8d4004" }}>Participate in the One of the Biggest Mining fests in India and fall into the world of Mining.</h4>
              <p style={{ textAlign: "center", fontSize: "20px", color: "white", marginTop: "20px" }}></p>
              <button class="button-18"><a target="_blank" href="https://minare.nitrkl.ac.in/" style={{color:"white"}}>Register</a></button>
            </div>
          </div>
        </div>
      </AnimationOnScroll>


      <AnimationOnScroll animateIn="animate__fadeInRightBig">
        <div className="minare-divl" >
          
            <div className="minare-secl">
              <h4 style={{ textAlign: "center", fontSize: "25px", color: "white" }}>Want to connect with professionals across the globe?
Connect to the Mining Profesional worldwide</h4>
              <p style={{ textAlign: "center", fontSize: "20px", color: "white", marginTop: "20px" }}></p>
              <button class="button-18"><a target="_blank" href="https://www.smenet.org/" style={{color:"white"}}>Contact Now</a></button>
            </div>
            <div className="logol">
              <img style={{position : "absolute", bottom : "5%", right : "6%", height:"15%", width: "%15" }} src={Logo}></img>
            </div>
          
        </div>
      </AnimationOnScroll>

    </>
  )
}

export default Home