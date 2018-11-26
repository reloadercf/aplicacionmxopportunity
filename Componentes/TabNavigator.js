import { createMaterialTopTabNavigator } from 'react-navigation';
import { StackHome } from './StackHome';
import { StackModa } from './StackModa';


const TabNavigator = createMaterialTopTabNavigator({
  ULTIMO: {
    screen: StackHome,
  },
  MODA: {
    screen: StackModa,
  },

});

export { TabNavigator };
