import React from 'react'
import './Gimg.css'

function Gimg(props) {
  return (
    <div className="card-divg">
        <div className="img-divg">
            <img className="imgg" src={props.img} />
        </div>
        <div className="info-divg">
            <h4>{props.name}</h4>
            <p>{props.position}</p>
        </div>
    </div>
  )
}

export default Gimg