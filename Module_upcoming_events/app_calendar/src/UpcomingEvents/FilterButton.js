import React, { Component } from "react";
import { View, StyleSheet, TouchableHighlight, Text } from "react-native";
import { COLORS, FONTS } from "./style";
import PropTypes from "prop-types";

class FilterButton extends Component {
    render() {
        return(
            <View style={style.mainContainer}>
                <TouchableHighlight 
                    style={[style.touchableContainer, 
                        {backgroundColor: this.props.active 
                            ? COLORS.activeButtonColor 
                            : COLORS.BodyBackgroundColor}]}
                    onPress={this.props.onPress}
                    activeOpacity={50}

                    underlayColor={COLORS.BackgroundColor}>
                    <Text style={style.buttonText}>{this.props.text.toUpperCase()}</Text>

                </TouchableHighlight>
            </View>
        );
    }
}

FilterButton.propTypes = {
    filter: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
};

const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
    }, 
    touchableContainer: {
        flex: 1,
        padding: 10,
        alignItems:"center",
        justifyContent: "center",
        backgroundColor: COLORS.BackgroundColor
    }, 
    buttonText: {
        fontFamily: FONTS.FontFamily,
        color: COLORS.DarkFontColor,
        fontSize: 15,
        textAlign: "center"
    }
});

export default FilterButton;