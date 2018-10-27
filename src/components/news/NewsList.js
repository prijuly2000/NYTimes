import React from "react";
import PropTypes from "prop-types";
import "../../css/newsList.css";
import NewsItem from "./NewsItem";
import { Loading } from "../Loading"

/**
 * NewsList - displays list of items in a responsive format using flexbox CSS.
 */
class NewsList extends React.Component {
    constructor(props) {
        super(props);
        this.handleNewsClick = this.handleNewsClick.bind(this);
    }

    handleNewsClick(item) {
        this.props.onNewsClick(item);
    }
    
    render(){
        const {status, newsList} = this.props;
        const isNewsAvailable = Boolean(newsList);
        const items = isNewsAvailable &&
            newsList.map((item) => <NewsItem key={item._id} onClick={this.handleNewsClick} item={item} />)
        return (<Loading status={status}>
            <div className="newsList">
                {items}
            </div>
        </Loading>);
    }
};

export default NewsList;

NewsList.propTypes = {
    newsList: PropTypes.arrayOf(PropTypes.object)
}