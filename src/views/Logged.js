import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Platform,
  Animated,
  Keyboard,
  TextInput,
  Alert,
  StyleSheet,
} from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Input from "../components/Input";
import Button from "../components/Button";

import { users } from '../services/data';

class Logged extends Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: ''};
    }

  onPressCompleteLogin = () => {
    users.map((item  => {
        if (this.state.email == item.email) {
            if (this.state.password == item.password) {
                this.props.navigation.navigate("Home");
                    return(0);
              }
            
            else {
                Alert.alert(
                    'Alert Title',
                    'My Alert Msg',
                    [
                      {text: 'Wrong Password', onPress: () => console.log('Ask me later pressed')},
                      {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                      },
                      {text: 'Try Again', onPress: () => console.log('OK Pressed')},
                    ],
                    {cancelable: false},
                  );
                  return(0);
            }

            return(console.log('Error'));
        }
        else {
            Alert.alert(
                'Alert Title',
                'My Alert Msg',
                [
                  {text: 'User does not exit', onPress: () => console.log('Ask me later pressed')},
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {text: 'Register', onPress: () =>  this.props.navigation.navigate("Register")},
                ],
                {cancelable: false},
              );
              return(0);
        }

    }))
    
  };

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
            Log In.
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
         
          <TextInput style={styles.input} label="Your email address" onChangeText={(email) => this.setState({email})}
          value={this.state.email} placeholder="Email address" />
          <TextInput style = {styles.input} label="Your password"  onChangeText={(password) => this.setState({password})}
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
                onPress={this.onPressCompleteLogin}
                backgroundColor="#F08C4F"
                text="Login"
              />
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

export default Logged;

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