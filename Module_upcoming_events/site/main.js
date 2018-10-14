
var express = require("express");
var app = express();
var moment = require("moment");

const SITE_SETTINGS = {
    port: "3000",

};

function createEventObject(id, eventName, eventDescription, eventMoment, eventLocation) {
    return {
        id,
        eventDescription,
        eventLocation,
        eventMoment,
        eventName,
    };
}

function getEventsFromMySQL() {
    return {
        events: [
            createEventObject(0, "event1", "some event", moment("20180909", "YYYYMMDD").format(), "here"),
            createEventObject(1, "event1", "some event", moment("20181110", "YYYYMMDD").format(), "here"),
            createEventObject(2, "event1", "some event", moment("20181111", "YYYYMMDD").format(), "here"),
            createEventObject(3, "event1", "some event", moment("20181112", "YYYYMMDD").format(), "here"),
            createEventObject(4, "event1", "some event", moment("20181108", "YYYYMMDD").format(), "here"),
        ]
    };
}

app.get("/events", (req, res) => {
    console.log("GET EVENTS: " + JSON.stringify(getEventsFromMySQL(), null, 2));
    res.send(JSON.stringify(getEventsFromMySQL()));
});

app.listen(SITE_SETTINGS.port, console.log(`Site listening on port ${SITE_SETTINGS.port}`));
