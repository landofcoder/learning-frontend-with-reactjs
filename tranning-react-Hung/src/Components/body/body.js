import React, { Component } from 'react';
import './body.scss';
import Header from "./Header/Header";
import Container from "./Container/Container";
import Footer from "./Footer/Footer";

class body extends Component {
    render() {
        return (
            <body className="main">
                <Header/>
                <Container/>
                <div className="clear"></div>
                <Footer/>
            </body>
        );
    }
}

export default body;

