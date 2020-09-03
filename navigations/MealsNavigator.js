import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Platform } from "react-native";

import { Ionicons } from "@expo/vector-icons";

//all screens needed
import Categories from "../screens/Categories.screen";
import CatogoryMeals from "../screens/CatogoryMeals.Screen";
import MealDetail from "../screens/MealDetail.screen";
import Favorites from "../screens/Favorites.screen";

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

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name={"ios-restaurant"}
              size={24}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Favorites: {
      screen: Favorites,
      navigationOptions: {
        tabBarLabel: "Favorites!",
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name={"ios-star"} size={24} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accentColor,
    },
  }
);

export default createAppContainer(MealsFavTabNavigator);
