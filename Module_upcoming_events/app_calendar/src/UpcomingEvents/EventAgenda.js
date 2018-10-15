import { connect } from "react-redux";
import DisplayUpcoming from "./DisplayUpcoming";
import {fetchEventsRequest} from "./thunks";
import { VisibilityFilters } from "./actions";

let moment = require("moment");

//This basic component is a smart container for the DisplayUpcoming list of upcoming events
/*
        Passes a prop to DisplayUpcoming called upcomingEvents that contains the events to display
        Passes a function prop to DisplayUpcoming called onRefresh that handles the updating of store
*/

const mapStateToProps = state => {
    if (state.events.hasOwnProperty("error")) {
        return {
            //Promise returned with an error
            upcomingEvents: [],
            refreshing: false,
            error: "Could not find events; make sure you are connected to the Internet and try again."
        };
    } else {
        // Promise returned successfully
        let events = undefined;
        switch(state.visibilityFilter) {
        case VisibilityFilters.SHOW_UPCOMING:
            // Filters out events earlier than system time or later than 14 days away & orders them by most recent
            events = state.events
                .filter(event => (moment(event.eventMoment).isAfter(moment())) && moment(event.eventMoment).isBefore(moment().add(14, "days")))
                .sort((a, b) => moment(a.eventMoment).isBefore(moment(b.eventMoment)) ? -1 : 1);
            if (events.length === 0) {
                //No upcoming events
                return {
                    upcomingEvents: [],
                    refreshing: false,
                    error: "No events within the next 14 days!"
                };
            } else {
                return {
                    upcomingEvents: events,
                    refreshing: false,
                    error: ""
                };
            }
        case VisibilityFilters.SHOW_PAST:
            // Filters out events later than system time & orders by most recent
            return {
                upcomingEvents: state.events
                    .filter(event => moment(event.eventMoment).isBefore(moment()))
                    .sort((a, b) => moment(a.eventMoment).isBefore(moment(b.eventMoment)) ? 1 : -1),
                refreshing: state.fetching,
                error: "",
            };
        case VisibilityFilters.SHOW_FUTURE:
            // Filters out events earlier than system time & orders by nearest
            return {
                upcomingEvents: state.events
                    .filter(event => moment(event.eventMoment).isAfter(moment()))
                    .sort((a, b) => moment(a.eventMoment).isBefore(moment(b.eventMoment)) ? -1 : 1),
                refreshing: state.fetching,
                error: "",
            };
        default: return;
        }
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
