import React from "react";
import PropTypes from "prop-types";

const HOST = "https://www.nytimes.com/";

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentSrc: props.srcList[0], currentSrcIndex: 0};
        this.max = props.srcList.length;
    }

    componentDidMount () {
        this.interval = setInterval((function() {
            let newSrcIndex = this.state.currentSrcIndex + 1;
            newSrcIndex > this.max && (newSrcIndex = 0);
            const newSrc = this.props.srcList[newSrcIndex];
            this.setState({
                currentSrcIndex: newSrcIndex,
                currentSrc: newSrc
            });
        }).bind(this), 2000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (<img alt="Image not found" src={`${HOST}${this.state.currentSrc}`} className={this.props.className} />);
    }
}

Image.propTypes = {
    className: PropTypes.string,
    srcList: PropTypes.arrayOf(PropTypes.string)
}

export default Image;