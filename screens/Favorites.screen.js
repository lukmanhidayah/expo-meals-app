import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

//all components needed
import MealsList from "../components/MealsList";
import HeaderButton from "../components/HeaderButton";

import { MEALS } from "../data/dummy-data";

const Favorites = (props) => {
  const favMeals = MEALS.filter((meal) => meal.id == "m1" || meal.id == "m2");

  return <MealsList navigation={props.navigation} listData={favMeals} />;
};

Favorites.navigationOptions = (navData) => {
  return {
    headerTitle: "Favorites Categories",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default Favorites;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
