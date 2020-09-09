import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

//all components needed
import MealsList from "../components/MealsList";
import HeaderButton from "../components/HeaderButton";

const Favorites = (props) => {
  const availableMeals = useSelector((state) => state.meals.favoriteMeals);

  return <MealsList navigation={props.navigation} listData={availableMeals} />;
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
