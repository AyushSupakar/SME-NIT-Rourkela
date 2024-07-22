import React from 'react'
import './Member.css'

function Member(props) {
  return (
    <div className="card-div">
        <div className="img-div">
            <img className="img" src={props.img} />
        </div>
        <div className="info-div">
            <h4>{props.name}</h4>
            <p>{props.position}</p>
        </div>
    </div>
  )
}

export default Member