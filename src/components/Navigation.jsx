import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../pages/HomeScreen";
import FavoriteScreen from "../pages/FavoriteScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { GlobalStyles } from "../constans/stlyes";
import MovieScreen from "../pages/MovieScreen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const CustomHeaderMovieTitle = () => {
  return (
    <Text
      style={{
        fontSize: 24,
        fontWeight: "bold",
        color: GlobalStyles.colors.primary50,
      }}
    >
      <Text style={{ color: GlobalStyles.colors.red500 }}>M</Text>
      <Text>ovie</Text>
    </Text>
  );
};

const CustomHeaderFavoritesTitle = () => {
  return (
    <Text
      style={{
        fontSize: 24,
        fontWeight: "bold",
        color: GlobalStyles.colors.primary50,
      }}
    >
      <Text style={{ color: GlobalStyles.colors.red500 }}>F</Text>
      <Text>avorites</Text>
    </Text>
  );
};

const StackNavigator=()=>{
return(

    <Stack.Navigator >
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="MovieDetails" component={MovieScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>

)
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: GlobalStyles.colors.gray500,
          },
          headerTitleAlign: "center",
          headerTintColor: GlobalStyles.colors.primary50,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          drawerContentStyle: { backgroundColor: GlobalStyles.colors.gray500 },
          drawerInactiveTintColor: GlobalStyles.colors.primary50,
          drawerActiveBackgroundColor: GlobalStyles.colors.blue500,
          drawerActiveTintColor: GlobalStyles.colors.accent500,
        }}
      >
        <Drawer.Screen
          name="Movie"
          component={StackNavigator}
          options={{
            headerTitle: (props) => <CustomHeaderMovieTitle {...props} />,
          }}
        />
        <Drawer.Screen
          name="Favorites"
          component={FavoriteScreen}
          options={{
            headerTitle: (props) => <CustomHeaderFavoritesTitle {...props} />,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
