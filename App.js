import SearchScreen from "./src/screens/SearchScreen";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import ResultShowScreen from "./src/screens/ResultShowScreen";
const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    resultShow: ResultShowScreen
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search"
    }
  }
);

export default createAppContainer(navigator);
