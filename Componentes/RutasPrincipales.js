import { createDrawerNavigator, StackActions } from 'react-navigation';
import { Dimensions } from 'react-native';
import HomePage from './Layouts/HomePage';
import Emocion from './Layouts/HomePage';
import Salud from './Layouts/HomePage';
import DrawerNavigation from './drawer/DrawerNavigation';
// import DirectorioPage from './Layouts/DirectorioPage';
import DetailPage from './Layouts/DetailPage';


const RutasPrincipales = createDrawerNavigator({
  Home: {
    screen: HomePage,
  },


  Detalle: {
    screen: DetailPage,
    navigationOptions: () => ({
      header: null,
    }),
  },

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
  drawerWidth: Dimensions.get('window').width - 200,
  drawerPosition: 'left',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRote: 'DrawerToggle',
});


export { RutasPrincipales };
