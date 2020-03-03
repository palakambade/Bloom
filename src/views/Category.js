import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import Icon from "@expo/vector-icons/Ionicons";
import ItemList from "../components/ItemList";
import ajax from '../services/fetchData';

const CATEGORY = [
  "Sanitary Napkins",
  "Tampons",
  "Intimate Hygiene",
  
];

const NAPKINS = [
  {
    id: 1,
    imageUri: require("../../assets/Napkins/img1.jpg"),
    name: "Stayfree Secure",
    priceOne: 120,
    priceTwo: "Rs. 180"
  },
  {
    id: 2,
    imageUri: require("../../assets/Napkins/img2.jpg"),
    name: "Always Ultra thin",
    priceOne: 180,
    priceTwo: null
  },
  {
    id: 3,
    imageUri: require("../../assets/Napkins/img3.jpg"),
    name: "Stayfree Maxi(Regular)",
    priceOne: 80,
    priceTwo: null
  },
  {
    id: 4,
    imageUri: require("../../assets/Napkins/img4.jpg"),
    name: "Sofy Anti Bacteria",
    priceOne: 80,
    priceTwo: null
  },
  {
    id: 5,
    imageUri: require("../../assets/Napkins/img5.jpg"),
    name: "Sofy Comfort Nite",
    priceOne: 80,
    priceTwo: null
  },
  {
    id: 6,
    imageUri: require("../../assets/Napkins/img6.jpg"),
    name: "Stayfree All Night",
    priceOne: 80,
    priceTwo: null
  }
];

const TAMPONS = [
  {
    id: 1,
    imageUri: require("../../assets/Hygiene/tamp1.jpg"),
    name: "Sofy Soft Tampons",
    priceOne: 120,
    priceTwo: "Rs. 180"
  },
  {
    id: 2,
    imageUri: require("../../assets/Hygiene/tamp2.jpg"),
    name: "Kotex Regular",
    priceOne: 180,
    priceTwo: null
  },
  {
    id: 3,
    imageUri: require("../../assets/Hygiene/tamp3.jpg"),
    name: "Tampax Radiant",
    priceOne: 80,
    priceTwo: null
  },
  {
    id: 4,
    imageUri: require("../../assets/Hygiene/tamp4.jpg"),
    name: "Stayfree Tampons",
    priceOne: 80,
    priceTwo: null
  },
  {
    id: 5,
    imageUri: require("../../assets/Hygiene/tamp5.jpg"),
    name: "Playtex sport",
    priceOne: 80,
    priceTwo: null
  },
  {
    id: 6,
    imageUri: require("../../assets/Hygiene/tamp6.jpg"),
    name: "Beppy Without String",
    priceOne: 80,
    priceTwo: null
  }
];

const INTIMATE = [
  {
    id: 1,
    imageUri: require("../../assets/Hygiene/hy1.jpg"),
    name: "VWash Plus",
    priceOne: 120,
    priceTwo: "Rs. 180"
  },
  {
    id: 2,
    imageUri: require("../../assets/Hygiene/hy2.jpg"),
    name: "femfresh",
   priceOne: 120,
    priceTwo: null
  },
  {
    id: 3,
    imageUri: require("../../assets/Hygiene/hy3.jpg"),
    name: "NanoCare Gel",
    priceOne: 120,
    priceTwo: "Rs. 90"
  },
  {
    id: 4,
    imageUri: require("../../assets/Hygiene/hy4.jpg"),
    name: "HiJeen V",
    
    priceOne: 120
  },

  {
    id: 5,
    imageUri: require("../../assets/Hygiene/hy5.jpg"),
    name: "Menstrual cups (Set of 2)",
    
    priceOne: 120
  },


];

class Category extends Component {
  state = {
    currentIndex: 0,
    products: []
  };

  renderCategory = () => {
    return CATEGORY.map((item, i) => {
      return (
        <Text
          key={i}
          onPress={() => this.setState({ currentIndex: i })}
          style={{
            fontSize: 18,
            color: this.state.currentIndex === i ? "#F08C4F" : "white",
            paddingHorizontal: 10
          }}
        >
          {item}
        </Text>
      );
    });
  };

  renderItemList_Nap = () => {
    return NAPKINS.map((item, i) => {
      return (
        <ItemList
          onPress={() =>
            this.props.navigation.navigate("Detail", {
              detailName: item.name,
              detailImageUri: item.imageUri,
              detailPriceOne: item.priceOne,
              detailPriceTwo: item.priceTwo ? item.priceTwo : null
            })
          }
          key={item.id}
          imageUri={item.imageUri}
          name={item.name}
          priceOne={item.priceOne}
          priceTwo={item.priceTwo ? item.priceTwo : null}
        />
      );
    });
  };

  renderItemList_Hygiene = () => {
    return TAMPONS.map((item, i) => {
      return (
        <ItemList
          onPress={() =>
            this.props.navigation.navigate("Detail", {
              detailName: item.name,
              detailImageUri: item.imageUri,
              detailPriceOne: item.priceOne,
              detailPriceTwo: item.priceTwo ? item.priceTwo : null
            })
          }
          key={item.id}
          imageUri={item.imageUri}
          name={item.name}
          priceOne={item.priceOne}
          priceTwo={item.priceTwo ? item.priceTwo : null}
        />
      );
    });
  };

  renderItemList_Intimate = () => {
    return INTIMATE.map((item, i) => {
      return (
        <ItemList
          onPress={() =>
            this.props.navigation.navigate("Detail", {
              detailName: item.name,
              detailImageUri: item.imageUri,
              detailPriceOne: item.priceOne,
              detailPriceTwo: item.priceTwo ? item.priceTwo : null
            })
          }
          key={item.id}
          imageUri={item.imageUri}
          name={item.name}
          priceOne={item.priceOne}
          priceTwo={item.priceTwo ? item.priceTwo : null}
        />
      );
    });
  };

  renderItemList = () => {
    if (this.state.currentIndex === 0) {
      return this.renderItemList_Nap();
    } else if (this.state.currentIndex === 1) {
      return this.renderItemList_Hygiene();
    }
    else if(this.state.currentIndex === 2){
      return this.renderItemList_Intimate();
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        {/* headerScrollHorizontal */}
        <View
          style={{
            height: hp("8%"),
            backgroundColor: "#63CBA7",
            flexDirection: "row"
          }}
        >
          <View
            style={{
              flex: 4
            }}
          >
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                justifyContent: "center"
              }}
              ref={node => (this.scroll = node)}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center"
                }}
              >
                {this.renderCategory()}
              </View>
            </ScrollView>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Icon
              onPress={() => {
                this.scroll.scrollTo({ x: wp("80%") });
              }}
              name="ios-arrow-forward"
              size={20}
              color="white"
            />
          </View>
        </View>
        {/* headerScrollHorizontal */}

        {/* itemLists ScrollVertical */}
        <View
          style={{
            flex: 1
          }}
        >
          <ScrollView
            contentContainerStyle={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between"
            }}
          >
            {/* ItemList */}
            {this.renderItemList()}
          </ScrollView>
        </View>
        {/* itemLists ScrollVertical */}
      </View>
    );
  }
}

export default Category;
