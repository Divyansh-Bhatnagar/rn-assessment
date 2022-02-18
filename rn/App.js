import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import UserProfile from "./src/screens/UserProfile";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
    UProfile: UserProfile,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
