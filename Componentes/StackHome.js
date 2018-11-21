import { createStackNavigator } from 'react-navigation';
import DetailPage from './Layouts/DetailPage';
import HomePage from './Layouts/HomePage';

const StackHome = createStackNavigator({
  Home: {
    screen: HomePage,
    params: { categoria: 'HOME' },
    navigationOptions: () => ({
      title: 'LO ULTIMO',
      header: null,

    }),
  },

  Detalle: {
    screen: DetailPage,
    navigationOptions: () => ({
      title: 'LO ULTIMO',
      header: null,
    }),
  },

});

export { StackHome };
