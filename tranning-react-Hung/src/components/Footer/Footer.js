import React, {Component} from "react";
import "./Footer.css";

class Footer extends Component {
    render() {
        console.log('run footer');
        return(
            <footer className="my-footer">
                <h3 className="title">This is footer</h3>
            </footer>
        )
    }
}

export default Footer;