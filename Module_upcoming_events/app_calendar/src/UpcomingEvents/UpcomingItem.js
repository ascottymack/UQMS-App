import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";
import { COLORS, FONTS } from "./style";


let moment = require("moment");

class UpcomingItem extends Component {
    constructor(props) {
        super(props);

        
    }

    render() {
        let date = undefined;
        try {
            date = moment(this.props.eventMoment).format("DD[\n]MMM");
        } catch (e) {
            console.log(e);
        }        
        return(
            <View style={style.mainContainer}>
                <TouchableHighlight style={style.touchableContainer} 
                    onPress={this.props.onPress}>
                    <View style={{flex: 1, flexDirection: "row"}}>
                        <View style={style.dateContainer}>
                            <Text style={style.dateText}>{date}</Text>
                        </View>
                        <View style={style.eventContainer}>
                            <Text style={style.eventTitleText}>
                                {this.props.eventName}
                            </Text>
                            {"\n"}
                            <Text style={style.descriptionText}>
                                {this.props.eventDescription}
                            </Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

UpcomingItem.propTypes = {
    id: PropTypes.number.isRequired,
    eventName: PropTypes.string.isRequired,
    eventMoment: PropTypes.string.isRequired,
    eventDescription: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
};

const style = StyleSheet.create({
    mainContainer: {
        margin: 10, 
        flex: 1,
        borderRadius: 10,
    },
    touchableContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        borderRadius: 10,
    },
    dateContainer: {
        flex: 2,
        backgroundColor: COLORS.BodyAccentColor,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        justifyContent: "flex-end",
        flexDirection: "row",
        padding: 10,
    },
    eventContainer: {
        flex: 5,
        backgroundColor: COLORS.BodyBackgroundColor,
        paddingTop: 10,
        paddingLeft: 7,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    dateText: {
        fontFamily: FONTS.FontFamily,
        color: COLORS.LightFontColor,
        fontSize: 25,
        textAlign: "right"
    },
    eventTitleText: {
        fontFamily: FONTS.FontFamily,
        color: COLORS.DarkFontColor,
        fontSize: 20,
    },  
    descriptionText: {
        fontFamily: FONTS.FontFamily,
        color: COLORS.DarkFontColor,
    }
});

export default UpcomingItem;