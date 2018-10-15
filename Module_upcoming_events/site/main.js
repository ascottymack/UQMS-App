
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
            createEventObject(1, "event2", "some event", moment("20181022", "YYYYMMDD").format(), "here"),
            createEventObject(2, "event3", "some event", moment("20181111", "YYYYMMDD").format(), "here"),
            createEventObject(3, "event4", "some event", moment("20181112", "YYYYMMDD").format(), "here"),
            createEventObject(4, "event5", "some event", moment("20181108", "YYYYMMDD").format(), "here"),
            createEventObject(5, "event6", "some event", moment("20180808", "YYYYMMDD").format(), "here"),
            createEventObject(6, "event7", "some event", moment("20180708", "YYYYMMDD").format(), "here"),

        ]
    };
}

app.get("/events", (req, res) => {
    console.log("GET EVENTS: " + JSON.stringify(getEventsFromMySQL(), null, 2));
    res.send(JSON.stringify(getEventsFromMySQL()));
});

app.listen(SITE_SETTINGS.port, console.log(`Site listening on port ${SITE_SETTINGS.port}`));
