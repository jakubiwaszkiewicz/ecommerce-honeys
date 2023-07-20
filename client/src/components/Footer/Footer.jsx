import React from 'react'
import './Footer.scss'

export default function Footer() {
  return (
    <div className="footer">
        <div className="top">
            <div className="item">
                <h1>Products</h1>
                <span>Honey1</span>
                <span>Honey2</span>
                <span>Honey3</span>
            </div>
            <div className="item">
                <h1>Links</h1>
                <span>FAQ</span>
                <span>Pages</span>
                <span>Cookies</span>
            </div>
            <div className="item">
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
            <div className="item">
                <h1>Contact</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
        </div>
        <div className="bottom">
            <div className="left">
                <img src="img/logo-2.png" alt="" className='logo logo-2'/>
                <span className='copyright'>© Copyright 2023. All Rights Reserved</span>
            </div>
            <div className="right">
                <img src="img/payment.png" alt="" />
            </div>
        </div>
    </div>
  )
}
