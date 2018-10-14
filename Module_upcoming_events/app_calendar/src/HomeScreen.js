import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import EventAgenda from "./UpcomingEvents/EventAgenda";
import PropTypes from "prop-types";
import DisplayFilterBar from "./UpcomingEvents/DisplayFilterBar";


//const unsubscribe = store.subscribe(() => console.log(JSON.stringify(store.getState(), null, 2)));

class HomeScreen extends React.Component {
    //This screen is the base screen for the mini-app; loads EventAgenda wrapped in container view
    //As this is a screen, it has the navigation prop passed from the StackNavigator
    //This prop does not have access to the store
    static navigationOptions = {
        title: "Home",
    }; 

    render() {
        StatusBar.setBarStyle("light-content", true); //make the status bar white so it's readable
        //EventAgenda is the smart container object for the events list (DisplayUpcoming)
        //Pass function to onPress that navigates to appropriate EventModal page
        return (
            <View style={styles.container}> 
                <EventAgenda onPress={(id) => {
                    this.props.navigation.navigate("EventModal", {id: id});
                }} 
                /> 
                <DisplayFilterBar />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fcf",
        alignItems: "center",
        justifyContent: "center",
    },
});

HomeScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default HomeScreen;
