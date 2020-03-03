import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Button from "../components/Button";

class Login extends Component {
  onPressRegister = () => {
    this.props.navigation.navigate("Register");
  };

  onPressLogin =() =>{
    this.props.navigation.navigate("Logged");
  };
  

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        
          {/* Image part */}
          <ImageBackground
            source={require("../../assets/login_bg_3.jpg")}
            style={{
              flex: 1,
              width: null,
              
              resizeMode: 'cover',
              //height: hp("100%")
              // height: 550
            }}
          >
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
  <Text style={{
              // fontSize: hp("11.25%"),
              fontSize: 90,
              fontWeight: "bold",
              height: 200,
              alignItems:'center'
            }}
          >
            BLOOM</Text>
</View>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end"
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingBottom: hp("5%"),
                  paddingHorizontal: hp("2.5%")
                }}
              >
                <Button
                  onPress={this.onPressRegister}
                  backgroundColor="#F08C4F"
                  text="Register"
                />
                <Button 
                onPress={this.onPressLogin}
                backgroundColor="#5BBC9D" 
                text="Login" 
                />
              </View>
            </View>
          </ImageBackground>
        </View>
     // </View>
    );
  }
}

export default Login;
