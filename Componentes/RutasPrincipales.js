import { createDrawerNavigator, StackActions } from 'react-navigation';
import { Dimensions } from 'react-native';
import Inicio from './Layouts/HomePage';
import DrawerNavigation from './drawer/DrawerNavigation';
import DirectorioPage from './Layouts/DirectorioPage';
import ModaPage from './Layouts/ModaPage';
import { StackHome } from './StackHome';
import { StackModa } from './StackModa';
import HomePage from './Layouts/HomePage';
import DetailPage from './Layouts/DetailPage';


const RutasPrincipales = createDrawerNavigator({
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
  // DIRECTORIO: {
  //   screen: DirectorioPage,
  // },

},

{

  contentComponent: DrawerNavigation,
  contentOptions: {
    activeTintColor: '#1d2323',
    activeBackgroundColor: '#ffff',

    itemsContainerStyle: {
      opacity: 1,
      borderColor: '#1d2323',
    },
    labelStyle: {
      opacity: 1,
      borderColor: '#1d2323',
      letterSpacing: 2,
      fontWeight: '300',
      fontSize: 14,
    },
  },
  drawerWidth: Dimensions.get('window').width - 250,
  drawerPosition: 'left',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRote: 'DrawerToggle',
});

export { RutasPrincipales };
