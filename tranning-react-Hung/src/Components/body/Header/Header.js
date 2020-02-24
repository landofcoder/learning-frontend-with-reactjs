import React, {Component} from 'react';
import './Header.scss'


class Header extends Component {
    render() {
        console.log('run header');
        return (
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
        );
    }
}

export default Header;