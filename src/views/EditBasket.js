import React, { Component } from "react";
import { View } from "react-native";
import BasketItem from "../components/BasketItem";
import ChoosingSizeBox from "../components/ChoosingSizeBox";
//Basket item with return styling page
class EditBasket extends Component {
  render() {
    const {
      basketItemName,
      basketItemPrice,
      basketItemColor,
      basketItemSize,
      basketItemImageUri
    } = this.props.navigation.state.params;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#EFF0F1"
        }}
      >
        <BasketItem
          editIcon={false}
          imageUri={basketItemImageUri}
          name={basketItemName}
          color={basketItemColor}
          size={basketItemSize}
          price={basketItemPrice}
        />
        <View
          style={{
            flex: 1
          }}
        >
          
          <ChoosingSizeBox //choosing size box for sanitary napkins
            label="Choosing a size"
            onBasketPage={true}
            top={this.sizeBox}
            opacity={1}
            firstItem="small"
            secondItem="medium"
            thirdItem="large"
          />
          <ChoosingSizeBox //choosing a color box with different colors
            label="Choosing a color"
            onBasketPage={true}
            color={true}
            top={this.colorBox}
            opacity={1}
            firstItem="black"
            secondItem="yellow"
            thirdItem="blue"
          />
        </View>
      </View>
    );
  }
}

export default EditBasket;
