import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  TextInput,
  StyleSheet,
  Animated,
  Dimensions,
  Vibration,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { RadioButton } from "react-native-paper";
import { Path, Svg } from "react-native-svg";
const Page_Event = ({ navigation }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("work");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setStartDate(date);
    hideDatePicker();
  };

  useEffect(() => {}, []);
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
        <View style={noneModeStyles._page3}>
          <View style={noneModeStyles._viewport}>
            <View style={noneModeStyles._Create_New_Event}>
              <View style={noneModeStyles._Bg}></View>
              <View style={noneModeStyles._Rectangle_5}></View>
              <View style={noneModeStyles._Rectangle_14}></View>
              <View style={noneModeStyles._Frame_2}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Schedule")}
                >
                  <Text style={noneModeStyles._Save_event}>Save event</Text>
                </TouchableOpacity>
              </View>
              <View style={noneModeStyles._Group_27}>
                <Text style={noneModeStyles._Create_New_Event_2}>
                  Create New Event
                </Text>
                <View style={noneModeStyles._vuesax_bulk_close_circle}>
                  <View style={noneModeStyles._vuesax_bulk_close_circle_2}>
                    <View style={noneModeStyles._close_circle}>
                      <View style={noneModeStyles._layer_7b8cbb}>
                        <View style={noneModeStyles._layer_c4c70d}>
                          <Button
                            title="x"
                            color="grey"
                            onPress={() => navigation.navigate("Calender")}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={noneModeStyles._Frame_27}>
                  <View style={noneModeStyles._Input_Text}>
                    <View style={noneModeStyles._Form}>
                      <View style={noneModeStyles._Rectangle_6}>
                        <TouchableOpacity onPress={showDatePicker}>
                          <TextInput
                            style={noneModeStyles._Rectangle_6}
                            onChangeText={(text) => setStartDate(text)}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <Text style={noneModeStyles._Label}>Title</Text>
                  </View>
                  <View>
                    <Text style={noneModeStyles._Category_2}>Category</Text>
                    <RadioButton.Group
                      onValueChange={(newValue) => setCategory(newValue)}
                      value={category}
                    >
                      <View>
                        <Text style={noneModeStyles._Category_2}>Work</Text>
                        <RadioButton value="Work" />
                      </View>
                      <View>
                        <Text style={noneModeStyles._Category_2}>Hangout</Text>
                        <RadioButton value="Hangout" />
                      </View>
                      <View>
                        <Text style={noneModeStyles._Category_2}>Meeting</Text>
                        <RadioButton value="Meeting" />
                      </View>
                    </RadioButton.Group>
                  </View>
                  <View style={noneModeStyles._Date___ttime}>
                    <View style={noneModeStyles._Group_32}>
                      <Text style={noneModeStyles._Date___time}>
                        Date & time
                      </Text>

                      <View style={noneModeStyles._Frame_29}></View>
                    </View>
                    <View style={noneModeStyles._Group_14}>
                      <View>
                        <TouchableOpacity onPress={showDatePicker}>
                          <TextInput
                            style={noneModeStyles._Rectangle_7}
                            onChangeText={(text) => setStartDate(text)}
                          />
                        </TouchableOpacity>
                      </View>

                      <View style={noneModeStyles._Group_28}>
                        <View style={noneModeStyles._vuesax_linear_calendar}>
                          <View
                            style={noneModeStyles._vuesax_linear_calendar_2}
                          >
                            <View style={noneModeStyles._calendar}>
                              <View style={noneModeStyles._layer_ba5dc0}></View>
                              <View style={noneModeStyles._layer_030df2}></View>
                              <View style={noneModeStyles._layer_2eaa1d}>
                                <View style={noneModeStyles._layer_399c22}>
                                  <Svg
                                    style={{ height: 2, width: 16 }}
                                    viewBox="0 0 16 2"
                                  >
                                    <Path
                                      fill={"none"}
                                      stroke={"#6C7C9B"}
                                      strokeWidth={1.5}
                                      d="M0.765958 0.765958H15.2341"
                                    />
                                  </Svg>
                                </View>
                              </View>
                              <View style={noneModeStyles._layer_c63052}>
                                <View style={noneModeStyles._layer_45d4f5}>
                                  <Svg
                                    style={{ height: 17, width: 17 }}
                                    viewBox="0 0 17 17"
                                  >
                                    <Path
                                      fill={"none"}
                                      stroke={"#6C7C9B"}
                                      strokeWidth={1.5}
                                      d="M15.8276 4.94089V12.0591C15.8276 14.5714 14.5714 16.2463 11.6404 16.2463H4.94089C2.00985 16.2463 0.753694 14.5714 0.753694 12.0591V4.94089C0.753694 2.42857 2.00985 0.753694 4.94089 0.753694H11.6404C14.5714 0.753694 15.8276 2.42857 15.8276 4.94089Z"
                                    />
                                  </Svg>
                                </View>
                              </View>
                              <View style={noneModeStyles._layer_f5425f}></View>
                              <View style={noneModeStyles._layer_e0891a}>
                                <View style={noneModeStyles._layer_52e3ca}>
                                  <Svg
                                    style={{ height: 2, width: 3 }}
                                    viewBox="0 0 3 2"
                                  >
                                    <Path
                                      fill={"none"}
                                      stroke={"#6C7C9B"}
                                      strokeWidth={2}
                                      d="M1.00001 0.999999H1.00749"
                                    />
                                  </Svg>
                                </View>
                              </View>
                              <View style={noneModeStyles._layer_510e53}>
                                <View style={noneModeStyles._layer_ef5cd9}>
                                  <Svg
                                    style={{ height: 2, width: 3 }}
                                    viewBox="0 0 3 2"
                                  >
                                    <Path
                                      fill={"none"}
                                      stroke={"#6C7C9B"}
                                      strokeWidth={2}
                                      d="M1.00001 0.999999H1.00749"
                                    />
                                  </Svg>
                                </View>
                              </View>
                              <View style={noneModeStyles._layer_09f492}>
                                <View style={noneModeStyles._layer_0d7b5e}>
                                  <Svg
                                    style={{ height: 2, width: 3 }}
                                    viewBox="0 0 3 2"
                                  >
                                    <Path
                                      fill={"none"}
                                      stroke={"#6C7C9B"}
                                      strokeWidth={2}
                                      d="M1.00001 0.999999H1.0075"
                                    />
                                  </Svg>
                                </View>
                              </View>
                              <View style={noneModeStyles._layer_f0ebd9}>
                                <View style={noneModeStyles._layer_e6219c}>
                                  <Svg
                                    style={{ height: 2, width: 3 }}
                                    viewBox="0 0 3 2"
                                  >
                                    <Path
                                      fill={"none"}
                                      stroke={"#6C7C9B"}
                                      strokeWidth={2}
                                      d="M1.00001 0.999999H1.0075"
                                    />
                                  </Svg>
                                </View>
                              </View>
                              <View style={noneModeStyles._layer_679853}>
                                <View style={noneModeStyles._layer_845a19}>
                                  <Svg
                                    style={{ height: 2, width: 3 }}
                                    viewBox="0 0 3 2"
                                  >
                                    <Path
                                      fill={"none"}
                                      stroke={"#6C7C9B"}
                                      strokeWidth={2}
                                      d="M1.00001 0.999999H1.0075"
                                    />
                                  </Svg>
                                </View>
                              </View>
                              <View style={noneModeStyles._layer_2cb92a}>
                                <View style={noneModeStyles._layer_041ff3}>
                                  <Svg
                                    style={{ height: 2, width: 3 }}
                                    viewBox="0 0 3 2"
                                  >
                                    <Path
                                      fill={"none"}
                                      stroke={"#6C7C9B"}
                                      strokeWidth={2}
                                      d="M1.00001 0.999999H1.0075"
                                    />
                                  </Svg>
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                      <View>
                        <TouchableOpacity onPress={showDatePicker}>
                          <TextInput
                            style={noneModeStyles._Rectangle_8}
                            onChangeText={(text) => setStartTime(text)}
                          />
                        </TouchableOpacity>
                      </View>
                      <View style={noneModeStyles._Group_29}>
                        <View style={noneModeStyles._vuesax_linear_arrow_down}>
                          <View
                            style={noneModeStyles._vuesax_linear_arrow_down_2}
                          >
                            <View style={noneModeStyles._arrow_down}>
                              <View style={noneModeStyles._layer_470bf1}>
                                <View style={noneModeStyles._layer_7ee643}>
                                  <Svg
                                    style={{ height: 8, width: 15 }}
                                    viewBox="0 0 15 8"
                                  >
                                    <Path
                                      fill={"none"}
                                      stroke={"#6C7C9B"}
                                      strokeWidth={1.5}
                                      d="M14.2347 0.765305L8.69047 6.30952C8.03571 6.96428 6.96428 6.96428 6.30952 6.30952L0.765305 0.765305"
                                    />
                                  </Svg>
                                </View>
                              </View>
                              <View style={noneModeStyles._layer_74530b}></View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={noneModeStyles._Group_16}>
                      <View>
                        <TouchableOpacity onPress={showDatePicker}>
                          <TextInput
                            style={noneModeStyles._Rectangle_7_2}
                            onChangeText={(text) => setStartEnd(text)}
                          />
                        </TouchableOpacity>
                      </View>
                      <View style={noneModeStyles._Group_31}>
                        <View style={noneModeStyles._vuesax_linear_calendar_3}>
                          <View
                            style={noneModeStyles._vuesax_linear_calendar_4}
                          >
                            <View style={noneModeStyles._calendar_2}>
                              <View style={noneModeStyles._layer_6f1fe5}>
                                <View style={noneModeStyles._layer_ad0e63}>
                                  <Svg
                                    style={{ height: 4, width: 2 }}
                                    viewBox="0 0 2 4"
                                  >
                                    <Path
                                      fill={"none"}
                                      stroke={"#6C7C9B"}
                                      strokeWidth={1.5}
                                      d="M0.75 0.75V3.25"
                                    />
                                  </Svg>
                                </View>
                              </View>
                              <View style={noneModeStyles._layer_7725b9}>
                                <View style={noneModeStyles._layer_c565d4}>
                                  <Svg
                                    style={{ height: 4, width: 2 }}
                                    viewBox="0 0 2 4"
                                  >
                                    <Path
                                      fill={"none"}
                                      stroke={"#6C7C9B"}
                                      strokeWidth={1.5}
                                      d="M0.75 0.75V3.25"
                                    />
                                  </Svg>
                                </View>
                              </View>
                              <View style={noneModeStyles._layer_ea01f1}>
                                <View style={noneModeStyles._layer_aac474}>
                                  <Svg
                                    style={{ height: 2, width: 16 }}
                                    viewBox="0 0 16 2"
                                  >
                                    <Path
                                      fill={"none"}
                                      stroke={"#6C7C9B"}
                                      strokeWidth={1.5}
                                      d="M0.765958 0.765958H15.2341"
                                    />
                                  </Svg>
                                </View>
                              </View>
                              <View style={noneModeStyles._layer_edc0fa}>
                                <View style={noneModeStyles._layer_61422f}>
                                  <Svg
                                    style={{ height: 17, width: 17 }}
                                    viewBox="0 0 17 17"
                                  >
                                    <Path
                                      fill={"none"}
                                      stroke={"#6C7C9B"}
                                      strokeWidth={1.5}
                                      d="M15.8276 4.94089V12.0591C15.8276 14.5714 14.5714 16.2463 11.6404 16.2463H4.94089C2.00985 16.2463 0.753695 14.5714 0.753695 12.0591V4.94089C0.753695 2.42857 2.00985 0.753695 4.94089 0.753695H11.6404C14.5714 0.753695 15.8276 2.42857 15.8276 4.94089Z"
                                    />
                                  </Svg>
                                </View>
                              </View>
                              <View style={noneModeStyles._layer_bf27d3}></View>
                              <View style={noneModeStyles._layer_10b6aa}>
                                <View style={noneModeStyles._layer_e06c42}>
                                  <Svg
                                    style={{ height: 2, width: 3 }}
                                    viewBox="0 0 3 2"
                                  >
                                    <Path
                                      fill={"none"}
                                      stroke={"#6C7C9B"}
                                      strokeWidth={2}
                                      d="M1.00001 1H1.00749"
                                    />
                                  </Svg>
                                </View>
                              </View>
                              <View style={noneModeStyles._layer_06589b}>
                                <View style={noneModeStyles._layer_07df8c}>
                                  <Svg
                                    style={{ height: 2, width: 3 }}
                                    viewBox="0 0 3 2"
                                  >
                                    <Path
                                      fill={"none"}
                                      stroke={"#6C7C9B"}
                                      strokeWidth={2}
                                      d="M1.00001 1H1.00749"
                                    />
                                  </Svg>
                                </View>
                              </View>
                              <View style={noneModeStyles._layer_393545}>
                                <View style={noneModeStyles._layer_5d402b}>
                                  <Svg
                                    style={{ height: 2, width: 3 }}
                                    viewBox="0 0 3 2"
                                  >
                                    <Path
                                      fill={"none"}
                                      stroke={"#6C7C9B"}
                                      strokeWidth={2}
                                      d="M1.00001 1H1.0075"
                                    />
                                  </Svg>
                                </View>
                              </View>
                              <View style={noneModeStyles._layer_61e015}>
                                <View style={noneModeStyles._layer_eb5023}>
                                  <Svg
                                    style={{ height: 2, width: 3 }}
                                    viewBox="0 0 3 2"
                                  >
                                    <Path
                                      fill={"none"}
                                      stroke={"#6C7C9B"}
                                      strokeWidth={2}
                                      d="M1.00001 1H1.0075"
                                    />
                                  </Svg>
                                </View>
                              </View>
                              <View style={noneModeStyles._layer_e91c71}>
                                <View style={noneModeStyles._layer_58132e}>
                                  <Svg
                                    style={{ height: 2, width: 3 }}
                                    viewBox="0 0 3 2"
                                  >
                                    <Path
                                      fill={"none"}
                                      stroke={"#6C7C9B"}
                                      strokeWidth={2}
                                      d="M1.00001 1H1.0075"
                                    />
                                  </Svg>
                                </View>
                              </View>
                              <View style={noneModeStyles._layer_45a8d6}>
                                <View style={noneModeStyles._layer_438589}>
                                  <Svg
                                    style={{ height: 2, width: 3 }}
                                    viewBox="0 0 3 2"
                                  >
                                    <Path
                                      fill={"none"}
                                      stroke={"#6C7C9B"}
                                      strokeWidth={2}
                                      d="M1.00001 1H1.0075"
                                    />
                                  </Svg>
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>

                      <View>
                        <TouchableOpacity onPress={showDatePicker}>
                          <TextInput
                            style={noneModeStyles._Rectangle_8_2}
                            onChangeText={(text) => setEndTime(text)}
                          />
                        </TouchableOpacity>
                      </View>

                      <View style={noneModeStyles._Group_30}>
                        <View
                          style={noneModeStyles._vuesax_linear_arrow_down_3}
                        >
                          <View
                            style={noneModeStyles._vuesax_linear_arrow_down_4}
                          >
                            <View style={noneModeStyles._arrow_down_2}>
                              <View style={noneModeStyles._layer_52f956}>
                                <View style={noneModeStyles._layer_9416bc}>
                                  <Svg
                                    style={{ height: 8, width: 15 }}
                                    viewBox="0 0 15 8"
                                  >
                                    <Path
                                      fill={"none"}
                                      stroke={"#6C7C9B"}
                                      strokeWidth={1.5}
                                      d="M14.2347 0.765305L8.69047 6.30952C8.03571 6.96428 6.96428 6.96428 6.30952 6.30952L0.765305 0.765305"
                                    />
                                  </Svg>
                                </View>
                              </View>
                              <View style={noneModeStyles._layer_0cff26}></View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={noneModeStyles._Location}>
                    <View style={noneModeStyles._Frame_28}></View>
                  </View>
                </View>
                <View style={noneModeStyles._Group_25}>
                  <View style={noneModeStyles._Ellipse_7}></View>
                  <View style={noneModeStyles._vuesax_linear_calendar_edit}>
                    <View style={noneModeStyles._vuesax_linear_calendar_edit_2}>
                      <View style={noneModeStyles._calendar_edit}>
                        <View style={noneModeStyles._layer_07bd6e}>
                          <View style={noneModeStyles._layer_9a8631}></View>
                        </View>
                        <View style={noneModeStyles._layer_211848}></View>
                        <View style={noneModeStyles._layer_003686}></View>
                        <View style={noneModeStyles._Group}>
                          <View style={noneModeStyles._layer_349208}>
                            <View style={noneModeStyles._layer_dae996}></View>
                          </View>
                          <View style={noneModeStyles._layer_cc495c}>
                            <View style={noneModeStyles._layer_24a5ab}></View>
                          </View>
                        </View>
                        <View style={noneModeStyles._layer_4aea0c}>
                          <View style={noneModeStyles._layer_d64931}></View>
                        </View>
                        <View style={noneModeStyles._layer_3f2644}></View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default Page_Event;

const noneModeStyles = StyleSheet.create({
  _page3: {
    height: 844,
    width: Dimensions.get("window").width,
    minHeight: Dimensions.get("window").height,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
  },
  _viewport: {
    height: 844,
    width: Dimensions.get("window").width,
    minHeight: Dimensions.get("window").height,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
  },
  _Create_New_Event: {
    width: 375,
    height: 812,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden",
    position: "absolute",
    left: 16,
    top: 16,
    borderRadius: 40,
  },
  _Bg: {
    width: 375,
    height: 812,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    left: 0,
    top: 0,
  },
  _Rectangle_5: {
    width: 327,
    height: 724,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    position: "absolute",
    left: 24,
    top: 56,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderStyle: "solid",
    borderColor: "rgb(0, 0, 0)",
  },
  _Rectangle_14: {
    width: 375,
    height: 741,
    backgroundColor: "rgb(255, 255, 255)",
    position: "absolute",
    left: 0,
    top: 71,
    borderRadius: 30,
  },
  _Frame_2: {
    width: 327,
    height: "auto",
    backgroundColor: "rgb(22, 101, 250)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 24,
    top: 740,
    paddingTop: 15,
    paddingRight: 24,
    paddingBottom: 15,
    paddingLeft: 24,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderStyle: "solid",
    borderColor: "rgb(22, 101, 250)",
    borderRadius: 12,
  },
  _Save_event: {
    width: "auto",
    height: "auto",
    flexShrink: 0,
    color: "rgb(255, 255, 255)",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "Inter",
    letterSpacing: 0,
    textAlign: "left",
  },
  _Group_27: {
    width: 327,
    height: 397,
    position: "absolute",
    left: 24,
    top: 96,
  },
  _Create_New_Event_2: {
    width: "auto",
    height: "auto",
    position: "absolute",
    left: 0,
    top: 40,
    color: "rgb(32, 38, 48)",
    fontSize: 24,
    fontWeight: "400",
    fontFamily: "Inter",
    letterSpacing: 0,
    textAlign: "left",
  },
  _vuesax_bulk_close_circle: {
    width: 24,
    height: 24,
    backgroundColor: "rgba(255, 255, 255, 0)",
    position: "absolute",
    left: 303,
    top: 0,
  },
  _vuesax_bulk_close_circle_2: {
    width: 24,
    height: 24,
    position: "absolute",
    left: 0,
    top: 0,
  },
  _close_circle: {
    width: 24,
    height: 24,
    position: "absolute",
    left: 0,
    top: 0,
  },
  _layer_7b8cbb: {
    position: "absolute",
    transform: [{ translateX: 2 }, { translateY: 2 }],
  },
  _layer_c4c70d: {},
  _layer_cd3fdf: {
    position: "absolute",
    transform: [{ translateX: 8.42249 }, { translateY: 8.4225 }],
  },
  _layer_a19d7b: {},
  _layer_11ed19: {
    position: "absolute",
  },
  _Frame_27: {
    width: "auto",
    height: "auto",
    backgroundColor: "rgba(0, 0, 0, 0)",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: 0,
    top: 101,
  },
  _Input_Text: {
    width: 327,
    height: 69,
    flexShrink: 0,
    marginBottom: 24,
  },
  _Form: {
    width: 327,
    height: 44,
    position: "absolute",
    left: 0,
    top: 25,
  },
  _Rectangle_6: {
    width: 327,
    height: 44,
    backgroundColor: "rgba(196, 196, 196, 0)",
    position: "absolute",
    left: 0,
    top: 0,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderStyle: "solid",
    borderColor: "rgb(229, 233, 243)",
    borderRadius: 8,
  },
  _Label: {
    width: "auto",
    height: "auto",
    position: "absolute",
    left: 0,
    top: 0,
    color: "rgb(115, 134, 170)",
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "Inter",
    letterSpacing: 0,
    textAlign: "left",
  },
  _Category: {
    width: 64,
    height: 17,
    flexShrink: 0,
    marginBottom: 24,
  },
  _Category_2: {
    width: "auto",
    height: "auto",

    left: 0,
    top: 0,
    color: "rgb(115, 134, 170)",
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "Inter",
    letterSpacing: 0,
    textAlign: "left",
  },
  _Date___ttime: {
    width: "auto",
    height: "auto",
    backgroundColor: "rgba(0, 0, 0, 0)",
    display: "flex",
    flexDirection: "column",
    flexShrink: 0,
    marginBottom: 24,
  },
  _Group_32: {
    width: 271,
    height: 17,
    flexShrink: 0,
    marginBottom: 8,
  },
  _Date___time: {
    width: "auto",
    height: "auto",
    position: "absolute",
    left: 0,
    top: 0,
    color: "rgb(115, 134, 170)",
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "Inter",
    letterSpacing: 0,
    textAlign: "left",
  },
  _Frame_29: {
    width: "auto",
    height: "auto",
    backgroundColor: "rgba(0, 0, 0, 0)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    left: 243,
    top: 0,
  },
  _Group_14: {
    width: 327,
    height: 44,
    flexShrink: 0,
    marginBottom: 8,
  },
  _Rectangle_7: {
    width: 155.5,
    height: 44,
    backgroundColor: "rgba(196, 196, 196, 0)",
    position: "absolute",
    left: 0,
    top: 0,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderStyle: "solid",
    borderColor: "rgb(229, 233, 243)",
    borderRadius: 8,
  },
  _Group_28: {
    width: 20,
    height: 20,
    position: "absolute",
    left: 123,
    top: 12,
  },
  _vuesax_linear_calendar: {
    width: 20,
    height: 20,
    backgroundColor: "rgba(255, 255, 255, 0)",
    position: "absolute",
    left: 0,
    top: 0,
  },
  _vuesax_linear_calendar_2: {
    width: 20,
    height: 20,
    position: "absolute",
    left: 0,
    top: 0,
  },
  _calendar: {
    width: 20,
    height: 20,
    position: "absolute",
  },
  _layer_ba5dc0: {
    position: "absolute",
    transform: [{ translateX: 6.66666 }, { translateY: 1.66667 }],
  },
  _layer_15cee4: {},
  _layer_030df2: {
    position: "absolute",
    transform: [{ translateX: 13.3333 }, { translateY: 1.66667 }],
  },
  _layer_121187: {},
  _layer_2eaa1d: {
    position: "absolute",
    transform: [{ translateX: 2.91666 }, { translateY: 7.575 }],
  },
  _layer_399c22: {},
  _layer_c63052: {
    position: "absolute",
    transform: [{ translateX: 2.5 }, { translateY: 2.91667 }],
  },
  _layer_45d4f5: {},
  _layer_f5425f: {
    position: "absolute",
  },
  _layer_e0891a: {
    position: "absolute",
    transform: [{ translateX: 12.6668 }, { translateY: 11 }],
  },
  _layer_52e3ca: {},
  _layer_510e53: {
    position: "absolute",
    transform: [{ translateX: 12.6668 }, { translateY: 13.5 }],
  },
  _layer_ef5cd9: {},
  _layer_09f492: {
    position: "absolute",
    transform: [{ translateX: 9.58414 }, { translateY: 11 }],
  },
  _layer_0d7b5e: {},
  _layer_f0ebd9: {
    position: "absolute",
    transform: [{ translateX: 9.58414 }, { translateY: 13.5 }],
  },
  _layer_e6219c: {},
  _layer_679853: {
    position: "absolute",
    transform: [{ translateX: 6.49985 }, { translateY: 11 }],
  },
  _layer_845a19: {},
  _layer_2cb92a: {
    position: "absolute",
    transform: [{ translateX: 6.49985 }, { translateY: 13.5 }],
  },
  _layer_041ff3: {},
  _Rectangle_8: {
    width: 155.5,
    height: 44,
    backgroundColor: "rgba(196, 196, 196, 0)",
    position: "absolute",
    left: 171.5,
    top: 0,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderStyle: "solid",
    borderColor: "rgb(229, 233, 243)",
    borderRadius: 8,
  },
  _Group_29: {
    width: 20,
    height: 20,
    position: "absolute",
    left: 295,
    top: 12,
  },
  _vuesax_linear_arrow_down: {
    width: 20,
    height: 20,
    backgroundColor: "rgba(255, 255, 255, 0)",
    position: "absolute",
    left: 0,
    top: 0,
  },
  _vuesax_linear_arrow_down_2: {
    width: 20,
    height: 20,
    position: "absolute",
    left: 0,
    top: 0,
  },
  _arrow_down: {
    width: 20,
    height: 20,
    position: "absolute",
    left: 0,
    top: 0,
  },
  _layer_470bf1: {
    position: "absolute",
    transform: [{ translateX: 3.40002 }, { translateY: 7.45833 }],
  },
  _layer_7ee643: {},
  _layer_74530b: {
    position: "absolute",
  },
  _Group_16: {
    width: 327,
    height: 44,
    flexShrink: 0,
  },
  _Rectangle_7_2: {
    width: 155.5,
    height: 44,
    backgroundColor: "rgba(196, 196, 196, 0)",
    position: "absolute",
    left: 0,
    top: 0,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderStyle: "solid",
    borderColor: "rgb(229, 233, 243)",
    borderRadius: 8,
  },
  _Group_31: {
    width: 20,
    height: 20,
    position: "absolute",
    left: 123,
    top: 12,
  },
  _vuesax_linear_calendar_3: {
    width: 20,
    height: 20,
    backgroundColor: "rgba(255, 255, 255, 0)",
    position: "absolute",
    left: 0,
    top: 0,
  },
  _vuesax_linear_calendar_4: {
    width: 20,
    height: 20,
    position: "absolute",
    left: 0,
    top: 0,
  },
  _calendar_2: {
    width: 20,
    height: 20,
    position: "absolute",
  },
  _layer_6f1fe5: {
    position: "absolute",
    transform: [{ translateX: 6.66666 }, { translateY: 1.66666 }],
  },
  _layer_ad0e63: {},
  _layer_7725b9: {
    position: "absolute",
    transform: [{ translateX: 13.3333 }, { translateY: 1.66666 }],
  },
  _layer_c565d4: {},
  _layer_ea01f1: {
    position: "absolute",
    transform: [{ translateX: 2.91666 }, { translateY: 7.575 }],
  },
  _layer_aac474: {},
  _layer_edc0fa: {
    position: "absolute",
    transform: [{ translateX: 2.5 }, { translateY: 2.91666 }],
  },
  _layer_61422f: {},
  _layer_bf27d3: {
    position: "absolute",
  },
  _layer_10b6aa: {
    position: "absolute",
    transform: [{ translateX: 12.6668 }, { translateY: 11 }],
  },
  _layer_e06c42: {},
  _layer_06589b: {
    position: "absolute",
    transform: [{ translateX: 12.6668 }, { translateY: 13.5 }],
  },
  _layer_07df8c: {},
  _layer_393545: {
    position: "absolute",
    transform: [{ translateX: 9.58414 }, { translateY: 11 }],
  },
  _layer_5d402b: {},
  _layer_61e015: {
    position: "absolute",
    transform: [{ translateX: 9.58414 }, { translateY: 13.5 }],
  },
  _layer_eb5023: {},
  _layer_e91c71: {
    position: "absolute",
    transform: [{ translateX: 6.49985 }, { translateY: 11 }],
  },
  _layer_58132e: {},
  _layer_45a8d6: {
    position: "absolute",
    transform: [{ translateX: 6.49985 }, { translateY: 13.5 }],
  },
  _layer_438589: {},
  _Rectangle_8_2: {
    width: 155.5,
    height: 44,
    backgroundColor: "rgba(196, 196, 196, 0)",
    position: "absolute",
    left: 171.5,
    top: 0,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderStyle: "solid",
    borderColor: "rgb(229, 233, 243)",
    borderRadius: 8,
  },
  _Group_30: {
    width: 20,
    height: 20,
    position: "absolute",
    left: 295,
    top: 12,
  },
  _vuesax_linear_arrow_down_3: {
    width: 20,
    height: 20,
    backgroundColor: "rgba(255, 255, 255, 0)",
    position: "absolute",
    left: 0,
    top: 0,
  },
  _vuesax_linear_arrow_down_4: {
    width: 20,
    height: 20,
    position: "absolute",
    left: 0,
    top: 0,
  },
  _arrow_down_2: {
    width: 20,
    height: 20,
    position: "absolute",
    left: 0,
    top: 0,
  },
  _layer_52f956: {
    position: "absolute",
    transform: [{ translateX: 3.40002 }, { translateY: 7.45834 }],
  },
  _layer_9416bc: {},
  _layer_0cff26: {
    position: "absolute",
  },
  _Location: {
    width: 0,
    height: 17,
    flexShrink: 0,
  },
  _Frame_28: {
    width: "auto",
    height: "auto",
    backgroundColor: "rgba(0, 0, 0, 0)",
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    left: 0,
    top: 0,
  },
  _Group_25: {
    width: 32,
    height: 32,
    position: "absolute",
    left: 0,
    top: 0,
  },
  _Ellipse_7: {
    width: 32,
    height: 32,
    position: "absolute",
    left: 0,
    top: 0,
  },
  _vuesax_linear_calendar_edit: {
    width: 18,
    height: 18,
    backgroundColor: "rgba(0, 0, 0, 0)",
    position: "absolute",
    left: 7,
    top: 7,
  },
  _vuesax_linear_calendar_edit_2: {
    width: 18,
    height: 18,
    position: "absolute",
    left: 0,
    top: 0,
  },
  _calendar_edit: {
    width: 18,
    height: 18,
    position: "absolute",
  },
  _layer_07bd6e: {
    position: "absolute",
    transform: [{ translateX: 6 }, { translateY: 1.5 }],
  },
  _layer_9a8631: {},
  _layer_211848: {
    position: "absolute",
    transform: [{ translateX: 12 }, { translateY: 1.5 }],
  },
  _layer_2f7514: {},
  _layer_003686: {
    position: "absolute",
    transform: [{ translateX: 2.625 }, { translateY: 6.8175 }],
  },
  _layer_f18818: {},
  _Group: {
    width: 5.11539,
    height: 5.11662,
    position: "absolute",
    transform: [{ translateX: 11.3781 }, { translateY: 11.3977 }],
  },
  _layer_349208: {
    position: "absolute",
  },
  _layer_dae996: {},
  _layer_cc495c: {
    position: "absolute",
    transform: [{ translateX: 2.64685 }, { translateY: 0.812256 }],
  },
  _layer_24a5ab: {},
  _layer_4aea0c: {
    position: "absolute",
    transform: [{ translateX: 2.25 }, { translateY: 2.625 }],
  },
  _layer_d64931: {},
  _layer_3f2644: {
    position: "absolute",
  },
});
