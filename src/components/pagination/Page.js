import React from "react";
import PropTypes from "prop-types";

/**
 * Page - displays each pagination item.
 */
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
        return (<div><button key={index} className={`page ${isSelected && "page--selected"}`} onClick={this.handleClick}>
            {index}
        </button></div>);
    }
};

Page.propTypes = {
    index: PropTypes.number,
    isSelected: PropTypes.bool
}