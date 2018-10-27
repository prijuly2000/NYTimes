import { connect } from "react-redux"
import Modal from "../components/news/Modal";
import {closeModal} from "../actions/ActionCreators";

const mapStateToProps = (state) => {
    return {
        selectedItem: state.newsInfo.selectedItem
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClose: () => dispatch(closeModal())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);