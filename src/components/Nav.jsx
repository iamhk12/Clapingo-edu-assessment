import React from 'react'
import clogo from "./clogo.png"
import "./Nav.css"
const Nav = (props) => {


    return (
        <>
            <div className="nav">
                <div className="nav-logo">
                    <img src={clogo} alt="Logo" className='logoimg' />
                </div>
                <div className="nav-mid">
                    <a href="/">Plans & Pricing</a>
                    <a href="/">Teach with us</a>
                    <a href="/">Affiliate Program</a>
                    <a href="/">Kids</a>
                </div>
                <div className="nav-login">
                    <a href="/login"><button className="logIN">{props.txt}</button></a>   
                </div>
            </div>
        </>
    );
}

export default Nav