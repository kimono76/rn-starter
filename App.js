import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack"
import HomeScreen from "./src/screens/HomeScreen"
import Exercise17Screen from "./src/screens/Exercise17Screen"
import ListScreen from "./src/screens/ListScreen"

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Exercise17: Exercise17Screen,
    List: ListScreen,
  },
  {
    initialRouteName: "List",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
