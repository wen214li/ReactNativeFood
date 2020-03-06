import SearchScreen from './src/screens/SearchScreen';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
const navigator = createStackNavigator({
  Search: SearchScreen
},{
  initialRouteName:'Search',
  defaultNavigationOptions:{
    title:'Business Search'
  }
});

export default createAppContainer(navigator);