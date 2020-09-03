import React from "react";
import { StyleSheet, Text, View } from "react-native";

import MealsList from "../components/MealsList";

import { MEALS } from "../data/dummy-data";

const Favorites = (props) => {
  const favMeals = MEALS.filter((meal) => meal.id == "m1" || meal.id == "m2");

  return <MealsList navigation={props.navigation} listData={favMeals} />;
};

Favorites.navigationOptions = {
  headerTitle: "Your Favorites",
};

export default Favorites;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
