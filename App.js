import React from "react";
import { Dimensions } from "react-native";
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import Icon from "@expo/vector-icons/Ionicons";
import Login from "./src/views/Login";
import Register from "./src/views/Register";
import Home from "./src/views/Home";
import Category from "./src/views/Category";
import Detail from "./src/views/Detail";
import Basket from "./src/views/Basket";  
import EditBasket from "./src/views/EditBasket";
import Address from "./src/views/Address";
import Shipping from "./src/views/Shipping";
import Payment from "./src/views/Payment";
import TermsAndConditions from "./src/views/TermsAndConditions";
import CreditCard from "./src/views/CreditCard";
import CustomDrawerComponent from "./src/components/CustomDrawerComponent";
import Subs from "./src/components/Subs.js";
import Subscribe from "./src/views/Subscribe";
import Calen from "./src/components/Calen";
import Logged from "./src/views/Logged";
import Account from "./src/views/Account";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
//to navigate to payment page
const paymentStackNavigator = createStackNavigator(
  {
    Payment: {
      screen: Payment
    },
    CreditCard: {
      screen: CreditCard
    }
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const CheckoutTabNavigator = createMaterialTopTabNavigator(
  {
    Address: {
      screen: Address
    },
    Shipping: {
      screen: Shipping
    },
    Payment: {
      screen: paymentStackNavigator
    }
  },
  {
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: "#F08C4F",
      style: {
        backgroundColor: "#63CBA7"
      },
      indicatorStyle: {
        backgroundColor: "#F08C4F"
      }
    }
  }
);
//home page navigation
const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Home",
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#5BBC9D"
        },
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            color="white"
            size={30}
            style={{
              paddingLeft: 10
            }}
          />
        ),
        headerRight: (
          <Icon
            onPress={() => navigation.openDrawer()}
           // name="ios-search"
            color="white"
            size={30}
            style={{
              paddingRight: 10
            }}
          />
        )
      };
    }
  },

  //Drawer category with different options
  Category: {
    screen: Category,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: navigation.state.params.name,
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#5BBC9D"
        },
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            color="white"
            size={30}
            style={{
              paddingLeft: 10
            }}
          />
        ),
        headerRight: (
          <Icon
            onPress={() => navigation.navigate("Basket")}
            name="md-cart"
            color="white"
            size={30}
            style={{
              paddingRight: 10
            }}
          />
        )
      };
    }
  },

  //Basket page navigator
  Basket: {
    screen: Basket,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Basket",
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#5BBC9D"
        },
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
            style={{
              paddingLeft: 10
            }}
          />
        )
      };
    }
  },
//calendar component navigator
  Calen:{
    screen: Calen,
    navigationOption:({navigation}) =>{
      return{
        headerTitle: "Calendar",
        headerTitleStyle:{
          color:"white0"
        },
        headerStyle: {
          backgroundColor: "#5BBC9D"
        },
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
            style={{
              paddingLeft: 10
            }}
          />
        )
      };
    }
  },
//subscribe page component navigator
  Subscribe:{
    screen: Subscribe,
    navigationOptions:({navigation}) =>{
      return{
        headerTitle: "Subscribe",
        headerTitleStyle:{
          color:"white"
        },
        headerStyle:{
          backgroundColor: "#5BBC9D"
        },
        headerLeft:(
          <Icon
          onPress={() => navigation.openDrawer()}
          name="md-menu"
          size={30}
          style={{
            paddingLeft: 10
          }}
          />
        )
      };
    }
  },
//Account page navigator
  Account:{
    screen: Account,
    navigationOptions:({navigation}) =>{
      return{
        headerTitle: "Account",
        headerTitleStyle:{
          color:"white"
        },
        headerStyle:{
          backgroundColor: "#5BBC9D"
        },
        headerLeft:(
          <Icon
          onPress={() => navigation.openDrawer()}
          name="md-menu"
          size={30}
          style={{
            paddingLeft: 10
          }}
          />
        )
      };
    }
  },

//Checkout page navigator
  Checkout: {
    screen: CheckoutTabNavigator,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#5BBC9D"
        },
        headerTitle: "Checkout",
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
            style={{
              paddingLeft: 10
            }}
          />
        )
      };
    }
  },
  Detail: {
    screen: Detail,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#5BBC9D"
        },
        headerTitle: navigation.state.params.detailName,
        headerLeft: null,
        headerRight: (
          <Icon
            onPress={() => navigation.navigate("Category")}
            name="ios-close"
            color="white"
            size={50}
            style={{
              paddingRight: 10
            }}
          />
        ),
        gesturesEnabled: false
      };
    }
  },
  TermsAndConditions: {
    screen: TermsAndConditions,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#5BBC9D"
        },
        headerTitle: "Terms & Conditions",
        headerLeft: null,
        headerRight: (
          <Icon
            onPress={() => navigation.navigate("CreditCard")}
            name="ios-close"
            color="white"
            size={50}
            style={{
              paddingRight: 10
            }}
          />
        ),
        gesturesEnabled: false
      };
    }
  },
  EditBasket: {
    screen: EditBasket,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#5BBC9D"
        },
        headerTitle: "Edit Basket Item",
        headerLeft: null,
        headerRight: (
          <Icon
            onPress={() => navigation.navigate("Basket")}
            name="ios-checkmark"
            color="white"
            size={50}
            style={{
              paddingRight: 10
            }}
          />
        ),
        gesturesEnabled: false
      };
    }
  }
});



const HomeDrawNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeStackNavigator
    }
  },
  {
    drawerWidth: Dimensions.get("window").width,
    contentComponent: CustomDrawerComponent
  }
);
//Home page screen naviagtor switch
const AppSwitchNavigator = createSwitchNavigator({
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  },
  Logged:{
    screen: Logged
  },
  Home: {
    screen: HomeDrawNavigator
  }
});

const AppContainer = createAppContainer(AppSwitchNavigator);
