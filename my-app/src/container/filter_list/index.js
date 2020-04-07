import React, {Component} from "react";
import FilterLink from "./filter_link";

class FilterList extends  Component{
    render() {
        return(
            <div>
                <FilterLink filter_text = {'SHOW_LIST'}/>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <FilterLink filter_text = {'LIST_COMPLETED'}/>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <FilterLink filter_text = {'LIST_ACTIVE'}/>
            </div>
        )
    }
}

export default FilterList