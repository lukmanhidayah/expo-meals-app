import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

//all screens needed
import Categories from "../screens/Categories.screen";
import CategoryMeals from "../screens/CategoryMeals.Screen";
import MealDetail from "../screens/MealDetail.screen";
import Favorites from "../screens/Favorites.screen";
import Filters from "../screens/Filters.screen";

//all constants needed
import Colors from "../constants/Colors";

const defaultStackNavOptions = {
  // mode: "modal",
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  },
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: Categories,
    },
    CategoryMeals: {
      screen: CategoryMeals,
    },
    MealDetail: {
      screen: MealDetail,
    },
  },
  defaultStackNavOptions
);

const FavNavigator = createStackNavigator(
  {
    Favorites: Favorites,
    MealDetail: {
      screen: MealDetail,
    },
  },
  defaultStackNavOptions
);

const tabScreenConfig = {
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
      tabBarColor: Colors.primaryColor,
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel: "Favorites!",
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name={"ios-star"} size={24} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.accentColor,
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: "white",
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primaryColor,
        },
      })
    : createBottomTabNavigator({
        tabScreenConfig,
        tabBarOptions: {
          activeTintColor: Colors.accentColor,
        },
      });

const FilterNavigator = createStackNavigator(
  {
    Filters: Filters,
  },
  defaultStackNavOptions
);

const MainNavigator = createDrawerNavigator({
  MealsFavs: MealsFavTabNavigator,
  Filters: FilterNavigator,
});

export default createAppContainer(MainNavigator);
