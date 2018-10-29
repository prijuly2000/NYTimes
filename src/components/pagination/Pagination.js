import React from "react";
import PropTypes from "prop-types";
import "../../css/pagination.css";
import {apiStatus} from "../../utils/Enums";
import Page from "./Page";

/**
 * Pagination - displays Page list.
 * Respossible to naviation between pages and triggering API call for page selection.
 */
class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    handlePageClick(index) {
        this.props.onNextPage(index);
    }

    generateBody() {
        const pages = [];
        const currentPage = this.props.currentPage;
        // If current selected page is less than 5 then display from page 0 to 9.
        // If greater then from currentPage - 5. This will be useful for navigation among pages.
        const start = currentPage < 5 ? 0 : currentPage - 5 ;
        for(let i = start; i < start + 10; i++) {
            pages.push(<Page 
                key={i} 
                index={i} 
                onClick={this.handlePageClick} 
                isSelected={i === currentPage}
            />)
        }
        return pages;
    }

    render() {
        return(<div className="pagination">
            {
                this.props.status === apiStatus.SUCCESS && this.generateBody()
            }
        </div>)
    }
}

Pagination.propTypes = {
    currentPage: PropTypes.number,
    status: PropTypes.oneOf(Object.keys(apiStatus))
}

export default Pagination;