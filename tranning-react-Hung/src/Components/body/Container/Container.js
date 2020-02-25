import React, {Component} from 'react';
import image from "./search.png";
import './Container.scss'


class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            item: {},
            list: [
                {
                    id: 1,
                    name: 'Jone',
                    age: 20,
                    email: 'jone67@gmail.com',
                    address: 'London'
                },
                {
                    id: 2,
                    name: 'Emma',
                    age: 20,
                    email: 'prettyemma@gmail.com',
                    address: 'USA'
                },
                {
                    id: 3,
                    name: 'Frank',
                    age: 20,
                    email: 'shameless@gmail.com',
                    address: 'USA'
                }
            ],
        };
    }
    onRemoveItem = ((id) => {
        this.setState(state => {
            const list = state.list.filter(item => item.id !== id);
            return {
                list,
            };
        });
    });
    onChangeValue = event => {
        this.setState({ value: event.target.value });
    };
    onChange = (event) => {
        // lay ra prop "name" va value cua the input
        const {name, value} = event.target;
        // luu cac value vao state.item
        this.setState(state => {
            return(
                {...state, item: {...state.item, [name]: value}}
                );
        });
    }
    onChangeId = event => {
        this.setState({ id: event.target.id });
    };



    onAddItem = () => {
        let newList = [...this.state.list];
        newList.push(this.state.item);
        this.setState(state => {
            return({...state, list:[...newList], item: {}})
        });
    };
    // onAddItem = () => {
    //     // copy du lieu tu state.list ra 1 bien moi
    //     let newList = [...this.state.list];
    //     // day item đang thao tác và list mới
    //     newList.push(this.state.item);
    //     // thay state.list cũ bằng list mới và reset lại state.item
    //     this.setState(state => {
    //         return ({ ...state , list: [...newList],item: {}})
    //     });
    // };
    // onClearArray = () => {
    //     this.setState({ students: [] });
    // };
    onResetArray = () => {
        this.setState( state =>{
            return (state.list)
        });
    };

    render() {
        const {list, value} = this.state;

        console.log(this.state);

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
                            <li key={item.id}>
                                <strong>ID: </strong> {item.id}
                                <br/>
                                <strong>name: </strong> {item.name}
                                <br/>
                                <strong>age: </strong> {item.age} years old.
                                <br/>
                                <strong>email :</strong> {item.email}
                                <br/>
                                <strong>name :</strong> {item.address}
                                <br/>
                                <button
                                    type="button"
                                    onClick={() => this.onRemoveItem(item.id)}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <form value={this.state.value}
                          onChange={this.onChangeValue} >
                        <label>
                            id:<br/>
                            <input type="text" id={this.state.id} name="id" onChange={this.onChange}/>
                            <br/>name:<br/>
                            <input type="text" name={this.state.name} name="name" onChange={this.onChange}/>
                            <br/>age:<br/>
                            <input type="text" age={this.state.age} name="age" onChange={this.onChange}/>
                            <br/>email:<br/>
                            <input type="text" email={this.state.email} name="email" onChange={this.onChange}/>
                            <br/>address: <br/>
                            <input type="text" address={this.state.address} name="address" onChange={this.onChange}/>
                        </label><br/>
                        <br/>
                        <button type="button" onClick={this.onAddItem} disabled={!this.state.value}>
                            Add
                        </button>
                    </form>
                    {/*<button type="button" onClick={this.onClearArray}>*/}
                    {/*    Clear Array*/}
                    {/*</button>*/}
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