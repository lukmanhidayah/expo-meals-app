import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

//all screens needed
import Categories from "../screens/Categories.screen";
import CatogoryMeals from "../screens/CatogoryMeals.Screen";
import MealDetail from "../screens/MealDetail.screen";

const MealsNavigator = createStackNavigator({
  Categories: Categories,
  CategoryMeals: {
    screen: CatogoryMeals,
  },
  MealDetails: MealDetail,
});

export default createAppContainer(MealsNavigator);
