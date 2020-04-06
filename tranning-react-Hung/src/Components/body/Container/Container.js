import React, {Component} from 'react';
import image from "./search.png";
import './Container.scss'


const defaultList = [
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
        age: 25,
        email: 'prettyemma@gmail.com',
        address: 'USA'
    },
    {
        id: 3,
        name: 'Frank',
        age: 29,
        email: 'shameless@gmail.com',
        address: 'USA'
    }];

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            id: 0,
            age: 0,
            name: '',
            email: '',
            address: '',
            listDefault: defaultList,
            list: defaultList,
        };
    }

    onChangeValue = event => {
        this.setState({value: event.target.value});
    };


    onChangeId = event => {
        const {name, value} = event.target;
        this.setState({id: event.target.value})
    };
    onChangeName = event => {
        const {name, value} = event.target;
        this.setState({name: event.target.value});
    };
    onChangeAge = event => {
        const {name, value} = event.target;
        this.setState({age: event.target.value});
    };
    onChangeEmail = event => {
        const {name, value} = event.target;
        this.setState({email: event.target.value});
    };
    onChangeAddress = event => {
        const {name, value} = event.target;
        this.setState({address: event.target.value});
    };
    onAddItem = () => {
        const id = this.state.id;
        const name = this.state.name;
        const age = this.state.age;
        const email = this.state.email;
        const address = this.state.address;
        let item = {
            id: Number(id),
            name: name,
            age: Number(age),
            email: email,
            address: address
        };
        const { list } = this.state;
        const newList = [...list];
        let index = 0;
        for(let i = 0; i < newList.length; i++){
            if(newList[i].id === id){
                index = i;
            }
        }
        if(newList[index].id === id){
            newList.splice(index, 1,item);
        }else{
            newList.push(item);
        }
        this.setState({list: newList});
    };

    onUpdateItem = ((id) => {
       const { list } = this.state;
       const listUpdate = [...list];
       console.log(listUpdate);
       let index = 0;
       for(let i = 0; i < listUpdate.length; i++){
           if(listUpdate[i].id === id){
               index = i;
           }
       }
       let newItem = listUpdate[index];
       console.log('Item: ', newItem)

       // console.log('listUpdate', listUpdate)
        this.setState({id: newItem.id,
            name: newItem.name,
            age: newItem.age,
            email: newItem.email,
            address: newItem.address} );
    });


    onRemoveItem = ((id) => {
        const { list } = this.state;
        const listArr = [...list];
        console.log(listArr);
        let index = 0;
        for(let i =0; i < listArr.length; i++){
            if(listArr[i].id === id )
            {
                index = i;
            }
        }
        console.log('index ', index);
        listArr.splice(index,1);
        console.log('after listArr:', listArr);
        this.setState({list: listArr});
    });

    // onRemoveItem = ((id) => {
    //     this.setState(state => {
    //         const list = state.list.filter(item => item.id !== id);
    //         return {
    //             list,
    //         };
    //     });
    // });


    onReset = () => {
        this.setState({list: defaultList})
    };




    render() {
        // const {item} = this.state;
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
                        {this.state.list.map(( item, index) => (
                            <li index={item.id}>
                                {index.id}<strong>ID: </strong> {item.id}
                                <br/>
                                {index.id}<strong>name: </strong> {item.name}
                                <br/>
                                {index.id}<strong>age: </strong> {item.age} years old.
                                <br/>
                                {index.id}<strong>email :</strong> {item.email}
                                <br/>
                                {index.id}<strong>name :</strong> {item.address}
                                <br/>
                                <button type="button" onClick={() => this.onUpdateItem(item.id)}>
                                    Update
                                </button>

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
                          onChange={this.onChangeValue}>
                        <label>
                            id:<br/>
                            <input type="text" value={this.state.id} name="id" onChange={this.onChangeId}/>
                            <br/>name:<br/>
                            <input type="text" value={this.state.name} name="name" onChange={this.onChangeName}/>
                            <br/>age:<br/>
                            <input type="text" value={this.state.age} name="age" onChange={this.onChangeAge}/>
                            <br/>email:<br/>
                            <input type="text" value={this.state.email} name="email" onChange={this.onChangeEmail}/>
                            <br/>address: <br/>
                            <input type="text" value={this.state.address} name="address" onChange={this.onChangeAddress}/>
                        </label><br/>
                        <br/>

                        <button type="button" onClick={this.onAddItem} >
                            Add
                        </button>
                    </form>
                    {/*<button type="button" onClick={this.onClearArray}>*/}
                    {/*    Clear Array*/}
                    {/*</button>*/}
                    <br/>
                    <button type="button" onClick={this.onReset}>
                        Reset
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