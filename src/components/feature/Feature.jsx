import React from 'react'
import './feature.css';
const Feature = ({title,text}) => {
  return (
    <div className="gpt3__feature">
      <div className="gpt3__feature-title">
        <div className="gpt3__feature-gradient__box">
        </div>
        <p>{title}</p>
      </div>
      <div className="gpt3__feature-text">
        {text}
      </div>
    </div>
  )
}

export default Feature
