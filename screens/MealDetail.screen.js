import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { MEALS } from "../data/dummy-data";

const MealDetail = (props) => {
  const mealId = props.navigation.getParam("mealId");

  const selectedMeal = MEALS.find((meal) => (meal.id = mealId));
  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title="Go Back to Catagories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

MealDetail.navigationOption = (navigationData) => {
  const mealId = navigationData.navigation.getParams("mealId");
  const selectedMeal = MEALS.find((meal) => (meal.id = mealId));
  return {
    headerTitle: selectedMeal.title,
    headerRight: <Text>FAV!</Text>,
  };
};

export default MealDetail;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
