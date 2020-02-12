import React, {Component} from "react";

export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = { number_1: "", number_2: "", result: "" };
    }

    changeNumberOne = event => {
        let number_1 = event.target.value;
        if (!isNaN(number_1)) {
            this.setState({ number_1: number_1 });
        }
    };

    changeNumberTwo = event => {
        let number_2 = event.target.value;
        if (!isNaN(number_2)) {
            this.setState({ number_2: number_2 });
        }
    };

    sumNumber = () => {
        let n1 = this.state.number_1;
        let n2 = this.state.number_2;
        if (!isNaN(n1) && !isNaN(n2)) {
            n1 = Number.parseInt(n1);
            n2 = Number.parseInt(n2);
            let n3 = n1 + n2;
            this.setState({ result: n3 });
        } else {
            this.setState({ result: "" });
        }
    };
    render() {
        console.log('run container');
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-6 offset-xl-3">
                        <div className="form-group">
                            <label htmlFor="number_1">Number 1</label>
                            <input
                                onChange={this.changeNumberOne}
                                className="form-control"
                                id="number_1"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="number_2">Number 2</label>
                            <input
                                onChange={this.changeNumberTwo}
                                className="form-control"
                                id="number_2"
                            />
                        </div>
                        <h3>{this.state.result}</h3>
                        <button type="button" onClick={() => this.sumNumber()}>
                            Sum number
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Container;