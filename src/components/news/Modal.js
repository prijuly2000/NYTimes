import React from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import "../../css/modal.css";

/** 
 * Modal - Stateful component needed to handle keydown key press 
 * case as function binding is needed. And event listener needs to be added or removed.
*/
class Modal extends React.Component { 
    constructor(props) {
        super(props);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount() {
        // Listener to enable key event.
        this.keydownListner = document.addEventListener("keydown" , this.handleKeyDown);
    }

    componentWillMount() {
        // Removing listner to prevent potential error.
        document.removeEventListener("keydown", this.keydownListner);
    }

    handleKeyDown(e) {
        e.preventDefault();
        // Close the modal if Esc key pressed.
        e.key == "Escape" && this.props.onClose();        
    }

    getModalBody() {
        return (<div className="newsModal">
             <button className="newsModal__closeButton" onClick={this.props.onClose}>X</button>
            <NewsItem item={this.props.selectedItem} isModal={true}/>
        </div>)
    }
    
    render() {
        // Enable/disable scrolling on main page when modal is closed/open.
        if (this.props.selectedItem) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll"
        }
        return (<div>
            {/* Blank screen covering the whole screen. Modal closes when clicked on it. */}
            <div className={this.props.selectedItem && "newsModalScreen"} onClick={this.props.onClose}/>
            {this.props.selectedItem && this.getModalBody()}
        </div>);
    }
}

Modal.propTypes = {
    selectedItem: PropTypes.object,
    onClose: PropTypes.func
};

export default Modal;