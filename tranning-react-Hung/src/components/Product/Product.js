import React, { Component } from 'react';


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Header: "Header content from state"
        };
        console.log("Initialization");
    }

    componentWillMount() {
        console.log("componentWillMount");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    render() {
        console.log("render");
        return (
            <div className="container">
                <Product price={1250}>Macbook Pro</Product>
                <Product price={1150}>Mac mini</Product>
                <Product price={950}>Dell N5559</Product>
            </div>
        );
    }
}

export default Product;