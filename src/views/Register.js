import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Platform,
  Animated,
  Keyboard,
  TextInput,
  StyleSheet,
} from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Button from "../components/Button";

import { users } from '../services/data';


class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {name: '', email: '', password: ''};
  }

  onPressCompleteRegister = () => {
    // const name = this.name.value;
    // const email = this.email.value;
    // const password = this.password.value;
    // const info = {name: '', email: '', password: ''};
    // console.log(info);
    users.push(this.state);
    console.log(users);
    this.props.navigation.navigate("Home");
  };

  onSubmit = event => {
    event.preventDefault();
    // const name = this.name.value;
    // const email = this.email.value;
    // const password = this.password.value;
    const info = {name:this.state.name, email:this.state.email, password:this.state.password}

    console.log(info);
    // users.push(info);
    // console.log(this.users);
    fetch('http://192.168.8.214:5001/users', {
      method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(info)
  })
  .then((response) => JSON.stringify(response.json())) 
.then((responseData) => { console.log("response: " + responseData); })
.catch((err) => { console.log(err); })
this.props.navigation.navigate("Home");

}

  componentWillMount() {
    this.formPosition = new Animated.Value(0);
    this.animatedTitleTopMargin = new Animated.Value(20);
    this.animatedTitleSize = new Animated.Value(70);

    this.keyboardWillShowSub = Keyboard.addListener(
      "keyboardWillShow",
      this.keyboardWillShow
    );
    this.keyboardWillHideSub = Keyboard.addListener(
      "keyboardWillHide",
      this.keyboardWillHide
    );

    this.keyboardDidShowSub = Keyboard.addListener(
      "keyboardDidShow",
      this.keyboardWillShow
    );
    this.keyboardDidHideSub = Keyboard.addListener(
      "keyboardDidHide",
      this.keyboardWillHide
    );
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
    this.keyboardDidShowSub.remove();
    this.keyboardDidHideSub.remove();
  }

  keyboardWillShow = event => {
    if (Platform.OS == "android") {
      duration = 100;
    } else {
      duration = event.duration;
    }
    Animated.parallel([
      Animated.timing(this.formPosition, {
        duration: duration,
        toValue: -hp("5.25%")
      }),
      Animated.timing(this.animatedTitleTopMargin, {
        duration: duration,
        toValue: 0
      }),
      Animated.timing(this.animatedTitleSize, {
        duration: duration,
        toValue: 50
      })
    ]).start();
  };

  keyboardWillHide = event => {
    if (Platform.OS == "android") {
      duration = 100;
    } else {
      duration = event.duration;
    }
    Animated.parallel([
      Animated.timing(this.formPosition, {
        duration: duration,
        toValue: 0
      }),
      Animated.timing(this.animatedTitleTopMargin, {
        duration: duration,
        toValue: 20
      }),
      Animated.timing(this.animatedTitleSize, {
        duration: duration,
        toValue: 70
      })
    ]).start();
  };

  render() {
  
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#F6F6F6"
        }}
      >
        <Animated.View
          style={{
            height: hp("18%"),
            justifyContent: "center",
            paddingHorizontal: hp("2.5%"),
            marginTop: this.animatedTitleTopMargin
            // marginTop: Platform.OS == "android" ? hp("3.75%") : null
          }}
        >
          <Animated.Text
            style={{
              fontSize: this.animatedTitleSize,
              fontWeight: "400",
              // opacity: this.animatedTitleOpacity
              opacity: 1
            }}
          >
            Signup.
          </Animated.Text>
        </Animated.View>
        <Animated.View
          style={{
            flex: 1,
            paddingHorizontal: hp("2.5%"),
            marginBottom: Platform.OS == "android" ? hp("10%") : null,
            marginTop: this.formPosition
          }}
        >
          {/* form */}
          <TextInput  style={styles.input} label="Your name" onChangeText={(name) => this.setState({name})}
          value={this.state.name} placeholder="Enter your Full name"  />
          <TextInput style={styles.input} label="Your email address" onChangeText={(email) => this.setState({email})}
          value={this.state.email} placeholder="Email address" />
          <TextInput style={styles.input} label="Your password"  onChangeText={(password) => this.setState({password})}
          value={this.state.password} placeholder="Password" secureTextEntry />
          
        </Animated.View>
        <View
          style={{
            flex: 1,
            paddingHorizontal: hp("2.5%")
          }}
        >
          <ImageBackground
            source={require("../../assets/login_bg_1.jpg")}
            style={{
              flex: 1,
              width: null,
              height: hp("72%")
              // height: Platform.OS == "android" ? 470 : 440
            }}
          >
          
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                paddingBottom: hp("5%")
              }}
            >
              <Button
                fullWidth
                onPress={this.onPressCompleteRegister}
                type="submit"
                backgroundColor="#F08C4F"
                text="Complete registration"
              />
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

export default Register;
const styles = StyleSheet.create({
  container: {
     paddingTop: 23
  },
  input: {

    textAlign: 'center',

height: 50,
 

 borderWidth: 2,
 borderColor: 'black',

 borderRadius: 20 ,
 
 backgroundColor : "#FFFFFF"
  },
  
})
