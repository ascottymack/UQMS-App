export const ADD_EVENT = "ADD_EVENT";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
export const FETCH_BEGIN = "FETCH_BEGIN";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const VisibilityFilters = {
    SHOW_ALL:"SHOW_ALL",
    SHOW_UPCOMING:"SHOW_UPCOMING",
    SHOW_PAST:"SHOW_PAST",
};

let eventID = 0;

export function addEvent(eventName, eventMoment, eventDescription, eventLocation="TBD") {
    return {
        type: ADD_EVENT,
        id: eventID++,
        eventName,
        eventMoment,
        eventDescription,
        eventLocation
    };
}

export function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    };
}

export function beginEventsFetch() {
    return {
        type: FETCH_BEGIN,
    };
}

export function fetchEventsSuccess(payload) {
    return {
        type: FETCH_SUCCESS,
        payload
    };
}

export function fetchEventsFailure(error) {
    return {
        type: FETCH_FAILURE,
        error,
    };
}