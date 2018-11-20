// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconEmail from 'react-native-vector-icons/MaterialCommunityIcons';
// create a component
class Share extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.sharemedia}>
          <Icon name="facebook-square" size={30} color="#222831" />
          <Text style={styles.textShare}>Facebook</Text>
        </View>
        <View style={styles.sharemedia}>
          <Icon name="whatsapp" size={30} color="#222831" />
          <Text style={styles.textShare}>WhatsApp</Text>
        </View>

        <View style={styles.sharemedia}>
          <IconEmail name="email" size={30} color="#222831" />
          <Text style={styles.textShare}>Correo</Text>
        </View>

        <View style={styles.sharemedia}>
          <Icon name="twitter-square" size={30} color="#222831" />
          <Text style={styles.textShare}>Twitter</Text>
        </View>

      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#ffff',
    zIndex: 1,
    position: 'absolute',
    right: 0,
    top: 50,
    width: 150,
    paddingVertical: 20,
    paddingHorizontal: 10,

  },
  sharemedia: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  textShare: {
    marginLeft: 10,
    fontSize: 14,
    letterSpacing: 2,
  },
});

// make this component available to the app
export default Share;
