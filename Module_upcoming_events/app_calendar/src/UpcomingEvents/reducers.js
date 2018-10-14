import { VisibilityFilters, SET_VISIBILITY_FILTER, FETCH_FAILURE, FETCH_SUCCESS, FETCH_BEGIN } from "./actions";
import { combineReducers } from "redux";

//Initial state of app (currently not used)
export const initialState = {
    visibilityFilters: VisibilityFilters.SHOW_ALL,
    events: [{
        id: "-1",
        eventName: "",
        eventMoment: null,
        eventDescription: "",
        eventLocation: "",
    }],
    fetching: false,
};

// TODO: use visibility filters
function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
    switch(action) {
    case SET_VISIBILITY_FILTER:
        return action.filter;
    default:
        return state;
    }
}

function events(state=[], action) {
    switch(action.type) {
    case FETCH_SUCCESS:
        return action.payload.events;
    case FETCH_FAILURE:
        return {
            error: action.error,
        };
    default:
        return state;
    }
}

function fetching(state=false, action) {
    switch(action.type) {
    case FETCH_BEGIN:
        return true;
    case FETCH_FAILURE:
        return false;
    case FETCH_SUCCESS:
        return false;
    default: 
        return state;
    }
}

const calendarApp = combineReducers(
    {
        visibilityFilter,
        events,
        fetching
    }
);

export default calendarApp;