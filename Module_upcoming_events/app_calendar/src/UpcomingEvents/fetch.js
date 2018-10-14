export function fetchEventsFromSite(url) {
    return fetch(url + "/events", {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    }).then(response => Promise.all([response, response.json()]));
}