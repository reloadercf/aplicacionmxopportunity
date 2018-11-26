import { createStackNavigator } from 'react-navigation';
import DetailPage from './Layouts/DetailPage';
import ModaPage from './Layouts/ModaPage';

const StackModa = createStackNavigator({
  Moda: {
    screen: ModaPage,
    navigationOptions: () => ({
      title: 'MODA',
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

export { StackModa };
