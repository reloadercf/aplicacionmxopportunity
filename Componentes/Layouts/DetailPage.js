// import liraries
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, ScrollView,
} from 'react-native';
import HeaderPage from '../header/HeaderPage';

// create a component
class DetailPage extends Component {
  render() {
    console.log(this.props.navigation.state.params.name);
    return (
      <ScrollView style={styles.container}>
        <HeaderPage {...this.props} />
        <View>
          <Text>asdadsasd</Text>
        </View>

      </ScrollView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffff',
  },
});

// make this component available to the app
export default DetailPage;
