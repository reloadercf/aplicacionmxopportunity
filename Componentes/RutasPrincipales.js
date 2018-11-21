import { createDrawerNavigator, StackActions } from 'react-navigation';
import Inicio from './Layouts/HomePage';
import DrawerNavigation from './drawer/DrawerNavigation';
import DirectorioPage from './Layouts/DirectorioPage';
import ModaPage from './Layouts/ModaPage';
import { StackHome, StackModa } from './StackHome';


const RutasPrincipales = createDrawerNavigator({
  INICIO: {
    screen: StackHome,
    navigationOptions: () => ({
      title: 'LO ULTIMO',
    }),
  },
  MODA: {
    screen: StackHome,

    navigationOptions: () => ({
      title: 'MODA',
    }),
  },
  HOLA: {
    screen: StackHome,
    params: { categoria: 'DINERO' },
    navigationOptions: () => ({
      title: 'DINERO',
    }),
  },
  DIRECTORIO: {
    screen: DirectorioPage,
  },

},

{

  contentComponent: DrawerNavigation,
  contentOptions: {
    activeTintColor: '#1d2323',
    activeBackgroundColor: '#ffff',
    itemStyle: {
      opacity: 1,
      borderBottomWidth: 1,
    },
    itemsContainerStyle: {
      opacity: 1,
      borderColor: '#1d2323',
    },
    labelStyle: {
      letterSpacing: 2,
      fontWeight: '300',
      fontSize: 14,
    },
  },
  drawerWidth: 200,
  drawerPosition: 'left',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRote: 'DrawerToggle',
});

export { RutasPrincipales };
