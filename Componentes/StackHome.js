import { createStackNavigator } from 'react-navigation';
import DetailPage from './Layouts/DetailPage';
import HomePage from './Layouts/HomePage';
import ModaPage from './Layouts/ModaPage';

const StackHome = createStackNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: () => ({
      title: 'LO ULTIMO',
      header: null,
    }),
  },
  Moda: {
    screen: ModaPage,
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
