import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import { VisibilityFilters } from "./actions";
import FilterButtonContainer from "./FilterButtonContainer";

class DisplayFilterBar extends Component {
    render() {
        return(
            <View style={style.mainContainer}>
                <FilterButtonContainer
                    filter={VisibilityFilters.SHOW_UPCOMING}
                    text={"Upcoming"}
                />
                <FilterButtonContainer
                    filter={VisibilityFilters.SHOW_PAST}
                    text={"Past"}
                />
                <FilterButtonContainer
                    filter={VisibilityFilters.SHOW_FUTURE}
                    text={"Future"}
                />
            </View>
        );
    }
}

DisplayFilterBar.propTypes = {
};

const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    }
});

export default DisplayFilterBar;

