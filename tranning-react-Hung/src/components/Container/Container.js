import React, {Component} from "react";

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number1: 0,
            number2: 0,
            result: 0,
            students: []
        };
    }

    changeNumberOne = event => {
        const number1 = event.target.value;
        this.setState({number1});
    };

    changeNumberTwo = event => {
        const number2 = event.target.value;
        this.setState({number2});
    };

    render() {
        const total = Number(this.state.number1) + Number(this.state.number2);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-6 offset-xl-3">
                        <div className="form-group">
                            <label htmlFor="number-1">Number 1</label>
                            <input
                                onChange={this.changeNumberOne}
                                className="form-control"
                                id="number-1"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="number-2">Number 2</label>
                            <input
                                onChange={this.changeNumberTwo}
                                className="form-control"
                                id="number-2"
                            />
                        </div>
                        <h3>{total}</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Container;