import React from "react";
import MealsList from "../components/MealsList";

import { CATEGORIES, MEALS } from "../data/dummy-data";

const CatogoryMeals = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealsList listData={displayedMeals} navigation={props.navigation} />;
};

CatogoryMeals.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

export default CatogoryMeals;
