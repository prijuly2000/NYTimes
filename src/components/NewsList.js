import React from "react";
import PropTypes from "prop-types";
import "../css/newsList.css";
import NewsItem from "./NewsItem";
import { Loading } from "./Loading"

class NewsList extends React.Component {
    constructor(props) {
        super(props);
        this.handleNewsClick = this.handleNewsClick.bind(this);
    }

    handleNewsClick(item) {
        this.props.onNewsClick(item);
    }
    
    render(){
        const isNewsAvailable = Boolean(this.props.newsList);
        return (<Loading status={this.props.status}>
            <div className="newsList">
                {
                    isNewsAvailable &&
                        this.props.newsList.map((item, index) => <NewsItem key={item._id} onClick={this.handleNewsClick} item={item} />)
                }
            </div>
        </Loading>);
    }
};

export default NewsList;