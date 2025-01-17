"use strict";

import React, { Component, AsyncStorage } from "react"; //this async storage is deprecated
//import AsyncStorage from "@react-native-community/async-storage";
import { StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  ApplicationProvider,
  Button,
  Text,
  Toggle,
  Input
} from "react-native-ui-kitten";
const HOTLINENUMBER = "1-800-273-8255";
export default class CallSettings extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  constructor() {
    super();

    this.state = {
      checked: true,
      inputValue: HOTLINENUMBER,
      popoverVisible: false
    };
  }
  //TODO: save it with async, MAKE IT WORK
  onChange = (checked: boolean) => {
    this.setState({ checked });
    if (this.state.inputValue != HOTLINENUMBER && this.state.checked == true) {
      this.setState({ inputValue: HOTLINENUMBER });
    }
  };

  onInputValueChange = (inputValue: string) => {
    this.setState({ inputValue });
  };
  togglePopover = () => {
    this.setState({ popoverVisible: !this.state.popoverVisible });
  };

  renderPopoverContentElement = (): React.ReactElement<ViewProps> => {
    return (
      <View>
        <Text>Submit.</Text>
      </View>
    );
  };

  render() {
    return (
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.box}
        scrollEnabled={false}
      >
        <View style={styles.toggleInfo}>
          <View style={styles.horzBox}>
            <Text category="s1" status="info">
              Automatic hotline call
            </Text>
            <Toggle
              checked={this.state.checked}
              onChange={this.onChange}
              status="info"
            />
          </View>
          <Text>
            If this is enabled, {HOTLINENUMBER}, the National Suicide Prevention
            Lifeline, will be called in an emergency. This is enabled by
            default.
          </Text>
          <Text numberOfLines={1} status="info">
            Currently set to: {this.state.inputValue}
          </Text>
        </View>

        <Input
          keyboardType={"phone-pad"}
          status="info"
          disabled={this.state.checked}
          value={this.state.inputValue}
          onChangeText={this.onInputValueChange}
          label="If you are not in the United States or you would like to call
          someone other than the National Suicide Prevention Lifeline, you
          should change this number."
          caption="For your own safety, please ensure that this phone number is correct."
        />
      </KeyboardAwareScrollView>
    );
  }
}

var styles = StyleSheet.create({
  horzBox: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  box: {
    borderRadius: 5,
    borderColor: "whitesmoke",
    borderWidth: 5,
    width: "90%",
    padding: 10
  },
  toggleInfo: {
    paddingBottom: 20
  }
});

module.exports = CallSettings;
