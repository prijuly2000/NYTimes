import React from "react";
import PropTypes from "prop-types";
import {formatDate} from "../utils/Utils";
import Image from "./Image";

class NewsItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleNewsClick = this.handleNewsClick.bind(this);
    }

    handleNewsClick() {
        this.props.onClick(this.props.item);
    }

    render() {
        const item = this.props.item;
        const isMediaPresent = item.multimedia.length;
        return (<div className="newsItem" onClick={this.handleNewsClick}>
            <div className="newsScroll">
                {
                    isMediaPresent ? <marquee behavior="scroll" direction="left" className="newsHeading">
                        {item.snippet}
                    </marquee> : <div className="newsHeading newsNoImg">
                        {item.snippet}
                    </div>
                }
            </div>
            {
                isMediaPresent ? 
                    <Image className="newsImage" srcList={item.multimedia.map(mm => mm.url)}/> : null
            }
            <div className="newsInfo">
                <div className="newsDate">{item.pub_date && formatDate(new Date(item.pub_date))}</div>
                <div>{item.source}</div>
            </div>
        </div>);
    }
}

NewsItem.propTypes = {
    item: PropTypes.object,
    onClick: PropTypes.func,
    index: PropTypes.number
};

export default NewsItem;