import { connect } from "react-redux"
import Pagination from "../components/pagination/Pagination";
import {initNews} from "../actions/ActionCreators";

const mapStateToProps = (state) => {
    return {
        currentPage: +state.newsInfo.currentPage, // + to convert string to number.
        status: state.newsInfo.status
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNextPage: pageNumber => dispatch(initNews(pageNumber))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);