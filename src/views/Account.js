import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

class Account extends Component {
  onPressRegister = () => {
    this.props.navigation.navigate("Logged");
    
  };

  onPressShop = () =>{
    this.props.navigation.navigate("Subs");
  };
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={require("../../assets/girl.png")}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Palak Ambade</Text>
              <Text style={styles.info}>6 month subscription plan</Text>
              <Text style=
              {styles.description}>  
              {'Next Cycle: 4/04/2020 \n Deliver on: 29/03/2020 '}</Text>
              <Text style={styles.tips}> { '\n \n Daily tips: \n 1. Exercise with lighter activities \n 2. Hug a heating pad \n 3. Drink water and stay hydrated \n 4. Avoid Caffeine \n 5. Eat healthy food'}  </Text>
              
              <TouchableOpacity style={styles.buttonContainer} onPress={this.onPressShop}>
                <Text>Shop with us</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer} onPress={this.onPressRegister}>
                <Text>Log Out</Text> 
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "black",
    marginTop:10,
    textAlign: 'center'
  },
  tips:{
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: 'sans-serif',
    color: "#034f84"
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});
 

export default Account;
