import React,{Component} from 'react';
import  './Footer.scss'

class Footer extends Component{
    render() {
        return (
            <div className="footer">
                <p>
                    <a href="#"> Home </a>
                    |
                    <a href="#"> Example </a>
                    |
                    <a href="#"> A Page </a>
                    |
                    <a href="#"> Another Page </a>
                    |
                    <a href="#"> Contact Us </a>
                </p>
                <p>
                    Copyright © textured_orbs
                    |
                    <a href="#"> HTML5 </a>
                    |
                    <a href="#"> CSS3 </a>
                    |
                    <a href="#"> design from HTML5 webtemplates.co.uk </a>
                </p>
            </div>
        );
    }
}

export default Footer;