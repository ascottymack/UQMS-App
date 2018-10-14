import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import PropTypes from "prop-types";
import { COLORS, FONTS } from "./style";

let moment = require("moment");

class EventModal extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam("title", "Event"),
        };
    }

    constructor(props) {
        super(props);
        this.props.navigation.setParams({title: this.props.currentEvent[0].eventName});
    }

    componentDidMount() {
        
    }

    render() {
        return(
            <View style={style.mainContainer}>
                <ScrollView 
                    contentContainerStyle={style.subContainer}>
                    <View style={style.topBannerContainer}>
                        <View style={style.accentContainer}>
                            <Text style={style.dateTimeText}>{moment(this.props.currentEvent[0].eventMoment).format("DD MMM[\n]hh:mm a")}</Text>
                        </View>
                        <View style={style.locationContainer}>
                            <Text style={style.locationText}>{this.props.currentEvent[0].eventLocation}</Text>
                        </View>
                    </View>
                    <View style={style.bodyContainer}>
                        <Text style={style.eventDescriptionText}>{this.props.currentEvent[0].eventDescription}</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

EventModal.propTypes = {
    navigation: PropTypes.object,
};

const style = StyleSheet.create({
    mainContainer: {
        backgroundColor: COLORS.BackgroundColor,
        flex: 1,
    },
    subContainer: {
        margin: 5,
        borderRadius: 10,
        flex: 1,
    },
    topBannerContainer: {
        flex: 1, 
        flexDirection: "row", 
        justifyContent:"flex-start",
    },
    accentContainer: {
        flex: 1,
        backgroundColor: COLORS.BodyAccentColor,
        padding: 15,
        borderTopLeftRadius: 10,
    },
    locationContainer: {
        flex: 2,
        backgroundColor: COLORS.BodyAccentMediumColor,
        padding: 15,
        borderTopRightRadius: 10,
    },  
    dateTimeText: {
        fontFamily: FONTS.FontFamily,
        fontSize: 20
    },
    eventDescriptionText: {
        fontFamily: FONTS.FontFamily,
        fontSize: 15
    },
    locationText: {
        fontFamily: FONTS.FontFamily,
        fontSize: 20
    },
    bodyContainer: {
        flex: 5,
        backgroundColor: COLORS.BodyBackgroundColor,
        padding: 15,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    }
});

export default EventModal;
