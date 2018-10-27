import React from "react";
import PropTypes from "prop-types";
import NewsItem from "../components/NewsItem";
import "../css/modal.css";

const getModalBody = (props) => {
    return (<div className="newsModal">
         <button className="newsModalClose" onClick={props.onClose}>X</button>
        <NewsItem item={props.selectedItem} isModal={true}/>
    </div>)
}

const Modal = (props) => {
    // Enable/disable scrolling when modal is closed/shown.
    if (props.selectedItem) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "initial"
    }
    return (<div>
        <div className={props.selectedItem && "newsModalScreen"} />
        {props.selectedItem && getModalBody(props)}
    </div>);
}

Modal.propTypes = {
    selectedItem: PropTypes.object,
    onClose: PropTypes.func
};

export default Modal;