import React, {Component} from "react";
import "./Header.css";

class Header extends Component {
    render() {
        console.log('run header');
        return(
            <header className="my-header">
                <h1 className="title">This is header</h1>
            </header>
        )
    }
}

export default Header;