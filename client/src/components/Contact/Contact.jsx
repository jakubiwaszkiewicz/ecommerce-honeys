import './Contact.scss'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
    return (
        <div className='contact'>
            <div className="wrapper">
                <span className="title">BE IN TOUCH WITH US:</span>
                <div className="mail">
                    <input type="text" placeholder="Enter your e-mail..." />
                    <button>JOIN US</button>
                </div>
                <div className="icons">
                    <a href='#'><FacebookIcon className='icon'/></a>
                    <a href='#'><InstagramIcon className='icon'/></a>
                    <a href='#'><TwitterIcon className='icon'/></a>
                    <a href='#'><GitHubIcon className='icon'/></a>
                </div>
            </div>
        </div>
    )
}
export default Contact;