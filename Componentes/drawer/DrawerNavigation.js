
// import liraries
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, SafeAreaView, ScrollView,
} from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import { NavigationActions } from 'react-navigation';

// create a component
class DrawerNavigation extends Component {
  navigateToScreen = (route, datos) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
      params: datos,

    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.toggleDrawer());
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>

          <View style={styles.navSectionStyle}>
            <Text style={styles.labelStyle} onPress={this.navigateToScreen('Home', { categoria: 'Bienestar' })}>
               LO ULTIMO
            </Text>
          </View>

          <View style={styles.navSectionStyle}>
            <Text style={styles.labelStyle} onPress={this.navigateToScreen('Home', { categoria: 'MODA' })}>
              MODA
            </Text>
          </View>
          <View style={styles.navSectionStyle}>
            <Text style={styles.labelStyle} onPress={this.navigateToScreen('Home', { categoria: 'MODA' })}>
              Page1
            </Text>
          </View>


        </ScrollView>
      </SafeAreaView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
  },
  navSectionStyle: {
    opacity: 1,
    borderBottomWidth: 1,
    padding: 10,
  },
  labelStyle: {
    opacity: 1,
    letterSpacing: 2,
    fontWeight: '300',
    fontSize: 14,

  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },

});

// make this component available to the app
export default DrawerNavigation;
