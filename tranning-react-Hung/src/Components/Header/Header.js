import React, {Component} from 'react';
import './header.scss'
import image from './search.png';
class Header extends Component {
    render() {
        console.log('run header');
        return (
            <div className="body">
            <div className="main">
                <div className="header">

                    <div className="wap-head-inside">
                        <div className="logo">
                            <div className="logo-text">
                                <h1>
                                    <a href="#">
                                        textured_
                                        <span className="logo-color">orbs</span>
                                    </a>
                                </h1>
                                <h2>Simple. Contemporary. Website Template.</h2>
                            </div>
                        </div>
                        <div className="menubar">
                            <ul className="menu">
                                <li className="selected">
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Examples</a>
                                </li>
                                <li>
                                    <a href="#">A Page</a>
                                </li>
                                <li>
                                    <a href="#">Another Page</a>
                                </li>
                                <li>
                                    <a href="#"> Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="content-header"></div>
                <div className="site-content">
                    <div className="banner"></div>
                    <div className="sidebar-container">
                        <div className="sidebar">
                            <div className="sidebar-top"></div>
                            <div className="sidebar-item">
                                <h3>Latest News</h3>
                                <h4>NEW WEBSITE LAUNCHED</h4>
                                <h5>June 1st, 2014</h5>
                                <p>2014 sees the redesign of our website. Take a look around and let us know what you
                                    think.
                                    <br/><a href="#">Read more</a>
                                </p>
                            </div>
                            <div className="sidebar-base"></div>
                        </div>
                        <div className="sidebar">
                            <div className="sidebar-top"></div>
                            <div className="sidebar-item">
                                <h3>Useful Links</h3>
                                <ul>
                                    <li>
                                        <a href="#">link 1</a>
                                    </li>
                                    <li>
                                        <a href="#">link 2</a>
                                    </li>
                                    <li>
                                        <a href="#">link 3</a>
                                    </li>
                                    <li>
                                        <a href="#">link 4</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="sidebar-base"></div>
                        </div>
                        <div className="sidebar">
                            <div className="sidebar-top"></div>
                            <div className="sidebar-item">
                                <h3>Search</h3>
                                <form method="post" action="#" id="search_form">
                                    <p>
                                        <input className="search" type="text" name="search_field"/>
                                        <img src={image} alt="search"/>

                                    </p>
                                </form>
                            </div>
                            <div className="sidebar-base"></div>
                        </div>
                    </div>
                    <div className="content">
                        <h1>Welcome to the textured_orbs template</h1>
                        <br/>
                        <p>
                            This standards compliant, simple, fixed width website template is released as an 'open
                            source' design (under a <a href="#"> Creative Commons Attribution 3.0 Licence </a> ), which
                            means that you are free to download and use it for anything you want (including modifying
                            and amending it). All I ask is that you leave the 'design from HTML5webtemplates.co.uk' link
                            in the footer of the template, but other than that...
                        </p>
                        <br/>
                        <p>
                            This template is written entirely in <strong> HTML5 </strong> and <strong> CSS </strong>,
                            and can be validated using the links in the footer.
                        </p>
                        <br/>
                        <p>
                            You can view more free HTML5 web templates<a href="#">here.</a>
                        </p>
                        <br/>
                        <p>
                            This template is a fully functional 5 page website, with an <a href="#"> example </a>page
                            that gives examples of all the styles available with this design.
                        </p>
                        <br/>
                        <h2>Browser Compatibility</h2>
                        <br/>
                        <p>This template has been tested in the following browsers:</p>
                        <br/>
                        <ul>
                            <li>Internet Explorer 9</li>
                            <li>FireFox 25</li>
                            <li>Google Chrome 31</li>
                        </ul>
                    </div>
                </div>
                <div className="content-footer"></div>
                <div className="clear"></div>
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
            </div>
            </div>
        );
    }
}

export default Header;