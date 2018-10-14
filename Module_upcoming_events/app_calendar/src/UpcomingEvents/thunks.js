import { fetchEventsSuccess, fetchEventsFailure } from "./actions";
import { fetchEventsFromSite } from "./fetch";
import { SITE_SETTINGS } from "../SiteSettings";

export function fetchEventsRequest() {
    return dispatch => {
        return fetchEventsFromSite(SITE_SETTINGS.url+":"+SITE_SETTINGS.port)
            .then(([response, json]) => {
                if (response.status === 200) {
                    dispatch(fetchEventsSuccess(json));
                } else {
                    dispatch(fetchEventsFailure(response.status));
                }
            }, (error) => {
                dispatch(fetchEventsFailure(error));
            });
    };
}