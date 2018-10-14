import { Platform } from "react-native";

export const COLORS = {
    BackgroundColor: "#fcfcff",
    BodyAccentColor: "slateblue",
    BodyAccentMediumColor: "#cbafff",
    BodyBackgroundColor: "lavender",
    activeButtonColor: "orange",
    LightFontColor: "#f7f7f7",
    DarkFontColor: "#3d3d3d",
};

export const FONTS = { 
    FontFamily: Platform.OS === "ios" ? "Avenir Next" : "Open Sans",

};