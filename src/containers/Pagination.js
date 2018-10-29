import { connect } from "react-redux"
import Pagination from "../components/pagination/Pagination";
import {initNews} from "../actions/ActionCreators";

const mapStateToProps = (state) => {
    return {
        // + to convert string to number.
        currentPage: +state.newsInfo.currentPage, 
        status: state.newsInfo.status
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNextPage: pageNumber => dispatch(initNews(pageNumber))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);