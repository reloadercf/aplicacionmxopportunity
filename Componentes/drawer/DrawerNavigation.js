import React from 'react';
import {
  Container, Header, Body, Content,
} from 'native-base';
import { StyleSheet, Image } from 'react-native';
import { DrawerItems } from 'react-navigation';

const DrawerNavigation = props => (
  <Container>
    <Header style={styles.LogoDrawer}>
      <Body>
        <Image style={styles.drawerImage} source={require('../../assets/images/logo.png')} />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
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
