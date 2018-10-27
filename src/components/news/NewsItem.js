import React from "react";
import PropTypes from "prop-types";
import { formatDate } from "../../utils/Utils";
import Image from "./Image";
import "../../css/newsItem.css";

/**
 * NewsItem - displays news in card format.
 */
class NewsItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleNewsClick = this.handleNewsClick.bind(this);
    }

    handleNewsClick() {
        this.props.onClick(this.props.item);
    }

    render() {
        const {item, isModal} = this.props;
        const isMediaPresent = item.multimedia.length;
        return (<div className={`newsItem ${isModal ? "newsItem--modal" : ""}`} onClick={this.handleNewsClick}>
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
                    <Image className="newsItem__imageBox" srcList={item.multimedia.map(mm => mm.url)}/> : null
            }
            <a className="newsReadMore" onClick={this.handleNewsClick}>Read more...</a>
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
    index: PropTypes.number,
    isModal: PropTypes.bool
};

NewsItem.defaultItem = {
    isModal: false,
    onClick: () => {}
};

export default NewsItem;