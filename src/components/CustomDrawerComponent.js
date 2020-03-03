import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity
} from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Icon from "@expo/vector-icons/Ionicons";
//This component is for the drawer category options which are:- home, subscription,calendar,basket and account
class CustomDrawerComponent extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <ImageBackground
          source={require("../../assets/drawer_bg.jpg")}
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            resizeMode: "contain"
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(91, 188, 157, 0.9)",
              paddingTop: wp("14%"),
              paddingHorizontal: wp("9.5%"),
              paddingBottom: wp("7%")
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: "bold"
                }}
              >
                Menu
              </Text>
              <Icon
                onPress={() => this.props.navigation.closeDrawer()}
                name="ios-close"
                color="white"
                size={50}
              />
            </View>
            <View
              style={{
                flex: 2,
                justifyContent: "space-around",
                marginVertical: 20,
                padding: 5
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.closeDrawer();
                  this.props.navigation.navigate("Home");
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 5
                }}
              >
                <Icon name="ios-home" color="white" size={40} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 25,
                    fontWeight: "400",
                    marginLeft: wp("4.5%")
                  }}
                >
                  home
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.closeDrawer();
                  this.props.navigation.navigate("Subscribe");
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 5
                }}
              >
                <Icon name="ios-cash" color="white" size={40} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 25,
                    fontWeight: "400",
                    marginLeft: wp("4.5%")
                  }}
                >
                  Subscription
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.closeDrawer();
                  this.props.navigation.navigate("Calen");
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 5
                }}
              >
                <Icon name="ios-calendar" color="white" size={40} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 25,
                    fontWeight: "400",
                    marginLeft: wp("4.5%")
                  }}
                >
                  Calendar
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.closeDrawer();
                  this.props.navigation.navigate("Basket");
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 5
                }}
              >
                <Icon name="ios-cart" color="white" size={40} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 25,
                    fontWeight: "400",
                    marginLeft: wp("4.5%")
                  }}
                >
                  basket
                </Text>
              </TouchableOpacity>
              
            </View>


            <View
              style={{
                flex: 1,
                justifyContent: "flex-end"
              }}
            >
             {/* <View
                style={{
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <View
                  style={{
                    width: wp("20%"),
                    height: wp("20%"),
                    overflow: "hidden",
                    borderRadius: wp("10%"),
                    marginRight: wp("4.5%")
                  }}
                >
                  
                 
                  <Image
                    source={require("../../assets/reviewer.jpg")}
                    style={{
                      flex: 1,
                      width: null,
                      height: null,
                      resizeMode: "contain"
                    }}
                  />
                </View>

                <Text
                  style={{
                    color: "white",
                    fontSize: 25,
                    fontWeight: "400"
                  }}
                >
                  Account
                
                </Text>
               
              </View>
                </View>*/}

<TouchableOpacity
                onPress={() => {
                  this.props.navigation.closeDrawer();
                  this.props.navigation.navigate("Account");
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 5
                }}
              >
                <Icon name="ios-person" color="white" size={40} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 25,
                    fontWeight: "400",
                    marginLeft: wp("4.5%")
                  }}
                >
                  Account
                </Text>
              </TouchableOpacity>
          </View>
          </View>
          
                </ImageBackground>
                
        
      </View>
      
    );
  }
}

export default CustomDrawerComponent;

{
  /* <Text> CustomDrawerComponent </Text>
        <Button
          title="go to Basket"
          onPress={() => this.props.navigation.navigate("Basket")}
        /> */
}
