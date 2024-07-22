import React, { useEffect } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './About.css'

function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div style={{ display: "flex", justifyContent: "jusify" }}>
        <div className="about">
          <h3 style={{ textAlign: "center", marginBottom: "20px", color: "#f06236", fontSize: "35px" }}>About Us</h3>
          <p className="about-p">SME NIT Rourkela Student Chapter of the Society for Mining, Metallurgy
            &amp; Exploration was established on 28 th September 2022 by the President
            and Executive Director of SME International. The basic purpose of this
            student chapter is to develop skill and interest among the students of the
            National Institute of Technology (NIT) Rourkela about the role of mining
            engineering in societal advancement and nation-building. The student
            chapter collectively works to establish itself as a strong and prospering
            body of mining engineers, researchers, and academicians.
            The student chapter has different wings which provide and update student
            members about mining activities across the world, cutting-edge
            technology, and recent research and development (R&amp;D) for sustainable
            mining. It hosts technical events at national level for skill improvement
            and exchange of ideas with the national and international organisations.
            Also, it hosts R&amp;D talks by eminent professionals with international
            expertise in their respective domains for its student members. It
            encourages the young generation to engage in mining-related R&amp;D (coal
            and non-coal) to minimize carbon emissions, protect the environment and
            fulfil the energy demand of the nation. The student chapter also serves as
            the interface between alumni of NIT Rourkela and student members to
            enrich their knowledge. The overall aim of the chapter is to enhance
            professional mindset and involvement towards sustainable mining. It
            provides learning opportunities with ample national and international
            exposure to the student members, fostering the development of leadership
            skills and self-confidence
          </p>
        </div>
      </div>

      <AnimationOnScroll animateIn="animate__fadeInLeftBig">
        <div className="about-parent">
          <div className="about-div">
            <div className="about-1">
              <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                <h1 style={{ color: "#993414", fontSize: "35px", marginBottom: "20px" , textAlign: "center"}}>Mission</h1>
              </AnimationOnScroll>
              <p style={{ color: "#22313F", fontSize: "20px", lineHeight: "2", textAlign: "center", padding:"10px, auto" }}>To provide and guide the young engineers to develop learning skills with
                cutting-edge technologies and leadership quality for sustainable mining.</p>
            </div>
            <div className="about-2">
              <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                <h1 style={{ color: "#22313F", fontSize: "35px", marginBottom: "20px" , textAlign: "center" }}>Vision</h1>
              </AnimationOnScroll>
              <p style={{ color: "#993414", fontSize: "20px", lineHeight: "2", textAlign: "center", padding:"10px, auto" }}>To become an internationally acclaimed SME Student Chapter to nurture
                mining engineers for sustainable mining for the welfare of society and to
                preserve the blue planet.</p>
            </div>
          </div>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInRightBig">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="objective">
            <h3 style={{ textAlign: "center", marginBottom: "20px", color: "#f06236", fontSize: "35px" }}>Our Objectives</h3>
            <ul>
              <li>Strengthen the technical knowledge of students.</li>
              <li>Promote scientific research in students.</li>
              <li>Enhance leadership skills and integration among members.</li>
              <li>Student representation skills and prestige to the University.</li>
              <li>Disseminate responsible mining with Peruvian society.</li>
            </ul>
          </div>
        </div>
      </AnimationOnScroll>

    </>
  )
}

export default About