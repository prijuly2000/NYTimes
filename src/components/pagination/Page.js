import React from "react";
import PropTypes from "prop-types";

// Adding Page to improve ease of dev and maintenance.
export default class Page extends React.Component { 
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    } 

    handleClick() {
        // more secure cause it does not depend on HTML attributes.
        this.props.onClick(this.props.index);
    }

    render() {
        const {index, isSelected} = this.props;
        return (<button key={index} className={`page ${isSelected && "pageSelected"}`} onClick={this.handleClick}>
            {index}
        </button>);
    }
};

Page.propTypes = {
    index: PropTypes.number,
    isSelected: PropTypes.bool
}