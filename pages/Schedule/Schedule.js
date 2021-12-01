import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  Animated,
  Dimensions,
  Vibration,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Button,
} from "react-native";
import { image_Ellipse_1_link } from "./assets/imageLinks.js";
import { image_Ellipse_2_link } from "./assets/imageLinks.js";
import { image_Ellipse_3_link } from "./assets/imageLinks.js";
import { CLIENT_ID } from "../../apiGoogleconfig";
import { Path, Svg } from "react-native-svg";
import axios from "axios";

const Page_Schedule = ({ navigation }) => {
  const [login, setLogin] = useState([]);
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
        setLogin({
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

  const LoadData = async (email, token) => {
    const resp = await axios.get(
      `https://www.googleapis.com/calendar/v3/calendars/${email}/events?access_token=${token}`
    );
    const items = resp.data.items;
    setItems(items);
  };

  useEffect(() => {
    signIn();
    LoadData(login.email, login.accessToken);
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
        <View style={noneModeStyles._page2}>
          <View style={noneModeStyles._Get_Started}>
            <View style={noneModeStyles._Rectangle_17}></View>
            <View style={noneModeStyles._Group_639}>
              <View style={noneModeStyles._Rectangle_13}></View>
              <Text style={noneModeStyles._Schedule}>Schedule</Text>
              <View style={noneModeStyles._Frame_30}>
                <View style={noneModeStyles._Group_33}>
                  <Text style={noneModeStyles._08_00}>08:00</Text>
                  <View style={noneModeStyles._Line_4}></View>
                </View>
                <View style={noneModeStyles._Group_34}>
                  <Text style={noneModeStyles._09_00}>09:00</Text>
                  <View style={noneModeStyles._Line_4_2}></View>
                </View>
                <View style={noneModeStyles._Group_35}>
                  <Text style={noneModeStyles._10_00}>10:00</Text>
                  <View style={noneModeStyles._Line_4_3}></View>
                </View>
                <View style={noneModeStyles._Group_36}>
                  <Text style={noneModeStyles._11_00}>11:00</Text>
                  <View style={noneModeStyles._Line_4_4}></View>
                </View>
                <View style={noneModeStyles._Group_37}>
                  <Text style={noneModeStyles._12_00}>12:00</Text>
                  <View style={noneModeStyles._Line_4_5}></View>
                </View>
                <View style={noneModeStyles._Group_38}>
                  <Text style={noneModeStyles._13_00}>13:00</Text>
                  <View style={noneModeStyles._Line_4_6}></View>
                </View>
                <View style={noneModeStyles._Group_39}>
                  <Text style={noneModeStyles._14_00}>14:00</Text>
                  <View style={noneModeStyles._Line_4_7}></View>
                </View>
              </View>
            </View>
            <View style={noneModeStyles._Group_5}>
              <View style={noneModeStyles._Rectangle_3}></View>
              <View style={noneModeStyles._Rectangle_22}></View>
              <View style={noneModeStyles._Frame_31}>
                <Text style={noneModeStyles._Sprint_Plan_Week__1}></Text>
                <Text style={noneModeStyles._1_5_hours}>1.5 hours</Text>
              </View>
              <View style={noneModeStyles._Group_4}>
                <View style={noneModeStyles._Ellipse_1_container}>
                  <View style={noneModeStyles._Ellipse_1}>
                    <Image
                      style={{ height: "100%", width: "100%" }}
                      source={{ uri: image_Ellipse_1_link }}
                    />
                  </View>
                </View>
                <View style={noneModeStyles._Ellipse_2_container}>
                  <View style={noneModeStyles._Ellipse_2}>
                    <Image
                      style={{ height: "100%", width: "100%" }}
                      source={{ uri: image_Ellipse_2_link }}
                    />
                  </View>
                </View>
                <View style={noneModeStyles._Ellipse_3_container}>
                  <View style={noneModeStyles._Ellipse_3}>
                    <Image
                      style={{ height: "100%", width: "100%" }}
                      source={{ uri: image_Ellipse_3_link }}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={noneModeStyles._Group_42}>
              <View style={noneModeStyles._Rectangle_3_2}></View>
              <View style={noneModeStyles._Rectangle_22_2}></View>
              <View style={noneModeStyles._Frame_31_2}>
                <Text style={noneModeStyles._Client_Meeting}>
                  Client Meeting
                </Text>
                <Text style={noneModeStyles._1_hours}>1 hours</Text>
              </View>
            </View>
            <View style={noneModeStyles._Group_640}>
              <View style={noneModeStyles._Rectangle_3_3}></View>
              <View style={noneModeStyles._Rectangle_22_3}></View>
              <View style={noneModeStyles._Frame_31_3}>
                <Text style={noneModeStyles._Interview_Candidate}>
                  {items.id}
                </Text>
                <Text style={noneModeStyles._1_hours_2}>1 hours</Text>
              </View>
            </View>
            <View style={noneModeStyles._Rectangle_16}></View>
            <View style={noneModeStyles._Group_44}>
              <View>
                <View style={noneModeStyles._Group_43}>
                  <View style={noneModeStyles._vuesax_bulk_add}>
                    <View style={noneModeStyles._vuesax_bulk_add_2}>
                      <View style={noneModeStyles._add}>
                        <View style={noneModeStyles.style60}>
                          <View style={noneModeStyles.style61}>
                            <Button
                              title="Back"
                              color="#1665FA"
                              onPress={() => navigation.navigate("Calender")}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={noneModeStyles._vuesax_bold_notification_status}>
                    <View
                      style={noneModeStyles._vuesax_bold_notification_status_2}
                    >
                      <View style={noneModeStyles._notification_status}>
                        <View style={noneModeStyles.style68}>
                          <View style={noneModeStyles.style69}>
                            <Svg
                              style={{ height: 6, width: 6 }}
                              viewBox="0 0 6 6"
                            >
                              <Path
                                fill={"#26CDFC"}
                                d="M3 6C4.65685 6 6 4.65685 6 3C6 1.34315 4.65685 0 3 0C1.34315 0 0 1.34315 0 3C0 4.65685 1.34315 6 3 6Z"
                              />
                            </Svg>
                          </View>
                        </View>
                        <View style={noneModeStyles.style70}>
                          <View style={noneModeStyles.style71}>
                            <Svg
                              style={{ height: 19, width: 19 }}
                              viewBox="0 0 19 19"
                            >
                              <Path
                                fill={"#F0F0F0"}
                                d="M17.8 6.42C17.78 6.42 17.76 6.43 17.74 6.43C17.64 6.45 17.54 6.46 17.43 6.48C17.01 6.52 16.56 6.5 16.1 6.41C15.98 6.38 15.88 6.36 15.77 6.32C15.44 6.24 15.13 6.11 14.84 5.94C14.72 5.88 14.6 5.8 14.49 5.73C14.01 5.4 13.6 4.99 13.27 4.51C13.2 4.4 13.12 4.28 13.06 4.16C12.89 3.87 12.76 3.56 12.68 3.23C12.64 3.12 12.62 3.02 12.59 2.9C12.5 2.44 12.48 1.99 12.52 1.57C12.54 1.46 12.55 1.36 12.57 1.26C12.57 1.24 12.58 1.22 12.58 1.2C12.7 0.58 12.24 0 11.6 0H5.52C5.38 0 5.24 0.00999998 5.11 0.02C4.99 0.03 4.88 0.0399999 4.76 0.0599999C4.64 0.0699999 4.52 0.0899999 4.41 0.11C2 0.46 0.46 1.99 0.11 4.41C0.0899999 4.52 0.0699999 4.64 0.0599999 4.76C0.0399999 4.88 0.03 4.99 0.02 5.11C0.00999998 5.24 0 5.38 0 5.52V13.48C0 13.62 0.00999998 13.76 0.02 13.89C0.03 14.01 0.0399999 14.12 0.0599999 14.24C0.0699999 14.36 0.0899999 14.48 0.11 14.59C0.46 17.01 2 18.54 4.41 18.89C4.52 18.91 4.64 18.93 4.76 18.94C4.88 18.96 4.99 18.97 5.11 18.98C5.24 18.99 5.38 19 5.52 19H13.48C13.62 19 13.76 18.99 13.89 18.98C14.01 18.97 14.12 18.96 14.24 18.94C14.36 18.93 14.48 18.91 14.59 18.89C17 18.54 18.54 17.01 18.89 14.59C18.91 14.48 18.93 14.36 18.94 14.24C18.96 14.12 18.97 14.01 18.98 13.89C18.99 13.76 19 13.62 19 13.48V7.4C19 6.76 18.42 6.3 17.8 6.42ZM4.75 9.5H9.75C10.16 9.5 10.5 9.84 10.5 10.25C10.5 10.66 10.16 11 9.75 11H4.75C4.34 11 4 10.66 4 10.25C4 9.84 4.34 9.5 4.75 9.5ZM13.75 15H4.75C4.34 15 4 14.66 4 14.25C4 13.84 4.34 13.5 4.75 13.5H13.75C14.16 13.5 14.5 13.84 14.5 14.25C14.5 14.66 14.16 15 13.75 15Z"
                              />
                            </Svg>
                          </View>
                        </View>
                        <View style={noneModeStyles.style72}></View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={noneModeStyles.style73}>
              <View style={noneModeStyles.style74}>
                <Svg style={{ height: 6, width: 349 }} viewBox="0 0 349 6">
                  <Path
                    fill={"#1665FA"}
                    d="M-2.14646e-06 2.88769L2.88769 5.77537L5.77537 2.88769L2.88769 -2.14646e-06L-2.14646e-06 2.88769ZM2.88769 3.38785H349V2.38752H2.88769V3.38785Z"
                  />
                </Svg>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default Page_Schedule;

const noneModeStyles = StyleSheet.create({
  _page2: {
    height: 844,
    width: Dimensions.get("window").width,
    minHeight: Dimensions.get("window").height,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
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
  _Group_639: {
    width: 375,
    height: 584,
    position: "absolute",
    left: 0,
    top: 228,
  },
  _Rectangle_13: {
    width: 375,
    height: 584,
    backgroundColor: "rgb(255, 255, 255)",
    position: "absolute",
    left: 0,
    top: 0,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderStyle: "solid",
    borderColor: "rgb(189, 189, 189)",
  },
  _Schedule: {
    width: "auto",
    height: "auto",
    position: "absolute",
    left: 25,
    top: 24,
    color: "rgb(32, 38, 48)",
    fontSize: 20,
    fontWeight: "400",
    fontFamily: "Inter",
    letterSpacing: 0,
    textAlign: "left",
  },
  _Frame_30: {
    width: "auto",
    height: "auto",
    backgroundColor: "rgba(0, 0, 0, 0)",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: 24,
    top: 72,
  },
  _Group_33: {
    width: 351,
    height: 16,
    flexShrink: 0,
    marginBottom: 56,
  },
  _08_00: {
    width: "auto",
    height: "auto",
    position: "absolute",
    left: 0,
    top: 0,
    color: "rgb(156, 169, 195)",
    fontSize: 13,
    fontWeight: "500",
    fontFamily: "Inter",
    letterSpacing: 0,
    textAlign: "left",
  },
  _Line_4: {
    width: 299,
    height: 0,
    position: "absolute",
    left: 52,
    top: 10,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderStyle: "solid",
    borderColor: "rgb(237, 240, 247)",
  },
  _Group_34: {
    width: 351,
    height: 16,
    flexShrink: 0,
    marginBottom: 56,
  },
  _09_00: {
    width: "auto",
    height: "auto",
    position: "absolute",
    left: 0,
    top: 0,
    color: "rgb(156, 169, 195)",
    fontSize: 13,
    fontWeight: "500",
    fontFamily: "Inter",
    letterSpacing: 0,
    textAlign: "left",
  },
  _Line_4_2: {
    width: 299,
    height: 0,
    position: "absolute",
    left: 52,
    top: 10,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderStyle: "solid",
    borderColor: "rgb(237, 240, 247)",
  },
  _Group_35: {
    width: 351,
    height: 16,
    flexShrink: 0,
    marginBottom: 56,
  },
  _10_00: {
    width: "auto",
    height: "auto",
    position: "absolute",
    left: 0,
    top: 0,
    color: "rgb(156, 169, 195)",
    fontSize: 13,
    fontWeight: "500",
    fontFamily: "Inter",
    letterSpacing: 0,
    textAlign: "left",
  },
  _Line_4_3: {
    width: 299,
    height: 0,
    position: "absolute",
    left: 52,
    top: 10,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderStyle: "solid",
    borderColor: "rgb(237, 240, 247)",
  },
  _Group_36: {
    width: 351,
    height: 16,
    flexShrink: 0,
    marginBottom: 56,
  },
  _11_00: {
    width: "auto",
    height: "auto",
    position: "absolute",
    left: 0,
    top: 0,
    color: "rgb(156, 169, 195)",
    fontSize: 13,
    fontWeight: "500",
    fontFamily: "Inter",
    letterSpacing: 0,
    textAlign: "left",
  },
  _Line_4_4: {
    width: 299,
    height: 0,
    position: "absolute",
    left: 52,
    top: 10,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderStyle: "solid",
    borderColor: "rgb(237, 240, 247)",
  },
  _Group_37: {
    width: 351,
    height: 16,
    flexShrink: 0,
    marginBottom: 56,
  },
  _12_00: {
    width: "auto",
    height: "auto",
    position: "absolute",
    left: 0,
    top: 0,
    color: "rgb(156, 169, 195)",
    fontSize: 13,
    fontWeight: "500",
    fontFamily: "Inter",
    letterSpacing: 0,
    textAlign: "left",
  },
  _Line_4_5: {
    width: 299,
    height: 0,
    position: "absolute",
    left: 52,
    top: 10,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderStyle: "solid",
    borderColor: "rgb(237, 240, 247)",
  },
  _Group_38: {
    width: 351,
    height: 16,
    flexShrink: 0,
    marginBottom: 56,
  },
  _13_00: {
    width: "auto",
    height: "auto",
    position: "absolute",
    left: 0,
    top: 0,
    color: "rgb(156, 169, 195)",
    fontSize: 13,
    fontWeight: "500",
    fontFamily: "Inter",
    letterSpacing: 0,
    textAlign: "left",
  },
  _Line_4_6: {
    width: 299,
    height: 0,
    position: "absolute",
    left: 52,
    top: 10,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderStyle: "solid",
    borderColor: "rgb(237, 240, 247)",
  },
  _Group_39: {
    width: 351,
    height: 16,
    flexShrink: 0,
  },
  _14_00: {
    width: "auto",
    height: "auto",
    position: "absolute",
    left: 0,
    top: 0,
    color: "rgb(156, 169, 195)",
    fontSize: 13,
    fontWeight: "500",
    fontFamily: "Inter",
    letterSpacing: 0,
    textAlign: "left",
  },
  _Line_4_7: {
    width: 299,
    height: 0,
    position: "absolute",
    left: 52,
    top: 10,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderStyle: "solid",
    borderColor: "rgb(237, 240, 247)",
  },
  _Group_5: {
    width: 280,
    height: 116,
    position: "absolute",
    left: 76,
    top: 313,
  },
  _Rectangle_3: {
    width: 280,
    height: 116,
    backgroundColor: "rgb(225, 248, 255)",
    position: "absolute",
    left: 0,
    top: 0,
    borderRadius: 8,
  },
  _Rectangle_22: {
    width: 32,
    height: 4,
    backgroundColor: "rgb(38, 205, 252)",
    position: "absolute",
    left: 16,
    top: 12,
    borderRadius: 4,
  },
  _Frame_31: {
    width: "auto",
    height: "auto",
    backgroundColor: "rgba(0, 0, 0, 0)",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: 16,
    top: 20,
  },
  _Sprint_Plan_Week__1: {
    width: "auto",
    height: "auto",
    flexShrink: 0,
    marginBottom: 4,
    color: "rgb(32, 38, 48)",
    fontSize: 13,
    fontWeight: "500",
    fontFamily: "Inter",
    letterSpacing: 0,
    textAlign: "left",
  },
  _1_5_hours: {
    width: "auto",
    height: "auto",
    flexShrink: 0,
    color: "rgba(32, 38, 48, 0.698)",
    fontSize: 12,
    fontWeight: "400",
    fontFamily: "Inter",
    letterSpacing: 0,
    textAlign: "left",
  },
  _Group_4: {
    width: 56,
    height: 24,
    position: "absolute",
    left: 16,
    top: 80,
  },
  _Ellipse_1_container: {
    width: 24,
    height: 24,
    position: "absolute",
    left: 0,
    top: 0,
  },
  _Ellipse_1: {
    width: "100%",
    height: "100%",
  },
  _Ellipse_2_container: {
    width: 24,
    height: 24,
    position: "absolute",
    left: 16,
    top: 0,
  },
  _Ellipse_2: {
    width: "100%",
    height: "100%",
  },
  _Ellipse_3_container: {
    width: 24,
    height: 24,
    position: "absolute",
    left: 32,
    top: 0,
  },
  _Ellipse_3: {
    width: "100%",
    height: "100%",
  },
  _Group_42: {
    width: 280,
    height: 67,
    position: "absolute",
    left: 76,
    top: 455,
  },
  _Rectangle_3_2: {
    width: 280,
    height: 67,
    backgroundColor: "rgb(255, 232, 224)",
    position: "absolute",
    left: 0,
    top: 0,
    borderRadius: 8,
  },
  _Rectangle_22_2: {
    width: 32,
    height: 4,
    backgroundColor: "rgb(255, 101, 51)",
    position: "absolute",
    left: 16,
    top: 12,
    borderRadius: 4,
  },
  _Frame_31_2: {
    width: "auto",
    height: "auto",
    backgroundColor: "rgba(0, 0, 0, 0)",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: 16,
    top: 20,
  },
  _Client_Meeting: {
    width: "auto",
    height: "auto",
    flexShrink: 0,
    marginBottom: 4,
    color: "rgb(32, 38, 48)",
    fontSize: 13,
    fontWeight: "500",
    fontFamily: "Inter",
    letterSpacing: 0,
    textAlign: "left",
  },
  _1_hours: {
    width: "auto",
    height: "auto",
    flexShrink: 0,
    color: "rgba(32, 38, 48, 0.698)",
    fontSize: 12,
    fontWeight: "400",
    fontFamily: "Inter",
    letterSpacing: 0,
    textAlign: "left",
  },
  _Group_640: {
    width: 280,
    height: 67,
    position: "absolute",
    left: 76,
    top: 623,
  },
  _Rectangle_3_3: {
    width: 280,
    height: 67,
    backgroundColor: "rgb(229, 248, 221)",
    position: "absolute",
    left: 0,
    top: 0,
    borderRadius: 8,
  },
  _Rectangle_22_3: {
    width: 32,
    height: 4,
    backgroundColor: "rgb(116, 217, 71)",
    position: "absolute",
    left: 16,
    top: 12,
    borderRadius: 4,
  },
  _Frame_31_3: {
    width: "auto",
    height: "auto",
    backgroundColor: "rgba(0, 0, 0, 0)",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: 16,
    top: 20,
  },
  _Interview_Candidate: {
    width: "auto",
    height: "auto",
    flexShrink: 0,
    marginBottom: 4,
    color: "rgb(32, 38, 48)",
    fontSize: 13,
    fontWeight: "500",
    fontFamily: "Inter",
    letterSpacing: 0,
    textAlign: "left",
  },
  _1_hours_2: {
    width: "auto",
    height: "auto",
    flexShrink: 0,
    color: "rgba(32, 38, 48, 0.698)",
    fontSize: 12,
    fontWeight: "400",
    fontFamily: "Inter",
    letterSpacing: 0,
    textAlign: "left",
  },
  _Rectangle_16: {
    width: 24,
    height: 4,
    backgroundColor: "rgb(255, 255, 255)",
    position: "absolute",
    left: 176,
    top: 216,
    borderRadius: 4,
  },
  _Group_44: {
    width: 64,
    height: 24,
    position: "absolute",
    left: 288,
    top: 48,
  },
  _Frame_48: {
    width: "auto",
    height: "auto",
    backgroundColor: "rgba(0, 0, 0, 0)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    left: 0,
    top: 0,
  },
  _Group_43: {
    width: 64,
    height: 24,
    
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
  style60: {
    position: "absolute",
    transform: [{ translateX: 2 }, { translateY: 2 }],
  },
  style61: {},
  style62: {
    position: "absolute",
    transform: [{ translateX: 5.25 }, { translateY: 5.25 }],
  },
  style63: {},
  style64: {
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
  style68: {
    position: "absolute",
    transform: [{ translateX: 16 }, { translateY: 2 }],
  },
  style69: {},
  style70: {
    position: "absolute",
    transform: [{ translateX: 2 }, { translateY: 3 }],
  },
  style71: {},
  style72: {
    position: "absolute",
  },
  style73: {
    width: 346,
    height: 0,
    position: "absolute",
    left: 29,
    top: 562.5,
  },
  style74: {},
});
