// import liraries
import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
  Icon,
  Button,
  Header,
  View,

} from 'native-base';
import Share from '../share/Share';


class HeaderPage extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  toggleshareButton=() => {
    const { show } = this.state;
    this.setState({ show: !show });
  }

  render() {
    console.log(this.props.navigation.state.routeName);
    return (
      <View>
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
            {
         this.props.navigation.state.routeName !== 'Detalle'
           ? <TouchableOpacity onPress={() => { this.toggleshareButton(); }}><Icon name="share" style={styles.icon} /></TouchableOpacity>
           : <TouchableOpacity onPress={() => { this.toggleshareButton(); }}><Icon name="share" style={styles.icondos} /></TouchableOpacity>
        }
          </Button>
        </Header>
        {
          this.state.show ? <Share /> : null
        }

      </View>

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
  icondos: {
    fontSize: 30,
    color: '#00adb5',
  },
  drawerImage: {
    height: 60,
    width: 250,
  },
});

// make this component available to the app
export default HeaderPage;
