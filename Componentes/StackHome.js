import { createStackNavigator } from 'react-navigation';
import DetailPage from './Layouts/DetailPage';
import HomePage from './Layouts/HomePage';

const StackHome = createStackNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: () => ({
      title: 'LO ULTIMO',
      header: null,

    }),
  },

  Detalle: {
    screen: DetailPage,
    navigationOptions: () => ({
      header: null,
    }),
  },

});

export { StackHome };
