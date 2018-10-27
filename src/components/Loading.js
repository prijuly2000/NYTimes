import React from "react";
import PropTypes from "prop-types";
import {apiStatus} from "../utils/Enums";
import spinner from "../assets/spinner.gif";

function generateBody(props) {
    switch (props.status) {
        case apiStatus.LOADING:
            return <div className="newsLoading"><img src={spinner} alt="loading"/></div>;
        case apiStatus.FAILED:
            return <h1>We hit a little snag...</h1>
        case apiStatus.SUCCESS:
            return props.children;
        default:
            return "";
    }
}

export const Loading = (props) => {
    return (<div>
        { 
            generateBody(props)
        }
    </div>)
}

Loading.propTypes = {
    onGenerateBody: PropTypes.func
};