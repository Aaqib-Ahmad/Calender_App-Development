import React, { useState, useRef } from "react";
import { StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";

import { fonts } from "./fonts/fonts.js";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Page_Calender from "./pages/Calendar/Calendar.js";
import Page_Event from "./pages/Event/Event.js";
import Page_Schedule from "./pages/Schedule/Schedule.js";
const Tab = createBottomTabNavigator();
const Page_CalenderStackNavigator = createStackNavigator();

const ScreenForPage_Calender = () => {
  return (
    <Page_CalenderStackNavigator.Navigator>
      <Page_CalenderStackNavigator.Screen
        name="Page_Calender"
        component={Page_Calender}
        options={{
          headerShown: false,
        }}
      />
    </Page_CalenderStackNavigator.Navigator>
  );
};
const Page_EventStackNavigator = createStackNavigator();
const ScreenForPage_Event = () => {
  return (
    <Page_EventStackNavigator.Navigator>
      <Page_EventStackNavigator.Screen
        name="Page_Event"
        component={Page_Event}
        options={{
          headerShown: false,
        }}
      />
    </Page_EventStackNavigator.Navigator>
  );
};
const Page_ScheduleStackNavigator = createStackNavigator();
const ScreenForPage_Schedule = () => {
  return (
    <Page_ScheduleStackNavigator.Navigator>
      <Page_ScheduleStackNavigator.Screen
        name="Page_Schedule"
        component={Page_Schedule}
        options={{
          headerShown: false,
        }}
      />
    </Page_ScheduleStackNavigator.Navigator>
  );
};
const App = () => {
  let [fontsLoaded] = useFonts(fonts);
  const Stack = createStackNavigator();
  const [isPage0Open, setIsPage0Open] = useState(true);
  const zIndexPage0 = useRef(1);
  const [isPage1Open, setIsPage1Open] = useState(false);
  const zIndexPage1 = useRef(2);
  const [isPage2Open, setIsPage2Open] = useState(false);
  const zIndexPage2 = useRef(2);
  const [isPage3Open, setIsPage3Open] = useState(false);
  const zIndexPage3 = useRef(2);
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const mainScreen = () => {
    return (
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: noneModeStyles.style0,
          iconStyle: { width: "100%", height: "100%" },
        }}
      >
        <Tab.Screen
          name="Calender"
          component={ScreenForPage_Calender}
          options={{ tabBarVisible: false }}
        />
        <Tab.Screen
          name="Schedule"
          component={ScreenForPage_Schedule}
          options={{ tabBarVisible: false }}
        />
        
        <Tab.Screen
          name="Event"
          component={ScreenForPage_Event}
          options={{ tabBarVisible: false }}
        />
        
        
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="main"
          options={{ headerShown: false }}
          component={mainScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const noneModeStyles = StyleSheet.create({
  style0: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0,
  },
});
export default App;
