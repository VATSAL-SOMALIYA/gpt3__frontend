import React from 'react'
import './brand.css';
import { google, slack, atlassian, dropbox, shopify } from './imports';
const Brand = () => {
  return (
    <div className="gpt3__brand padding__section">
        <img src={google} alt="google logo" />
        <img src={slack} alt="slack logo" />
        <img src={atlassian} alt="atlassian logo" />
        <img src={dropbox} alt="dropbox logo" />
        <img src={shopify} alt="shopify logo" />
    </div> 
  )
}

export default Brand
