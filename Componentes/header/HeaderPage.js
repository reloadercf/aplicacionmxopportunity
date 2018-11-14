// import liraries
import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import {
  Icon,
  Button,
  Header,

} from 'native-base';


class HeaderPage extends Component {
  render() {
    console.log(this.props);
    return (
      <Header style={styles.header}>
        <Button
          transparent
          onPress={() => this.props.navigation.openDrawer()}
        >
          <Icon name="ios-menu" style={styles.icon} />
        </Button>
        <Image style={styles.drawerImage} source={require('../../assets/images/logo.png')} />
        <Button
          transparent
        >
          <Icon name="share" style={styles.icon} />
        </Button>
      </Header>

    );
  }
}

// define your styles
const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  icon: {
    fontSize: 30,
    color: 'black',
  },
  drawerImage: {
    height: 60,
    width: 250,
  },
});

// make this component available to the app
export default HeaderPage;
