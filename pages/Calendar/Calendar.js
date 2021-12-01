import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  Animated,
  Button,
  Dimensions,
  Vibration,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { Google } from "expo";
import { CLIENT_ID } from "../../apiGoogleconfig";

const Page_Calendar = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [items, setItems] = useState({
    signedIn: false,
    name: "",
    email: "",
    accessToken: "",
  });

  const signIn = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: CLIENT_ID,
        scopes: [
          "profile",
          "email",
          "https://www.googleapis.com/auth/calendar.events",
        ],
      });

      if (result.type === "success") {
        setItems({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl,
          email: result.user.email,
          accessToken: result.accessToken,
        });
      } else {
        console.log("cancelled");
      }
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    signIn();
  }, []);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ height: Dimensions.get("window").height }}
    >
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={{ height: Dimensions.get("window").height }}
      >
        <View style={noneModeStyles._page1}>
          <View style={noneModeStyles._Get_Started}>
            <Calendar
              markingType={"period"}
              onChange={(date) => setDate(date)}
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
                arrowColor: "#00adf5",
                monthTextColor: "#202630",
                dayTextColor: "#202630",
                selectedDayTextColor: "#00adf5",
              }}
            />
            <View style={noneModeStyles._Rectangle_17}></View>
            <View style={noneModeStyles._Group_44}>
              <View style={noneModeStyles._Group_43}>
                <View style={noneModeStyles._vuesax_bulk_add}>
                  <View style={noneModeStyles._vuesax_bulk_add_2}>
                    <View style={noneModeStyles._add}>
                      <View style={noneModeStyles.style8}>
                        <View style={noneModeStyles.style9}>
                          <Button
                            title="+"
                            color="#1665FA"
                            onPress={() => navigation.navigate("Event")}
                          />
                        </View>
                      </View>
                      <View style={noneModeStyles.style10}></View>
                      <View style={noneModeStyles.style12}></View>
                    </View>
                  </View>
                </View>
                <View style={noneModeStyles._vuesax_bold_notification_status}>
                  <View
                    style={noneModeStyles._vuesax_bold_notification_status_2}
                  >
                    <View style={noneModeStyles._notification_status}>
                      <View style={noneModeStyles.style16}></View>
                      <View style={noneModeStyles.style18}></View>
                      <View style={noneModeStyles.style20}></View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={noneModeStyles._Frame_46}>
              <View style={noneModeStyles._vuesax_twotone_stickynote}>
                <View style={noneModeStyles._vuesax_twotone_stickynote_2}>
                  <View style={noneModeStyles._stickynote}>
                    <View style={noneModeStyles.style25}></View>
                    <View style={noneModeStyles.style27}></View>
                    <View style={noneModeStyles.style29}></View>
                  </View>
                  <View style={noneModeStyles.style31}></View>
                </View>
                <View style={noneModeStyles.style33}></View>
                <View style={noneModeStyles.style35}></View>
                <View style={noneModeStyles.style37}></View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default Page_Calendar;

const noneModeStyles = StyleSheet.create({
  _page1: {
    height: 844,
    width: Dimensions.get("window").width,
    minHeight: Dimensions.get("window").height,
    backgroundColor: "rgba(180, 180, 180, 3)",
  },
  _Get_Started: {
    width: 375,
    height: 812,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden",
    position: "absolute",
    left: 16,
    top: 16,
    borderRadius: 40,
  },
  _Rectangle_17: {
    width: 375,
    height: 812,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    left: 0,
    top: 0,
  },
  _Group_44: {
    width: 64,
    height: 24,
    position: "absolute",
    left: 293,
    top: 65,
  },
  _Group_43: {
    width: 64,
    height: 24,
    position: "absolute",
    left: 0,
    top: 0,
  },
  _vuesax_bulk_add: {
    width: 24,
    height: 24,
    backgroundColor: "rgba(255, 255, 255, 0)",
    position: "absolute",
    left: 40,
    top: 0,
  },
  _vuesax_bulk_add_2: {
    width: 24,
    height: 24,
    position: "absolute",
    left: 0,
    top: 0,
  },
  _add: {
    width: 24,
    height: 24,
    position: "absolute",
    left: 0,
    top: 0,
  },
  style8: {
    position: "absolute",
    transform: [{ translateX: 2 }, { translateY: 2 }],
  },
  style9: {
    position: "absolute",
    transform: [{ translateX: 5.25 }, { translateY: 290 }],
  },
  style10: {
    position: "absolute",
    transform: [{ translateX: 5.25 }, { translateY: 50 }],
  },
  style11: {},
  style12: {
    position: "absolute",
  },
  _vuesax_bold_notification_status: {
    width: 24,
    height: 24,
    backgroundColor: "rgba(255, 255, 255, 0)",
    position: "absolute",
    left: 0,
    top: 0,
  },
  _vuesax_bold_notification_status_2: {
    width: 24,
    height: 24,
    position: "absolute",
    left: 0,
    top: 0,
  },
  _notification_status: {
    width: 24,
    height: 24,
    position: "absolute",
    left: 0,
    top: 0,
  },
  style16: {
    position: "absolute",
    transform: [{ translateX: 16 }, { translateY: 2 }],
  },
  style17: {},
  style18: {
    position: "absolute",
    transform: [{ translateX: 2 }, { translateY: 3 }],
  },
  style19: {},
  style20: {
    position: "absolute",
  },
  _Frame_46: {
    width: "auto",
    height: "auto",
    backgroundColor: "rgba(0, 0, 0, 0)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 271,
    top: 65,
  },
  _vuesax_twotone_stickynote: {
    width: 24,
    height: 24,
    backgroundColor: "rgba(255, 255, 255, 0)",
    flexShrink: 0,
    marginBottom: 2,
  },
  _vuesax_twotone_stickynote_2: {
    width: 24,
    height: 24,
    position: "absolute",
    left: 0,
    top: 0,
  },
  _stickynote: {
    width: 24,
    height: 24,
    position: "absolute",
    left: 0,
    top: 0,
  },
  style25: {
    position: "absolute",
    transform: [{ translateX: 8 }, { translateY: 2 }],
  },
  style26: {},
  style27: {
    position: "absolute",
    transform: [{ translateX: 16 }, { translateY: 2 }],
  },
  style28: {},
  style29: {
    position: "absolute",
    transform: [{ translateX: 7 }, { translateY: 11 }],
  },
  style30: {},
  style31: {
    position: "absolute",
    transform: [{ translateX: 7 }, { translateY: 15 }],
  },
  style32: {},
  style33: {
    position: "absolute",
    transform: [{ translateX: 3 }, { translateY: 3.5 }],
  },
  style34: {},
  style35: {
    position: "absolute",
    transform: [{ translateX: 15 }, { translateY: 16 }],
  },
  style36: {},
  style37: {
    position: "absolute",
  },
  _Task: {
    width: "auto",
    height: "auto",
    flexShrink: 0,
    color: "rgb(115, 134, 170)",
    fontSize: 10,
    fontWeight: "400",
    fontFamily: "Inter",
    letterSpacing: 0,
    textAlign: "left",
  },
});
