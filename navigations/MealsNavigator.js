import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";

//all screens needed
import Categories from "../screens/Categories.screen";
import CatogoryMeals from "../screens/CatogoryMeals.Screen";
import MealDetail from "../screens/MealDetail.screen";

//all constants needed
import Colors from "../constans/Colors";

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: Categories,
      navigationOptions: {
        headerTitle: "Meals Categories",
      },
    },
    CategoryMeals: {
      screen: CatogoryMeals,
    },
    MealDetail: {
      screen: MealDetail,
    },
  },
  {
    // mode: "modal",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
);

export default createAppContainer(MealsNavigator);
