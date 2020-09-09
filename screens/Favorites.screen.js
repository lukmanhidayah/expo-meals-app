import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

//all components needed
import MealsList from "../components/MealsList";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";

const Favorites = (props) => {
  const availableMeals = useSelector((state) => state.meals.favoriteMeals);

  if (availableMeals.length === 0 || !availableMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No favorites meals found. Start adding some!</DefaultText>
      </View>
    );
  }

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
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
