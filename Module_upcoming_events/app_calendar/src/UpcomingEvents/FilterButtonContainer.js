import { connect } from "react-redux";
import { setVisibilityFilter } from "./actions";
import FilterButton from "./FilterButton";

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onPress: () => {
        dispatch(setVisibilityFilter(ownProps.filter));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterButton);



