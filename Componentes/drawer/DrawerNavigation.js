import React from 'react';
import {
  StyleSheet, SafeAreaView, ScrollView,
} from 'react-native';
import { DrawerItems } from 'react-navigation';

const DrawerNavigation = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

export default DrawerNavigation;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  LogoDrawer: {
    height: 60,
    backgroundColor: '#ffff',
  },
  drawerImage: {
    height: 60,
    width: 250,
  },


});
