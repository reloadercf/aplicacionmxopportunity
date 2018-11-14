import { createDrawerNavigator } from 'react-navigation';
import Inicio from './Layouts/HomePage';
import DrawerNavigation from './drawer/DrawerNavigation';
import DirectorioPage from './Layouts/DirectorioPage';

const RutasPrincipales = createDrawerNavigator({
  Inicio: {
    screen: Inicio,
  },
  ULTIMO: {
    screen: Inicio,
  },
  LIFE: {
    screen: Inicio,
  },
  Directorio: {
    screen: DirectorioPage,
  },
},
{
  initialRouteName: 'Inicio',
  contentComponent: DrawerNavigation,
  drawerPosition: 'left',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRote: 'DrawerToggle',
});

export { RutasPrincipales };
