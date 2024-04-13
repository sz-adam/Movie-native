import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../pages/HomeScreen";
import FavoriteScreen from "../pages/FavoriteScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { GlobalStyles } from "../constans/styles";
import MovieScreen from "../pages/MovieScreen";
import SearchScreen from "../pages/SearchScreen";
import SeasonSide from "../pages/SeasonSide";
import SessionPageScreen from "../pages/SessionPageScreen";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

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

const DrawerNavigator = () => {
  return (
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
        component={HomeScreen}
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
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: GlobalStyles.colors.gray500,           
          },
          headerTintColor: GlobalStyles.colors.primary50,  
          headerTitle: ''
        }}
      >
        <Stack.Screen
          name="Home"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MovieDetails" component={MovieScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="SeasonSide" component={SeasonSide} />
        <Stack.Screen name="SessionPage" component={SessionPageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
