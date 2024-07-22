import React from 'react'
import './Background.css'
import image0 from '../../Images/1.jpg'
import image1 from '../../Images/2.jpg'
import image2 from '../../Images/3.jpg'
import image3 from '../../Images/4.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function Background() {
  return (
    <div style={{width:"100%"}}>
    <p className="clg-name-p">
        <h6>WELCOME TO</h6>
        SME NIT ROURKELA
        <h6>STUDENT CHAPTER</h6>
        </p>
    <Carousel showArrows={false} showIndicators={false} showStatus={false} showThumbs={false} autoPlay={true} interval={2000} dynamicHeight={false} infiniteLoop={true} animationHandler={'fade'} stopOnHover={false}>
                <div>
                    <img style={{height:"100vh",width:"100%"}} src={image0} />
                </div>
                <div>
                    <img style={{height:"100vh"}} src={image1} />
                </div>
                <div>
                    <img style={{height:"100vh"}} src={image2} />
                </div>
                <div>
                    <img style={{height:"100vh"}} src={image3} />
                </div>

            </Carousel>
    </div>
  )
}

export default Background