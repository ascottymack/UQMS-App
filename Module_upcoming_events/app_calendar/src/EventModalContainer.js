import { connect } from "react-redux";
import EventModal from "./UpcomingEvents/EventModal";
import { fetchEventsRequest } from "./UpcomingEvents/thunks";

const mapStateToProps = (state, ownProps) => {
    return {
        currentEvent: state.events.filter(item => item.id === ownProps.navigation.getParam("id", -1)),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRefresh: (callback) => {
            dispatch(fetchEventsRequest());
            //setTimeout(callback(), 5000);
        }
    };
};

const EventModalContainer = connect(
    mapStateToProps, 
    mapDispatchToProps
)(EventModal);

export default EventModalContainer;