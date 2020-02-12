import React, {Component} from "react";
import "./Header.css";

class Header extends Component {
    render() {
        console.log('run header');
        return(
            <div className='wrapHeader'>
                Header component
            </div>
        )
    }
}

export default Header;