import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack"
import HomeScreen from "./src/screens/HomeScreen"
import Exercise17Screen from "./src/screens/Exercise17Screen"

const navigator = createStackNavigator(
  {
    Home: Exercise17Screen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
