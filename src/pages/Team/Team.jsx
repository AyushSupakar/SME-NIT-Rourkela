import React,{useEffect} from 'react'
import Member from '../../components/Member/Member'

import Sir from "../../Images/Member/Sir.jpg"

import Abhi from "../../Images/Member/Abhishek.jpg"
import Poulami from "../../Images/Member/Poulami.jpg"
import Ramanababu from "../../Images/Member/Ramanababu.jpg"
import Ayush_K from "../../Images/Member/Ayush_K.jpg"
import Kartik from "../../Images/Member/Kartik.jpeg"

import Piyush from "../../Images/Member/Piyush.jpg"
import Rishav from "../../Images/Member/Rishav.jpg"
import Pranay from "../../Images/Member/Pranay.jpg"

import Aman from "../../Images/Member/Aman.jpg"
import Asish from "../../Images/Member/Asish.jpg"
import Somen from "../../Images/Member/Somen.jpg"

import Pratish from "../../Images/Member/Pratish.jpg"
import Ayush from "../../Images/Member/Ayush.jpg"
import Devi from "../../Images/Member/Devi.jpeg"

import Barun from "../../Images/Member/Barun.jpeg"
import Vishu from "../../Images/Member/Vishu.jpg"
import Aniket from "../../Images/Member/Aniket.jpg"
import Shivam from "../../Images/Member/Shivam.jpg"

import Reshab from "../../Images/Member/Reshab.jpg"
import Gagan from "../../Images/Member/Gagan.jpg"
import Raju from "../../Images/Member/Raju.jpg"
import Arvind from "../../Images/Member/Arvind.jpg"

import Lenin from "../../Images/Member/Lenin.jpg"

import Group from "../../Images/Member/Group.jpg"

import './Team.css'

function Team() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <div className="team-group">
        <img className="team-group-img" src={Group}></img>
      </div>
    <div className="team-parent">

      <div className="hierarchy">
        <h1 style={{fontSize:"35px", marginBottom:"30px", color:"#993414"}}>Office Bearers</h1>
        <div className="section">
          <Member img={Sir} name="Dr. Sahendra Ram" position="Faculty Advisor cum Sponsor" />
        </div>
        <div className="section">
          <Member img={Abhi} name="Mr. Abhishek Kumar Singh" position="President" />
          <Member img={Poulami} name="Ms. Poulami Konar" position="Secretary" />
          <Member img={Ramanababu} name="Mr. Makireddi Ramanababu" position="Treasurer" />
        </div>

        <div className="section">
          <Member img={Kartik} name="Mr. Kartik Kant Raman" position="Vice-President" />
          <Member img={Ayush_K} name="Mr. Ayush Kumar" position="Joint-Secretary" />
        </div>
      </div>

      <div className="hierarchy">
        <h1 style={{fontSize:"35px", marginBottom:"30px", color:"#993414"}}>Core Team</h1>

        <div className="section">
          <Member img={Piyush} name="Mr. Piyush Kumar" position="Subcommittee Head" />
          <Member img={Rishav} name="Mr. Rishav Raj" position="Event Head" />
          <Member img={Pranay} name="Mr. Pranaya Kishore Raychoudhary" position="Joint Event Head" />
        </div>

        <div className="section">
          <Member img={Aman} name="Mr. Aman Raj" position="Coordinator: Field Trips" />
          <Member img={Asish} name="Mr. Ashish kumar Barah" position="Human Resources: Membership Development" />
          <Member img={Somen} name="Mr. Somen Soumyadarshi" position="Joint Human Resources: Membership Development" />
        </div>

        <div className="section">
          <Member img={Pratish} name="Mr. Pratish Sahu" position="Designing Head" />
          <Member img={Ayush} name="Mr. Ayush Anshuman Supakar" position="Business Development Head" />
          <Member img={Devi} name="Mr. Devi Prasad Rana" position="Joint Business Development Head" />
        </div>

        <div className="section-2">
          <Member img={Barun} name="Mr. Barun Bedanta Sahoo" position="Coordinator: R&D Talk" />
          <Member img={Vishu} name="Mr. Vishu Sharma" position="Coordinator: R&D Talk" />
          <Member img={Aniket} name="Mr. Aniket Banshal" position="Media & Promotion Head" />
          <Member img={Shivam} name="Mr. Shivam Barla" position="Joint Media & Promotion Head" />
        </div>

      </div>

      <div className="hierarchy">
        <h1 style={{fontSize:"35px", marginBottom:"30px", color:"#993414"}}>Others</h1>
        <div className="section-2">
          <Member img={Raju} name="Mr. Gadhi Durga Nookaraju" position="Coordinator: Research Wing" />
          <Member img={Gagan} name="Mr. Gagan Sahu" position="Coordinator: Research Wing" />
          <Member img={Arvind} name="Mr. Arvind Chauhan" position="Coordinator: Outreach work" />
          <Member img={Reshab} name="Mr. Rishabh Doshi" position="Coordinator: Outreach work" />
        </div>
      </div>

      <div className="hierarchy">
        <h1 style={{fontSize:"35px", marginBottom:"30px", color:"#993414"}}>Developers</h1>
        <div className="section">
          <Member img={Lenin} name="Mr. Lenin Meher" position="Web Developer" />
          <Member img={Ayush} name="Mr. Ayush Anshuman Supakar" position="Web Developer" />
        </div>
      </div>

    </div>
    </>
  )
}

export default Team