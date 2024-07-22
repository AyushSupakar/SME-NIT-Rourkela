import React,{useEffect} from 'react'
import Member from '../../components/Gimg/Gimg'


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

import Slide1 from "../../Images/Gallary/Slide1.jpg"
import Slide2 from "../../Images/Gallary/Slide2.jpg"
import Slide3 from "../../Images/Gallary/Slide3.jpg"
import Slide4 from "../../Images/Gallary/Slide4.jpg"
import Slide5 from "../../Images/Gallary/Slide5.jpg"
import Slide6 from "../../Images/Gallary/Slide6.jpg"
import Slide7 from "../../Images/Gallary/Slide7.jpg"
import Slide8 from "../../Images/Gallary/Slide8.jpg"
import Slide9 from "../../Images/Gallary/Slide9.jpg"
import Slide10 from "../../Images/Gallary/Slide10.jpg"

import Group from "../../Images/Gallary/background.jpg"

import './Gallary.css'

function Gallary() {
  useEffect(() => {
   window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <div className="team-group" id = "ourgallery">
      


      <img className="team-group-img" src={Group}></img> 
        
      </div>
    <div className="team-parent">

      <div className="hierarchy">
        <h1 style={{fontSize:"35px", marginBottom:"30px", color:"#993414"}}>SME Inauguration</h1>

        <div className="section">
          <Member img={Slide1} name="" position="" />
          <Member img={Slide2} name="" position="" />
          <Member img={Slide3} name="" position="" />
          <Member img={Slide4} name="" position="" />
          <Member img={Slide5} name="" position="" />
          <Member img={Slide6} name="" position="" />
          <Member img={Slide7} name="" position="" />
          <Member img={Slide8} name="" position="" />
          <Member img={Slide9} name="" position="" />
          <Member img={Slide10} name="" position="" />

          
        </div>

        
      </div>

    


    </div>
    </>
  )
}

export default Gallary