import React from "react";
import PropTypes from "prop-types";
import NewsItem from "../components/NewsItem";

const Modal = (props) => {
    return (<div className="newsModal">
        <button className="modalClose" onClick={props.onClose}>X</button>
        <NewsItem item={this.props.selectedItem}/>
    </div>);
}

Modal.propTypes = {
    selectedItem: PropTypes.object,
    onClose: PropTypes.func
};

export default Modal;