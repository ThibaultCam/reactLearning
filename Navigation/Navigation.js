// Navigation/Navigation.js

import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import Search from '../components/search';
import FilmDetail from '../components/filmDetail'

const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  },
  FilmDetail: {
      screen: FilmDetail,
      navigationOptions: {
        title: ''
      }
  }
})

export default createAppContainer(SearchStackNavigator)