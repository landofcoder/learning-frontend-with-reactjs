import React, {Component} from "react";
import {connect} from 'react-redux';
import {setVisibleFilter} from "../../actions";
import PropTypes from 'prop-types';

class Filter_link extends Component{
    constructor() {
        super();
        this.handleSetvisibleFilter = this.handleSetvisibleFilter.bind(this)
    }
    handleSetvisibleFilter(event){
        event.preventDefault();
        this.props.setVisibleFilter(this.props.filter_text)
    }
    render() {
        return(
            <a href="" onClick={event => this.handleSetvisibleFilter(event)}>{this.props.filter_text}</a>
        )
    }
}
Filter_link.protoType = {
    filter_text: PropTypes.string.isRequired
};
// FilterLink có thể gọi được action setVisibleFilter thông qua props của nó
export default connect(null, {setVisibleFilter})(Filter_link)