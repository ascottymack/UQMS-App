import { connect } from "react-redux";
import DisplayUpcoming from "./DisplayUpcoming";
import {fetchEventsRequest} from "./thunks";

let moment = require("moment");

//This basic component is a smart container for the DisplayUpcoming list of upcoming events
/*
        Passes a prop to DisplayUpcoming called upcomingEvents that contains the events to display
        Passes a function prop to DisplayUpcoming called onRefresh that handles the updating of store
*/

const mapStateToProps = state => {
    console.log(state.events);
    if (state.events.hasOwnProperty("error")) {
        return {
            //Promise returned with an error
            upcomingEvents: [],
            refreshing: false,
            error: "Could not find events; make sure you are connected to the Internet and try again."
        };
    } else {
        return {
            // Promise returned successfully
            // Filters out events earlier than system time & orders them by most recent
            upcomingEvents: state.events
                .filter(event => moment(event.eventMoment).isAfter(moment()))
                .sort((a, b) => moment(a.eventMoment).isBefore(moment(b.eventMoment)) ? -1 : 1),
            refreshing: state.fetching,
            error: "",
        };
    }
};

const mapDispatchToProps = dispatch => ({
    // Dispatches server refresh thunk to store & activates callback (default no callback)
    onRefresh: () => {
        dispatch(fetchEventsRequest());
    },
});

const EventAgenda = connect(
    mapStateToProps,
    mapDispatchToProps
)(DisplayUpcoming);

export default EventAgenda;
