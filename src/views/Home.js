import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import HomeCategory from "../components/HomeCategory";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

class Home extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
         /* justifyContent: 'center',
          alignSelf: 'stretch',
    width: null,*/
        }}
      >
       
       
        <ScrollView scrollEnabled>
          <HomeCategory
            imageUri={require("../../assets/drawer_bg3.jpg")}
            titleFirst="BUY NOW"
           
            titleSecond="Stay Healthy!"
            screenProps="Super"
            {...this.props}
          />
          <HomeCategory
            imageUri={require("../../assets/tam.jpg")}
            titleFirst="Tampons"
            
            {...this.props}
          />
          <HomeCategory
            imageUri={require("../../assets/in.jpg")}
            titleFirst="Intimate Hygiene"
            
            {...this.props}
          />
        </ScrollView>
      </View>
    );
  }
}

export default Home;
