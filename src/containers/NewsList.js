import { connect } from "react-redux"
import NewsList from "../components/news/NewsList";
import {openModal} from "../actions/ActionCreators";

const mapStateToProps = (state) => {
    return {
        newsList: state.newsInfo.newsList,
        status: state.newsInfo.status
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNewsClick: (item) => dispatch(openModal(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);