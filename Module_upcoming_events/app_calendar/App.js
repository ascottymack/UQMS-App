import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import calendarApp from "./src/UpcomingEvents/reducers";
import { createStackNavigator } from "react-navigation";
import HomeScreen from "./src/HomeScreen";
import EventModalContainer from "./src/EventModalContainer";
import { FONTS, COLORS } from "./src/UpcomingEvents/style";
import { Dimensions } from "react-native";
import thunkMiddleware from "redux-thunk";
import { fetchEventsRequest } from "./src/UpcomingEvents/thunks";

const { width } = Dimensions.get("window");

export const store = createStore(
    calendarApp,
    applyMiddleware(thunkMiddleware),
);

//const unsubscribe = store.subscribe(() => console.log(JSON.stringify(store.getState(), null, 2)));

export default class App extends React.Component {
    componentDidMount() {
        //load the store from the server (server settings are in ./src/SiteSettings.js)
        //This must be done after mounting the app otherwise app will crash
        store.dispatch(fetchEventsRequest());
    }

    render() {
        //Wrap StackNavigator in Provider so that app has access to store
        return (
            <Provider store = {store}>
                <RootStack />
            </Provider>
        );
    }
}

//StackNavigator that gives access to EventModal
const RootStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        EventModal: {
            screen: EventModalContainer,
        }
    },
    {
        mode: "modal",
        navigationOptions: {
            headerStyle: {
                backgroundColor: "rebeccapurple",
                height: width*0.2,
            },
            headerTintColor: COLORS.LightFontColor,
            headerTitleStyle: {
                fontFamily: FONTS.FontFamily,
                fontSize: 30
            }    
        }
    }
);

