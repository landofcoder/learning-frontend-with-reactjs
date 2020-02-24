import React,{Component} from 'react';
import image from "./search.png";
import './Container.scss'

const list = ['a', 'b', 'c'];

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            list,
        };
    }
    onChangeValue = event => {
        this.setState({ value: event.target.value });
    };
    onAddItem = () => {
        this.setState(state => {
            const list = state.list.concat(state.value);
            return {
                list,
                value: '',
            };
        });
    };
    onClearArray = () => {
        this.setState({ list: [] });
    };
    onResetArray = () => {
        this.setState({ list });
    };

    render() {
        return (
            <div className="site-content">
                <div className="banner"></div>
                <div className="sidebar-container">
                    <div className="sidebar">
                        <div className="sidebar-top"></div>
                        <div className="sidebar-item">
                            <h3>Latest News</h3>
                            <h4>NEW WEBSITE LAUNCHED</h4>
                            <h5>June 1st, 2014</h5>
                            <p>2014 sees the redesign of our website. Take a look around and let us know what
                                you
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

                    <ul>
                        {this.state.list.map(item => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.onChangeValue}
                    />
                    <br/>
                    <br/>
                    <button type="button" onClick={this.onAddItem} disabled={!this.state.value}>
                        Add
                    </button>
                    <br/>
                    <br/>
                    <button type="button" onClick={this.onClearArray}>
                        Clear Array
                    </button>
                    <br/>
                    <br/>
                    <button type="button" onClick={this.onResetArray}>
                        Reset Array
                    </button>
                    <br/>
                    <br/>
                    <h1>Welcome to the textured_orbs template</h1>
                    <br/>
                    <p>
                        This standards compliant, simple, fixed width website template is released as an 'open
                        source' design (under a <a href="#"> Creative Commons Attribution 3.0 Licence </a> ),
                        which
                        means that you are free to download and use it for anything you want (including
                        modifying
                        and amending it). All I ask is that you leave the 'design from HTML5webtemplates.co.uk'
                        link
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
        );
    }
}

export default Container;