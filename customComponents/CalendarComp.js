import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

export const CalendarComp = () => {
  const [date, setDate] = useState(new Date());
  const onChange = () => {
    setDate(date);
  };
  return (
    <View style={styles.container}>
      <Calendar
        markingType={"period"}
        onChange={onChange}
        value={date}
        hideExtraDays={true}
        enableSwipeMonths={true}
        hideArrows={false}
        style={{
          borderWidth: 1,
          "background-color": "#E5E5E5",
          height: 400,
          "border-radius": "25px",
          opacity: 0.5,
          "border-color": "#EDF0F7",
        }}
        theme={{
          calendarBackground: "#E5E5E5",
          selectedDayBackgroundColor: "#00adf5",
          arrowColor: "orange",
          monthTextColor: "#202630",
          dayTextColor: "#202630",
          selectedDayTextColor: "#202630",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
});
