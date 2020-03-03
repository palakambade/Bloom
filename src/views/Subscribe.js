import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import HomeCategory from "../components/HomeCategory";
import Subs from "../components/Subs.js";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";


class Subscribe extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
         
        }}
      >
       
       
        <ScrollView scrollEnabled>
          <Subs //Subscription  categories with dfferent plans and price.
            imageUri={require("../../assets/bg1.jpg")}
            titleFirst="1 Month"
            titleSecond="At just Rs. 100"
           
            {...this.props}
          />
          <Subs
            imageUri={require("../../assets/bgg.jpg")}
            titleFirst="Rs. 500"
            titleSecond="For 6 Months"
            subTitle="Save more!"
            
            {...this.props}
          />
          <Subs
            imageUri={require("../../assets/bg1.jpg")}
            titleFirst="Rs. 1000"
            titleSecond="For 1 Year"
            subTitle="Super DEAL!"
            
            {...this.props}
          />
        </ScrollView>
      </View>
    );
  }
}

export default Subscribe;
