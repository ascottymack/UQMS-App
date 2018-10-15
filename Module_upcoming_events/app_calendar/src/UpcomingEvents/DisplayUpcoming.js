import React, { Component } from "react";
import { View, FlatList, StyleSheet, RefreshControl, ScrollView, Text } from "react-native";
import PropTypes from "prop-types";
import UpcomingItem from "./UpcomingItem";
import { COLORS, FONTS } from "./style";

class DisplayUpcoming extends Component {
    /*
        This component is a display component for a list of events
        Props:
            upcomingEvents (passed from EventAgenda container): 
                Array[{id, eventName, eventMoment, eventDescription, eventLocation}]
            
            onRefresh: (callback=none) => returns none
                Handles the refreshing of the store
    */

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.handleRefresh();
    }

    handleRefresh = () => {
        // Function to set refreshing state & pass to onRefresh
        this.props.onRefresh();
    }
    

    render() {
        if(this.props.error==="") {
            // No error -> render view
            return(
                <View style={style.mainContainer}>
                    <FlatList
                        data={this.props.upcomingEvents}
                        refreshControl={
                            <RefreshControl
                                refreshing = {this.props.refreshing}
                                onRefresh = {this.handleRefresh} />
                        }
                        renderItem={({item}) => {
                            return(
                                <UpcomingItem 
                                    {...item}
                                    onPress={() => this.props.onPress(item.id)}
                                />
                            );
                        }} 
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            );    
        } else {
            //Error fetching the events -> render error message
            return(
                <View style={style.mainContainer}>
                    <ScrollView
                        refreshControl = {
                            <RefreshControl 
                                refreshing = {this.props.refreshing}
                                onRefresh={this.handleRefresh} />
                        } >
                        <Text style={style.errorText}>{this.props.error}</Text>
                    </ScrollView>
                </View>
            );
        }
    }
}

DisplayUpcoming.propTypes = {
    // upcomingEvents is a DisplayUpcoming prop of type:
    //     Array[event...]
    upcomingEvents: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            eventName: PropTypes.string.isRequired,
            eventMoment: PropTypes.string.isRequired,
            eventDescription: PropTypes.string.isRequired
        })
    ),
    onPress: PropTypes.func.isRequired,
    refreshing: PropTypes.bool.isRequired,
};

const style = StyleSheet.create({
    mainContainer: {
        flex: 8,
        width: "100%",
        backgroundColor: COLORS.BackgroundColor,
    }, 
    errorText: {
        fontFamily: FONTS.FontFamily,
        fontSize: 20,
        color: COLORS.DarkFontColor,
        margin: 10,
    }
});

export default DisplayUpcoming;


