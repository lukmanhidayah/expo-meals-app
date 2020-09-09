import React from "react";
import { useSelector } from "react-redux";
import MealsList from "../components/MealsList";

import { CATEGORIES } from "../data/dummy-data";

const CategoryMeals = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealsList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMeals.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMeals;
